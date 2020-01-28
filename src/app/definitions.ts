import { v4 as uuidv4 } from 'uuid';

import { MusicList } from './musiclist';

// The voice a staff belongs to
export enum Voice {
  Triplum='triplum',
  Motetus='motetus',
  Tenor='tenor',
  Contratenor='contratenor'
}

// Values for modus, tempus, and prolatio
export enum Mensuration {
  Three='3',
  Two='2',
  NA='N/A'
}

type BoundingBox = {
  ulx: number;
  uly: number;
  lrx: number;
  lry: number;
}

/** Typedef to show when something is a IIIF manifest IRI */
export type IRI = string;

/**
 * Class representing a staff that is selected on a canvas.
 * Should contain all the information about a staff that is available.
 */
export class Staff {
  constructor(ulx: number, uly: number, lrx: number, lry: number, canvas: string) {
    this.id = uuidv4();
    this.bbox = { ulx: ulx, uly: uly, lrx: lrx, lry: lry };
    this.canvas = canvas;
    this.voice = Voice.Triplum;
    this.modus = Mensuration.NA;
    this.tempus = Mensuration.NA;
    this.prolatio = Mensuration.NA;

    this.musicList = new MusicList();
  }

  get svg() {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', this.bbox.ulx.toString());
    rect.setAttribute('y', this.bbox.uly.toString());
    rect.id = this.id;
    rect.setAttribute('width', (this.bbox.lrx - this.bbox.ulx).toString());
    rect.setAttribute('height', (this.bbox.lry - this.bbox.uly).toString());
    rect.setAttribute('opacity', '0.25');
    return rect;
  }

  id: string;

  // Information about the contents of the staff
  voice: Voice;
  modus: Mensuration;
  tempus: Mensuration;
  prolatio: Mensuration;

  bbox: BoundingBox;  // Relative to the canvas
  canvas: String;     // IIIF canvas @id for the page containing this staff.

  musicList: MusicList;
}
