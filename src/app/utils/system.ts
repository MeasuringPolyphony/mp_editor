import { IRI, BoundingBox } from './definitions';
import { MusicList } from './MusicItem';
import { Part } from './part';
import { v4 as uuid } from 'uuid';
import { vrvToolkit } from './verovio';

export class Pb {
  canvasIRI: IRI;
  index: number;
  id: string;

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
    return a.sb.zone.uly - b.sb.zone.uly;
  }

  get id(): string {
    return this.sb.id;
  }

  getContents(): Element[] {
    let rawMei = vrvToolkit.humdrumToMEI(this.contents.getHumdrumScore());
    let parser = new DOMParser();
    let elements: Element[] = [];
    let humdrumMei = parser.parseFromString(rawMei, 'application/xml');
    let clef = humdrumMei.querySelector('clef');
    if (clef !== null) {
      this._recurseId(clef);
      elements.push(clef);
    }
    let layer = humdrumMei.querySelector('layer');
    if (layer !== null) {
      for (let child of Array.from(layer.children)) {
        this._recurseId(child);
      }
    }
    return elements;
  }

  _recurseId(element: Element) {
    let id = element.getAttribute('xml:id');
    if (id) {
      let regexpInfo = id.match(/L(\d+)$/);
      if (regexpInfo) {
        let line = parseInt(regexpInfo[1]);
        let match = this.contents.m_list.filter(el => {
          return el.m_line === line;
        });
        if (match.length > 0) {
          element.setAttribute('xml:id', match[0].m_id);
          for (let child of Array.from(element.children)) {
            this._recurseId(child);
          }
          return;
        }
      }
    }
    element.setAttribute('xml:id', 'm-' + uuid());
  }
}
