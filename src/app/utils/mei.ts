import { Part, Tenor } from './part';
import { System, Pb, Sb } from './system';
import { ClefItem, NoteItem, RestItem } from './MusicItem';
import { Voice, Mensuration } from './definitions';
import { IRI } from './definitions';


export const NAMESPACE = 'http://www.music-encoding.org/ns/mei';

export class MEIDocument {
  parts: Part[];
  metadata: Metadata;  // Should this be broken up better?
  notationSubtype: string;

  _meiDoc: Document;

  get notationType(): string {
    if (/Ars[_ ](antiqua|nova)/.test(this.notationSubtype)) {
      return "mensural.black";
    } else {
      return "mensural.white";
    }
  }

  constructor (manuscriptIRI: IRI) {  // This is for creating a new document
    this.metadata = new Metadata();
    this.metadata.sourceIRI = manuscriptIRI;
    this.parts = [];
    this._createSkeletonMEI();
  }

  static fromXML(source: XMLDocument): MEIDocument {
    let doc = source.documentElement;
    let iiif = "";
    try {
      let sourceElement = doc.querySelector("source");
      iiif = sourceElement.getAttribute("target");
    } catch (e) {
      console.debug(e);
    }
    let mei = new MEIDocument(iiif);

    // Try to get metadata
    let titleStmt = doc.querySelector("titleStmt");
    if (titleStmt) {
      if (titleStmt.querySelector("title")) {
        mei.metadata.shortTitle = titleStmt.querySelector("title").textContent;
      }
      if (titleStmt.querySelector("persName") && titleStmt.querySelector("persName").getAttribute("role") === "encoder") {
        mei.metadata.encoderName = titleStmt.querySelector("persName").textContent;
      }
      if (titleStmt.querySelector("composer")) {
        mei.metadata.composerName = titleStmt.querySelector("composer").textContent;
      }
    }

    let facsimile = doc.querySelector("facsimile");
    let surfaces = Array.from(facsimile.querySelectorAll("surface"));
    let zones = Array.from(facsimile.querySelectorAll("zone"));

    // Start processing parts
    const parts = Array.from(doc.querySelectorAll("part"));
    for (const part of parts) {
      let staffDef = part.querySelector("staffDef");
      console.assert(staffDef.hasAttribute("label"));
      let voice = staffDef.getAttribute("label");
      let partObj: Part | Tenor = /^[tT]enor/.test(voice) ? new Tenor(mei, part.getAttribute("xml:id")) : new Part(mei, part.getAttribute("xml:id"));
      partObj.voice = Voice[voice];
      mei.parts.push(partObj);
      let mensur = staffDef.querySelector("mensur");

      if (staffDef.hasAttribute("notationsubtype")) {
        mei.notationSubtype = staffDef.getAttribute("notationsubtype");
      }
      if (staffDef.hasAttribute("modusminor")) {
        partObj.modus = staffDef.getAttribute("modusminor") as Mensuration;
      } else if (mensur && mensur.hasAttribute("modusminor")) {
        partObj.modus = mensur.getAttribute("modusminor") as Mensuration;
      }
      if (staffDef.hasAttribute("tempus")) {
        partObj.tempus = staffDef.getAttribute("tempus") as Mensuration;
      } else if (mensur && mensur.hasAttribute("tempus")) {
        partObj.tempus = mensur.getAttribute("tempus") as Mensuration;
      }
      if (staffDef.hasAttribute("prolatio")) {
        partObj.prolatio = staffDef.getAttribute("prolatio") as Mensuration;
      } else if (mensur && mensur.hasAttribute("prolatio")) {
        partObj.prolatio = mensur.getAttribute("prolatio") as Mensuration;
      }

      const layer = part.querySelector("layer");
      // Handle repeating tenor if tenor
      if (/^[tT]enor/.test(partObj.voice)) {
        const dir = part.querySelector("dir");
        if (dir) {
          const tenorObj = partObj as Tenor;
          tenorObj.repetitions = Number(dir.getAttribute("n")) + 1
          const matchResults = dir.getAttribute("plist").match(/^#[-\w\d]+ #([-\w\d]+)$/);
          if (matchResults.length > 1) {
            tenorObj.endingId = matchResults[1];
          }
        }
      }
      // Handle regular children
      const layerChildren = Array.from(layer.querySelectorAll("pb,sb,clef,note,rest"));
      let activePb: Pb = null;
      let activeSystem: System = null;
      for (const child of layerChildren) {
        if (child.tagName === "pb") {
          let facs = child.getAttribute("facs").split("#")[1];
          console.assert(surfaces.some(el => { return el.getAttribute("xml:id") === facs; }));
          let surface = surfaces.find(el => { return el.getAttribute("xml:id") === facs; });
          let graphic = surface.querySelector("graphic");
          activePb = new Pb(graphic.getAttribute("target"), child.getAttribute("xml:id"));

          // Determine Pb index
          function setIndex(pb: Pb) {
            fetch(iiif).then(response => {
              return response.json();
            }).then((manifest: object) => {
              let canvases: object[] = manifest["sequences"][0]["canvases"];
              pb.index = canvases.findIndex(canvas => { return canvas["@id"] === pb.canvasIRI; });
            });
          }

          setIndex(activePb);
        } else if (child.tagName === "sb") {
          let sb: Sb;
          if (child.hasAttribute("facs")) {
            let facs = child.getAttribute("facs").split("#")[1];
            console.assert(zones.some(el => { return el.getAttribute("xml:id") === facs; }));
            let zone = zones.find(el => { return el.getAttribute("xml:id") === facs; });
            sb = new Sb(
              {
                ulx: Number(zone.getAttribute("ulx")),
                uly: Number(zone.getAttribute("uly")),
                lrx: Number(zone.getAttribute("lrx")),
                lry: Number(zone.getAttribute("lry"))
              },
              child.getAttribute("xml:id")
            );
          } else {
            sb = new Sb({ulx: 0, uly: 0, lrx: 0, lry: 0}, child.getAttribute("xml:id"));
          }
          activeSystem = new System();
          activeSystem.sb = sb;
          activeSystem.pb = activePb;
          partObj.addSystem(activeSystem);
        } else if (child.tagName === "clef") {
          let clef = ClefItem.parseXML(child);
          activeSystem.contents.m_list.push(clef);
        } else if (child.tagName === "rest") {
          let rest = RestItem.parseXML(child);
          activeSystem.contents.m_list.push(rest);
        } else if (child.tagName === "note") {
          let note = NoteItem.parseXML(child);
          activeSystem.contents.m_list.push(note);
        }
      }
    }

    return mei;
  }

  generateXML(): Document {
    this._createSkeletonMEI();
    let parts = this._meiDoc.querySelector('parts');
    for (let part of this.parts) {
      let partElement = /^[tT]enor/.test(part.voice) ?
        (part as Tenor).generatePartXML() : part.generatePartXML();
      parts.appendChild(partElement);
    }
    return this._meiDoc;
  }

  _createSkeletonMEI() {
    this._meiDoc = document.implementation.createDocument(NAMESPACE, 'mei', null);
    let mei = this._meiDoc.documentElement;
    mei.setAttribute('meiversion', '4.0.1');
    // Create Header
    let head = this._generateHeader();
    // TODO Add more to header
    mei.appendChild(head);

    // Create music skeleton
    let music = this._meiDoc.createElementNS(NAMESPACE, 'music');
    let facsimile = this._meiDoc.createElementNS(NAMESPACE, 'facsimile');
    let body = this._meiDoc.createElementNS(NAMESPACE, 'body');
    let mdiv = this._meiDoc.createElementNS(NAMESPACE, 'mdiv');
    let parts = this._meiDoc.createElementNS(NAMESPACE, 'parts');
    mei.appendChild(music);
    music.appendChild(facsimile);
    music.appendChild(body);
    body.appendChild(mdiv);
    mdiv.appendChild(parts);
  }

  _generateHeader(): Element {
    let meiHead = this._meiDoc.createElementNS(NAMESPACE, "meiHead");
    let fileDesc = this._meiDoc.createElementNS(NAMESPACE, "fileDesc");
    meiHead.appendChild(fileDesc);
    let titleStmt = this._meiDoc.createElementNS(NAMESPACE, "titleStmt");
    fileDesc.appendChild(titleStmt);
    let title = this._meiDoc.createElementNS(NAMESPACE, "title");
    title.textContent = this.metadata.shortTitle;
    titleStmt.appendChild(title);
    let composer = this._meiDoc.createElementNS(NAMESPACE, "composer");
    composer.textContent = this.metadata.composerName;
    titleStmt.appendChild(composer);
    let respStmt = this._meiDoc.createElementNS(NAMESPACE, "respStmt");
    titleStmt.appendChild(respStmt);
    let persName = this._meiDoc.createElementNS(NAMESPACE, "persName");
    persName.textContent = this.metadata.encoderName;
    persName.setAttribute("role", "encoder");
    respStmt.appendChild(persName);
    let pubStmt = this._meiDoc.createElementNS(NAMESPACE, "pubStmt");
    fileDesc.appendChild(pubStmt);

    let sourceDesc = this._meiDoc.createElementNS(NAMESPACE, "sourceDesc");
    fileDesc.appendChild(sourceDesc);
    let source = this._meiDoc.createElementNS(NAMESPACE, "source");
    source.setAttribute("target", this.metadata.sourceIRI);
    sourceDesc.appendChild(source);

    return meiHead;
  }

  getSystems(): System[] {
    let allSystems: System[] = [];
    for (let part of this.parts) {
      allSystems.unshift(...part.systems);
    }
    return allSystems;
  }

  getSystem(id: string): System {
    let allSystems = this.getSystems();
    let systemList = allSystems.filter(system => { return system.id === id; });
    return systemList.length > 0 ? systemList[0] : null;
  }

  getPart(voice: Voice): Part {
    let partlist = this.parts.filter(part => { return part.voice === voice; });
    return partlist.length > 0 ? partlist[0] : null;
  }

  getOrCreatePart(voice: Voice): Part {
    if (this.parts.some(part => { return part.voice === voice; })) {
      return this.getPart(voice);
    }
    let part = /^[tT]enor/.test(voice) ? new Tenor(this) : new Part(this);
    part.voice = voice;
    this.parts.push(part);
    return part;
  }

  getPb(index: number): Pb {
    let pbs = new Set<Pb>();
    for (let part of this.parts) {
      part.systems.forEach(system => {
        pbs.add(system.pb);
      });
    }
    for (let pb of pbs.values()) {
      if (pb.index === index) return pb;
    }
    return null;
  }
}

class Metadata {
  shortTitle: string;
  sourceIRI: IRI;
  composerName: string;
  encoderName: string;
}
