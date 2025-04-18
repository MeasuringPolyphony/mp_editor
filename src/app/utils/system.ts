import { IRI, BoundingBox, Voice, Mensuration } from './definitions';
import { MusicList, NoteItem, MensurItem, PlicaStatus } from './MusicItem';
import { Part } from './part';
import { v4 as uuid } from 'uuid';
import { vrvToolkit } from './verovio';
import { NAMESPACE } from './mei';

export class Pb {
  canvasIRI: IRI;
  index: number;
  id: string;
  codedVal: string;

  constructor(iri: IRI, id?: string) {
    this.canvasIRI = iri;
    if (id) {
      this.id = id;
    } else {
      this.id = 'm-' + uuid();
    }
  }
}

export class Sb {
  zone: BoundingBox;
  id: string;

  constructor(zone: BoundingBox, id?: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = 'm-' + uuid();
    }

    this.zone = zone;
  }

  get svg() {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', this.zone.ulx.toString());
    rect.setAttribute('y', this.zone.uly.toString());
    rect.id = this.id;
    rect.setAttribute('width', (this.zone.lrx - this.zone.ulx).toString());
    rect.setAttribute('height', (this.zone.lry - this.zone.uly).toString());
    rect.classList.add('zoneRect');
    return rect;
  }
}

export class System {
  pb: Pb;
  sb: Sb;
  parent: Part;
  contents: MusicList;

  constructor (contents?: MusicList) {
    if (contents) {
      this.contents = contents;
    } else {
      this.contents = new MusicList();
    }
  }

  static compare(a: System, b: System): number {
    let diff = a.pb.index - b.pb.index;
    if (diff !== 0) return diff;
    // Check for intersection on y-axis no/minimal x-axis overlap. If so, left-most. Else highest.
    const aZone = a.sb.zone;
    const bZone = b.sb.zone;
    const yThreshold = 0.25;
    const xThreshold = 0.10;

    const diff1 = aZone.lry - bZone.uly;
    const diff2 = bZone.lry - aZone.uly;
    // Check for any y-overlap
    if (diff1 > 0 && diff2 > 0) {
      const yOverlap = Math.min(diff1, diff2);
      const avHeight = (aZone.lry - aZone.uly + bZone.lry - bZone.uly) / 2;

      const diff3 = aZone.lrx - bZone.ulx;
      const diff4 = bZone.lrx - aZone.ulx;
      const avWidth = (aZone.lrx - aZone.ulx + bZone.lrx - bZone.ulx) / 2;
      let xOverlap: number;
      // Determine amount of x-overlap
      if (diff3 > 0 && diff4 > 0) {
        xOverlap = Math.min(diff3, diff4);
      } else {
        xOverlap = 0;
      }
      if ((yOverlap > yThreshold * avHeight) && (xOverlap < xThreshold * avWidth)) {
        return aZone.ulx - bZone.ulx;
      }
    }
    return a.sb.zone.uly - b.sb.zone.uly;
  }

  get id(): string {
    return this.sb.id;
  }

  get voice(): Voice {
    return this.parent.voice;
  }

  set voice(voice: Voice) {
    if (voice !== this.parent.voice) {
      let newPart = this.parent.parent.getOrCreatePart(voice);
      let idx = this.parent.systems.indexOf(this);
      this.parent.systems.splice(idx, 1);
      newPart.addSystem(this);
    }
  }

  getContents(): Element[] {
    let whiteMensural = this.parent.parent.notationType === "mensural.white";
    console.debug(this.parent.parent.notationType);
    let rawMei = vrvToolkit.humdrumToMEI(this.contents.getHumdrumScore({white: whiteMensural}));
    let parser = new DOMParser();
    let elements: Element[] = [];
    let humdrumMei = parser.parseFromString(rawMei, 'application/xml');
    let clef = humdrumMei.querySelector('clef');
    if (clef !== null) {
      this._recurseId(clef);
      elements.push(clef);
    }
    let keySig = humdrumMei.querySelector('keySig');
    if (keySig !== null) {
      this._recurseId(keySig);
      elements.push(keySig);
    }
    let mensur = humdrumMei.querySelector('mensur');
    if (mensur !== null && mensur.closest('layer') === null) {
      this._recurseId(mensur);
      elements.push(mensur);
    }
    let layer = humdrumMei.querySelector('layer');
    console.debug(layer);
    if (layer !== null) {
      for (let child of Array.from(layer.children)) {
        this._recurseId(child);
        if (child.tagName === "note" && child.hasAttribute("dots")) {
          child.removeAttribute("dots");
        }
        elements.push(child);
      }
    }
    return elements;
  }

  _recurseId(element: Element) {
    let id = element.getAttribute('xml:id');
    let found = false;
    if (id && /(note|rest|clef|keySig|pb|sb|mensur)/.test(element.tagName)) {
      let regexpInfo = id.match(/L(\d+)[\w\d]+$/);
      if (regexpInfo) {
        let line = parseInt(regexpInfo[1]);
        let match = this.contents.m_list.filter(el => {
          return el.m_line === line;
        });
        if (match.length > 0) {
          found = true;
          element.setAttribute('xml:id', match[0].m_id);
          if (match[0].m_type === "mensur") {
            let mensur = match[0] as MensurItem;
            if (mensur.m_modus !== Mensuration.NA) {
              element.setAttribute("modusminor", mensur.m_modus.toString());
            }
            if (mensur.m_tempus !== Mensuration.NA) {
              element.setAttribute("tempus", mensur.m_tempus.toString());
            }
            if (mensur.m_prolatio !== Mensuration.NA) {
              element.setAttribute("prolatio", mensur.m_prolatio.toString());
            }
          }
          else if (match[0].m_type === 'note') {
            let note = match[0] as NoteItem;
            // Ensure child is followed by a dot. If not, ad one.
            if (element.hasAttribute('dots') &&
              (!element.nextElementSibling || element.nextElementSibling.tagName !== 'dot')) {
              const dot = element.ownerDocument.createElementNS(NAMESPACE, 'dot');
              element.insertAdjacentElement('afterend', dot);
              element.removeAttribute('dots');
            }
          }
        }
      }
    }
    if (!found) {
      element.setAttribute('xml:id', 'm-' + uuid());
    }
    for (let child of Array.from(element.children)) {
      this._recurseId(child);
    }
  }
}
