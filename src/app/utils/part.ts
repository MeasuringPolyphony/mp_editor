import { v4 as uuid } from 'uuid';

import { Voice, Mensuration, Sign, IRI, voiceToOrdinal } from './definitions';
import { System } from './system';
import { MEIDocument, NAMESPACE } from './mei';

export class Part {
  voice: Voice;
  modus: Mensuration;
  tempus: Mensuration;
  prolatio: Mensuration;
  sign: Sign;
  id: string;
  parent: MEIDocument;

  systems: System[];

  constructor(doc: MEIDocument, id?: string) {
    this.parent = doc;
    if (id) {
      this.id = id;
    } else {
      id = 'm-' + uuid();
    }

    this.systems = [];
    this.modus = Mensuration.NA;
    this.tempus = Mensuration.NA;
    this.prolatio = Mensuration.NA;
    this.sign = Sign.NA;
  }

  static compare(a: Part, b: Part): number {
    return voiceToOrdinal(a.voice) - voiceToOrdinal(b.voice);
  }

  addSystem(system: System) {
    system.parent = this;
    this.systems.push(system);
  }

  removeSystem(id: string): System {
    let matches = this.systems.filter(system => { return system.id === id; });
    if (matches.length > 0) {
      let index = this.systems.indexOf(matches[0]);
      let removed = this.systems.splice(index, 1);
      return removed[0];
    }
    return null;
  }

  generatePartXML(): Element {
    this.systems.sort(System.compare);
    let part = this.parent._meiDoc.createElementNS(NAMESPACE, 'part');
    let scoreDef = this._generateScoreDef();
    part.appendChild(scoreDef);

    let staffDef = scoreDef.querySelector('staffDef');
    staffDef.setAttribute('label', this.voice.toString());
    staffDef.setAttribute("xml:id", this.voice.toString().replace(" ", ""));
    let mensur = this.parent._meiDoc.createElementNS(NAMESPACE, 'mensur');
    staffDef.appendChild(mensur);
    // Processing of mensuration semantic values
    if (this.modus !== Mensuration.NA) {
      mensur.setAttribute('modusminor', this.modus.toString());
    }
    if (this.tempus !== Mensuration.NA) {
      mensur.setAttribute('tempus', this.tempus.toString());
    }
    if (this.prolatio !== Mensuration.NA) {
      mensur.setAttribute('prolatio', this.prolatio.toString());
    }
    // Procesing of mensuration signs
    if (this.sign === Sign.signc) {
      mensur.setAttribute('sign', 'C');
    } else if (this.sign === Sign.signc2) {
      mensur.setAttribute('sign', 'C');
      mensur.setAttribute('num', '2');
    } else if (this.sign === Sign.signc3) {
      mensur.setAttribute('sign', 'C');
      mensur.setAttribute('num', '3');
    } else if (this.sign === Sign.signc32) {
      mensur.setAttribute('sign', 'C');
      mensur.setAttribute('num', '3');
      mensur.setAttribute('numbase', '2');
    } else if (this.sign === Sign.signccut) {
      mensur.setAttribute('sign', 'C');
      mensur.setAttribute('slash', '1');
    } else if (this.sign === Sign.signccut32) {
      mensur.setAttribute('sign', 'C');
      mensur.setAttribute('slash', '1');
      mensur.setAttribute('num', '3');
      mensur.setAttribute('numbase', '2');
    } else if (this.sign === Sign.signcdot) {
      mensur.setAttribute('sign', 'C');
      mensur.setAttribute('dot', 'true');
    } else if (this.sign === Sign.signo) {
      mensur.setAttribute('sign', 'O');
    } else if (this.sign === Sign.signo2) {
      mensur.setAttribute('sign', 'O');
      mensur.setAttribute('num', '2');
    } else if (this.sign === Sign.signo3) {
      mensur.setAttribute('sign', 'O');
      mensur.setAttribute('num', '3');
    } else if (this.sign === Sign.signo32) {
      mensur.setAttribute('sign', 'O');
      mensur.setAttribute('num', '3');
      mensur.setAttribute('numbase', '2');
    } else if (this.sign === Sign.signocut) {
      mensur.setAttribute('sign', 'O');
      mensur.setAttribute('slash', '1');
    } else if (this.sign === Sign.signocut32) {
      mensur.setAttribute('sign', 'O');
      mensur.setAttribute('slash', '1');
      mensur.setAttribute('num', '3');
      mensur.setAttribute('numbase', '2');
    } else if (this.sign === Sign.signodot) {
      mensur.setAttribute('sign', 'O');
      mensur.setAttribute('dot', 'true');
    }

    let section = this.parent._meiDoc.createElementNS(NAMESPACE, 'section');
    part.appendChild(section);
    let staff = this.parent._meiDoc.createElementNS(NAMESPACE, 'staff');
    staff.setAttribute('n', '1');
    section.appendChild(staff);
    let layer = this.parent._meiDoc.createElementNS(NAMESPACE, 'layer');
    layer.setAttribute('n', '1');
    staff.appendChild(layer);

    let currentPage: IRI = null
    let graphic: Element = null;
    let facsimile: Element = this.parent._meiDoc.querySelector('facsimile');
    for (let system of this.systems) {
      let contents = system.getContents();
      console.debug(contents);
      if (contents.filter(el => { return el.tagName !== 'clef' && el.tagName !== 'rest'; }).length === 0) {
        continue;
      }
      // Handle paging
      if (system.pb.canvasIRI !== currentPage) {
        let pb = this.parent._meiDoc.createElementNS(NAMESPACE, 'pb');
        let temp = Array.from(facsimile.querySelectorAll('graphic'))
          .filter(graphic => graphic.getAttribute('target') === system.pb.canvasIRI);
        if (temp.length > 0) {
          // Use existing page in mei
          graphic = temp[0];
        } else {
          // Create new page
          let surface = this.parent._meiDoc.createElementNS(NAMESPACE, 'surface');
          surface.setAttribute('xml:id', 'm-' + uuid());
          graphic = this.parent._meiDoc.createElementNS(NAMESPACE, 'graphic');
          graphic.setAttribute('xml:id', 'm-' + uuid());
          graphic.setAttribute('target', system.pb.canvasIRI);
          surface.appendChild(graphic);
          facsimile.appendChild(surface);
        }
        let surface = graphic.closest("surface");
        pb.setAttribute('facs', '#' + surface.getAttribute('xml:id'));
        pb.setAttribute('xml:id', system.pb.id);
        currentPage = system.pb.canvasIRI;
        layer.appendChild(pb);
      }

      // Handle sb
      let zone = this.parent._meiDoc.createElementNS(NAMESPACE, 'zone');
      let zoneId = 'm' + uuid();
      zone.setAttribute('xml:id', zoneId);
      zone.setAttribute('ulx', Math.round(system.sb.zone.ulx).toString());
      zone.setAttribute('uly', Math.round(system.sb.zone.uly).toString());
      zone.setAttribute('lrx', Math.round(system.sb.zone.lrx).toString());
      zone.setAttribute('lry', Math.round(system.sb.zone.lry).toString());
      graphic.appendChild(zone);

      let sb = this.parent._meiDoc.createElementNS(NAMESPACE, 'sb');
      sb.setAttribute('facs', '#' + zone.getAttribute('xml:id'));
      sb.setAttribute('xml:id', system.sb.id);
      layer.appendChild(sb);

      // Add contents. Child here should have correct xml:id including children
      contents.forEach(child => {
        // Remove @color and @marked
        if (child.hasAttribute('color')) child.removeAttribute('color');
        if (child.hasAttribute('type')) child.removeAttribute('type');

        if (child.tagName === 'ligature') {
          child.removeAttribute('form');
        }

        layer.appendChild(child);
      });
    }
    return part;
  }

  _generateScoreDef(): Element {
    let scoreDef = this.parent._meiDoc.createElementNS(NAMESPACE, 'scoreDef');
    let staffGrp = this.parent._meiDoc.createElementNS(NAMESPACE, 'staffGrp');
    scoreDef.appendChild(staffGrp);
    let staffDef = this.parent._meiDoc.createElementNS(NAMESPACE, 'staffDef');
    staffDef.setAttribute('n', '1');
    staffDef.setAttribute('lines', '5');
    staffDef.setAttribute('notationtype', this.parent.notationType);
    if (this.parent.notationSubtype) {
      staffDef.setAttribute('notationsubtype', this.parent.notationSubtype);
    }
    staffGrp.appendChild(staffDef);
    return scoreDef;
  }
}

export class Tenor extends Part {
  repetitions: number;
  endingId: string;

  constructor(doc: MEIDocument, id?: string) {
    super(doc, id);
    this.voice = Voice.tenor;
    this.repetitions = 1;   // default
  }

  generatePartXML(): Element {
    let part = super.generatePartXML();
    // Set repeating tenor if necessary
    if (this.repetitions > 1) {
      /* IMPORTANT NOTE */
      /* The "n" attribute here is used to represent the number of repetitions */
      /* It does NOT mean this is the nth directive of the piece */
      /* This should be replaced with a correct MEI attribute when possible */
      let dir = this.parent._meiDoc.createElementNS(NAMESPACE, 'dir');
      dir.setAttribute('n', (this.repetitions - 1).toString());
      dir.setAttribute('layer', '1');
      console.debug(part);
      console.debug(part.querySelector('note,ligature,rest'));
      let firstNoteId = part.querySelector('note,ligature,rest').getAttribute('xml:id');
      // let endingId = (this.endingId !== undefined) ? this.endingId : part.querySelector('layer').lastElementChild.getAttribute('xml:id');
      // Get ending ligature if it's in one
      console.debug(part);
      console.debug(this.endingId);
      let endItem = (this.endingId !== undefined) ? Array.from(part.querySelectorAll('note')).find(el => { return el.getAttribute('xml:id') === this.endingId; }) : part.querySelector('layer').lastElementChild;
      let endingId = (endItem.closest('ligature') === null) ? endItem.getAttribute('xml:id') : endItem.closest('ligature').getAttribute('xml:id');
      dir.setAttribute('plist', '#' + firstNoteId + ' #' + endingId);
      dir.setAttribute('follows', '#' + endingId);
      let staff = part.querySelector('staff');
      staff.appendChild(dir);
      dir.insertAdjacentHTML(
        'beforebegin',
        '<!-- The @n attribute on <dir> is used to represent the number of repetitions in a machine readable format. -->'
      );
    }
    return part;
  }
}
