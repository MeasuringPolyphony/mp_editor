import { IRI, BoundingBox } from './definitions';
import { MusicList } from './MusicItem';

export class Pb {
  canvasIRI: IRI;
  id: string;
}

export class Sb {
  zone: BoundingBox;
  id: string;
}

export class System {
  id: string;
  pb: Pb;
  sb: Sb;
  contents: MusicList;
}
