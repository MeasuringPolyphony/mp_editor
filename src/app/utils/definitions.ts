import { v4 as uuidv4 } from 'uuid';

import { MusicList } from './MusicItem';

// The voice a staff belongs to
export enum Voice {
  altus='altus',
  cantus='cantus',
  contratenor='contratenor',
  contratenor1='contratenor I',
  contratenor2='contratenor II',
  discantus='discantus',
  duplum='duplum',
  lowervoice1='lower voice I',
  lowervoice2='lower voice II',
  motetus='motetus',
  quadruplum='quadruplum',
  quintus='quintus',
  superius='superius',
  uppervoice1='upper voice I',
  uppervoice2='uppervoice II',
  tenor='tenor',
  triplum='triplum',
  bassus='bassus'
}

// comparator for voices
export function voiceToOrdinal(v: Voice): number {
  switch (v) {
    case Voice.altus:
      return 8;
    case Voice.cantus:
      return 5;
    case Voice.contratenor:
      return 10;
    case Voice.contratenor1:
      return 10.1;
    case Voice.contratenor2:
      return 10.2;
    case Voice.discantus:
      return 5;
    case Voice.duplum:
      return 3;
    case Voice.lowervoice1:
      return 100;
    case Voice.lowervoice2:
      return 100.1;
    case Voice.motetus:
      return 3;
    case Voice.quadruplum:
      return 1;
    case Voice.quintus:
      return 8;
    case Voice.superius:
      return 5;
    case Voice.uppervoice1:
      return -1.1;
    case Voice.uppervoice2:
      return -1;
    case Voice.tenor:
      return 9;
    case Voice.triplum:
      return 2;
    case Voice.bassus:
      return 20;
    default:
      return 0;
  }
}

export type Contributor = {
  type: string,
  name: string
};

// Values for modus, tempus, and prolatio
export enum Mensuration {
  Three='3',
  Two='2',
  NA='N/A'
}

export type BoundingBox = {
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
    musicList?: MusicList
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
