enum Voice {
  Triplum,
  Motetus,
  Tenor,
  Contratenor
}

enum Mensuration {
  Three,
  Two,
  NA
}

type BoundingBox = {
  ulx: Number;
  uly: Number;
  lrx: Number;
  lry: Number;
}

export class Staff {
  // Information about the contents of the staff
  voice: Voice;
  modus: Mensuration;
  tempus: Mensuration;
  prolatio: Mensuration;

  bbox: BoundingBox;  // Relative to the canvas
  canvas: String;     // IIIF canvas @id for the page containing this staff.

}
