// The voice a staff belongs to
enum Voice {
  Triplum,
  Motetus,
  Tenor,
  Contratenor
}

// Values for modus, tempus, and prolatio
enum Mensuration {
  Three,
  Two,
  NA
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
    this.bbox = { ulx: ulx, uly: uly, lrx: lrx, lry: lry };
    this.canvas = canvas;
    this.voice = Voice.Triplum;
    this.modus = Mensuration.NA;
    this.tempus = Mensuration.NA;
    this.prolatio = Mensuration.NA;
  }

  get svg() {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', this.bbox.ulx.toString());
    rect.setAttribute('y', this.bbox.uly.toString());
    rect.setAttribute('width', (this.bbox.lrx - this.bbox.ulx).toString());
    rect.setAttribute('height', (this.bbox.lry - this.bbox.uly).toString());
    rect.setAttribute('opacity', '0.25');
    return rect;
  }

  // Information about the contents of the staff
  voice: Voice;
  modus: Mensuration;
  tempus: Mensuration;
  prolatio: Mensuration;

  bbox: BoundingBox;  // Relative to the canvas
  canvas: String;     // IIIF canvas @id for the page containing this staff.

}
