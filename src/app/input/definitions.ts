import { v4 as uuidv4 } from 'uuid';

import { MusicList } from './musiclist';

// The voice a staff belongs to
export enum Voice {
  triplum='triplum',
  motetus='motetus',
  tenor='tenor',
  contratenor='contratenor'
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

export type PartMensuration = {
  modus: Mensuration,
  tempus: Mensuration,
  prolatio: Mensuration
};

export type VoicePair = {
  voice: Voice,
  mensurations: PartMensuration
};

/** Typedef to show when something is a IIIF manifest IRI */
export type IRI = string;

/**
 * Class representing a staff that is selected on a canvas.
 * Should contain all the information about a staff that is available.
 */
export class Staff {
  constructor(
    ulx: number,
    uly: number,
    lrx: number,
    lry: number,
    canvas: string,
    index: number,
    voice?: Voice,
    id?: string,
    musicList?: any
  ) {
    if (id) {
      this.id = id;
    }
    else {
      this.id = uuidv4();
    }
    this.bbox = { ulx: ulx, uly: uly, lrx: lrx, lry: lry };
    this.canvas = canvas;
    this.index = index;
    if (voice) {
      this.voice = voice;
    }
    else {
      this.voice = Voice.triplum;
    }

    if (musicList) {
      this.musicList = musicList;
    }
    else {
      this.musicList = new MusicList();
    }
  }

  get svg() {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', this.bbox.ulx.toString());
    rect.setAttribute('y', this.bbox.uly.toString());
    rect.id = this.id;
    rect.setAttribute('width', (this.bbox.lrx - this.bbox.ulx).toString());
    rect.setAttribute('height', (this.bbox.lry - this.bbox.uly).toString());
    rect.classList.add("zoneRect");
    return rect;
  }

  static compare(staffA: Staff, staffB: Staff): number {
    let indexDiff = staffA.index - staffB.index;
    if (indexDiff !== 0) {
      return indexDiff;
    }
    else {
      return staffA.bbox.uly - staffB.bbox.uly;
    }
  }

  id: string;

  // Information about the contents of the staff
  voice: Voice;
  modus: Mensuration;
  tempus: Mensuration;
  prolatio: Mensuration;

  bbox: BoundingBox;  // Relative to the canvas
  canvas: string;     // IIIF canvas @id for the page containing this staff.
  index: number;      // 0-based page index

  musicList: MusicList;
}
