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
  // Information about the contents of the staff
  voice: Voice;
  modus: Mensuration;
  tempus: Mensuration;
  prolatio: Mensuration;

  bbox: BoundingBox;  // Relative to the canvas
  canvas: String;     // IIIF canvas @id for the page containing this staff.

}
