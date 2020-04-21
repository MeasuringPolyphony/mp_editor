import { Injectable } from '@angular/core';
import { StaffService } from './staff.service';
import { HNPService } from '../hnp.service';
import { Voice, Staff, Mensuration, IRI } from './definitions';

import { v4 as uuid } from 'uuid';

const NAMESPACE = 'http://www.music-encoding.org/ns/mei';

// Humdrum w Verovio sets deterministic xml:ids.
// This is bad™.
function recurseRandomUUID(element: Element) {
  if (element.hasAttribute("xml:id")) {
    element.setAttribute("xml:id", "m-" + uuid());
  }
  for (let i = 0; i < element.children.length; i++) {
    recurseRandomUUID(element.children[i]);
  }
}

@Injectable({
  providedIn: 'root'
})
export class MeiService {

  metadata: {
    shortTitle: string,
    composerName: string,
    userName: string,
    sourceURI: IRI,
    notationSubtype: string
  };

  constructor(private hnpService: HNPService, private staffService: StaffService) { }

  get headerData() { return this.metadata };
  set headerData(headerObject) {
    this.metadata = headerObject;
  }

  generateFullMEI(): Document {
    let meiDoc = this._createSkeletonMEI();
    // Iterate through voices
    let staves = this.staffService.staves;
    for (let voice in Voice) {
      let voiceStaves = staves.filter(staff => {
        return staff.voice == voice;
      });
      if (voiceStaves.length > 0) {
        this._addPart(meiDoc, voiceStaves);
      }
    }
    return meiDoc;
  }

  _generateHeader(meiDoc: Document) {
    let meiHead = meiDoc.createElementNS(NAMESPACE, "meiHead");
    let fileDesc = meiDoc.createElementNS(NAMESPACE, "fileDesc");
    meiHead.appendChild(fileDesc);
    let titleStmt = meiDoc.createElementNS(NAMESPACE, "titleStmt");
    fileDesc.appendChild(titleStmt);
    let title = meiDoc.createElementNS(NAMESPACE, "title");
    title.textContent = this.metadata.shortTitle;
    titleStmt.appendChild(title);
    let composer = meiDoc.createElementNS(NAMESPACE, "composer");
    composer.textContent = this.metadata.composerName;
    titleStmt.appendChild(composer);
    let respStmt = meiDoc.createElementNS(NAMESPACE, "respStmt");
    titleStmt.appendChild(respStmt);
    let persName = meiDoc.createElementNS(NAMESPACE, "persName");
    persName.textContent = this.metadata.userName;
    persName.setAttribute("role", "encoder");
    respStmt.appendChild(persName);
    let pubStmt = meiDoc.createElementNS(NAMESPACE, "pubStmt");
    fileDesc.appendChild(pubStmt);

    let sourceDesc = meiDoc.createElementNS(NAMESPACE, "sourceDesc");
    fileDesc.appendChild(sourceDesc);
    let source = meiDoc.createElementNS(NAMESPACE, "source");
    source.setAttribute("target", this.metadata.sourceURI);
    sourceDesc.appendChild(source);

    return meiHead;
  }

  _addPart(meiDoc: Document, staves: Staff[]) {
    let dir = null;
    let facsimile = meiDoc.querySelector("facsimile");

    staves.sort(Staff.compare);
    let part = meiDoc.createElementNS(NAMESPACE, "part");
    let scoreDef = this._generateScoreDef(meiDoc);
    part.appendChild(scoreDef);
    let staffDef = scoreDef.querySelector('staffDef');
    staffDef.setAttribute("label", staves[0].voice.toString());
    let partMensuration = this.staffService.voices.get(staves[0].voice);
    if (partMensuration.modus !== Mensuration.NA) {
      staffDef.setAttribute("modusminor", partMensuration.modus.toString());
    }
    if (partMensuration.tempus !== Mensuration.NA) {
      staffDef.setAttribute("tempus", partMensuration.tempus.toString());
    }
    if (partMensuration.prolatio !== Mensuration.NA) {
      staffDef.setAttribute("prolatio", partMensuration.prolatio.toString());
    }
    let section = meiDoc.createElementNS(NAMESPACE, "section");
    part.appendChild(section);
    let staff = meiDoc.createElementNS(NAMESPACE, "staff");
    staff.setAttribute("n", "1");
    section.appendChild(staff);

    if (staffDef.getAttribute('label') === 'tenor' &&
      this.staffService._repeatingTenor.repetitions > 1) {
      /* IMPORTANT NOTE */
      /* The "n" attribute here is used to represent the number of repetitions */
      /* It does NOT mean this is the nth directive of the piece */
      /* This should be replaced with a correct MEI attribute when possible */
      dir = meiDoc.createElementNS(NAMESPACE, "dir");
      dir.setAttribute("n", (this.staffService._repeatingTenor.repetitions - 1).toString());
      dir.setAttribute("layer", "1"); // The layer is always n="1" here.
      dir.textContent = 'Repeat ' + (this.staffService.repeatingTenor.repetitions - 1).toString() + ' times';
    }

    let layer = meiDoc.createElementNS(NAMESPACE, "layer");
    layer.setAttribute('n', '1');
    staff.appendChild(layer);
    let page: string = undefined;
    let graphic: Element = undefined;
    for (let staff of staves) {
      let staffContents: Element[] = this._getStaffContents(staff);
      // Ignore noteless staves
      if (staffContents.filter(element => {
        return element.tagName === 'note';
      }).length === 0) {
        continue;
      }

      if (staff.canvas !== page) {
        // Add pb
        let pb = meiDoc.createElementNS(NAMESPACE, "pb");
        let temp = Array.from(facsimile.querySelectorAll("graphic"))
          .filter(graphic => graphic.getAttribute("target") === staff.canvas);
        if (temp.length > 0) {
          graphic = temp[0];
          pb.setAttribute("facs", '#' + graphic.getAttribute("xml:id"));
        }
        else {
          let surface = this._createNewSurface(meiDoc, staff.canvas);
          graphic = surface.querySelector("graphic");
          pb.setAttribute("facs", '#' + graphic.getAttribute("xml:id"));
          facsimile.appendChild(surface);
        }
        page = staff.canvas
        layer.appendChild(pb);
      }
      let zone = this._createNewZone(meiDoc, staff);
      graphic.appendChild(zone);
      let sb = meiDoc.createElementNS(NAMESPACE, "sb");
      sb.setAttribute("facs", '#' + zone.getAttribute("xml:id"));
      layer.appendChild(sb);
      staffContents.forEach(child => {
        const endNoteFlag = (this.staffService._repeatingTenor.staffId === staff.id && this.staffService._repeatingTenor.elementId === child.getAttribute('xml:id'));
        recurseRandomUUID(child);
        // Set first note of repeating tenor if applicable
        if (dir && !dir.hasAttribute('plist') && child.tagName === 'note') {
          dir.setAttribute('plist', '#' + child.getAttribute('xml:id'));
        }
        if (child.tagName === 'ligature') {
          child.removeAttribute('form');
        }
        if (endNoteFlag) {
          dir.setAttribute('plist', dir.getAttribute('plist') + ' #' + child.getAttribute('xml:id'));
          dir.setAttribute('follows', '#' + child.getAttribute('xml:id'));
        }
        layer.appendChild(child);
      });
    }

    // Set last note of repeating tenor if it hasn't been set and should be
    if (dir) {
      if (!dir.hasAttribute('follows')) {
        let lastId = layer.lastElementChild.getAttribute('xml:id');
        dir.setAttribute('plist', dir.getAttribute('plist') + ' #' + lastId);
        dir.setAttribute('follows', '#' + lastId);
      }
      staff.appendChild(dir);
      dir.insertAdjacentHTML(
        'beforebegin',
        '<!-- The @n attribute on <dir> is used to represent the number of repetitions in a machine readable format. -->'
      );
    }

    let parts = meiDoc.querySelector('parts');
    parts.appendChild(part);
  }

  _createSkeletonMEI(): Document {
    let meiDoc = document.implementation.createDocument(NAMESPACE, "mei", null);
    let mei = meiDoc.documentElement;
    mei.setAttribute('meiversion', '4.0.1');
    // Create Header
    let head = this._generateHeader(meiDoc);
    // TODO Add more to header
    mei.appendChild(head);

    // Create music skeleton
    let music = meiDoc.createElementNS(NAMESPACE, 'music');
    let facsimile = meiDoc.createElementNS(NAMESPACE, 'facsimile');
    let body = meiDoc.createElementNS(NAMESPACE, 'body');
    let mdiv = meiDoc.createElementNS(NAMESPACE, 'mdiv');
    let parts = meiDoc.createElementNS(NAMESPACE, 'parts');
    mei.appendChild(music);
    music.appendChild(facsimile);
    music.appendChild(body);
    body.appendChild(mdiv);
    mdiv.appendChild(parts);

    return meiDoc;
  }

  _createNewSurface(meiDoc: XMLDocument, pageURI: string): Element {
    let surface = meiDoc.createElementNS(NAMESPACE, 'surface');
    surface.setAttribute('xml:id', 'm-' + uuid());
    let graphic = meiDoc.createElementNS(NAMESPACE, 'graphic');
    graphic.setAttribute('xml:id', 'm-' + uuid());
    graphic.setAttribute('target', pageURI);
    graphic.setAttribute('ulx', '0');
    graphic.setAttribute('uly', '0');
    // Set height and width
    surface.appendChild(graphic);
    return surface;
  }

  _getStaffContents(staff: Staff): Element[] {
    let rawMei = this.hnpService.humdrumToMEI(staff.musicList.getHumdrumScore());
    let parser = new DOMParser();
    let elements: Element[] = [];
    let humdrumMei = parser.parseFromString(rawMei, 'application/xml');
    let clef = humdrumMei.querySelector('clef');
    if (clef !== null) {
      elements.push(clef);
    }
    let layer = humdrumMei.querySelector('layer');
    if (layer !== null) {
      for (let element of Array.from(layer.children)) {
        elements.push(element);
      }
    }
    return elements;
  }

  _generateScoreDef(meiDoc: XMLDocument): Element {
    // Use the first staff to set defaults.
    let scoreDef = meiDoc.createElementNS(NAMESPACE, "scoreDef");
    let staffGrp = meiDoc.createElementNS(NAMESPACE, "staffGrp");
    scoreDef.appendChild(staffGrp);
    let staffDef = meiDoc.createElementNS(NAMESPACE, "staffDef");
    staffDef.setAttribute("n", "1");
    staffDef.setAttribute("lines", "5");
    staffDef.setAttribute("notationtype", "mensural.black");
    if (this.metadata.notationSubtype.length > 0) {
      staffDef.setAttribute("notationsubtype", this.metadata.notationSubtype);
    }
    staffGrp.appendChild(staffDef);
    return scoreDef;
  }

  _createNewZone(meiDoc: XMLDocument, staff: Staff): Element {
    let zone = meiDoc.createElementNS(NAMESPACE, "zone");
    zone.setAttribute('xml:id', 'm-' + uuid());
    zone.setAttribute('ulx', Math.round(staff.bbox.ulx).toString());
    zone.setAttribute('uly', Math.round(staff.bbox.uly).toString());
    zone.setAttribute('lrx', Math.round(staff.bbox.lrx).toString());
    zone.setAttribute('lry', Math.round(staff.bbox.lry).toString());
    return zone;
  }
}
