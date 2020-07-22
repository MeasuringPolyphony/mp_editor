import { IRI, BoundingBox } from './definitions';
import { MusicList } from './MusicItem';
import { v4 as uuid } from 'uuid';

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
  contents: MusicList;

  static compare(a: System, b: System): number {
    let diff = a.pb.index - b.pb.index;
    if (diff !== 0) return diff;
    return a.sb.zone.uly - b.sb.zone.uly;
  }

  getContents(): Element[] {
    return [];
  }
}
