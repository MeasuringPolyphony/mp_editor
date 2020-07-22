import { Voice, Mensuration } from './definitions';
import { System } from './system';

export class Part {
  voice: Voice;
  modus: Mensuration;
  tempus: Mensuration;
  prolatio: Mensuration;
  id: string;

  systems: System[];
}

export class Tenor extends Part {
  repetitions: number;
  endingId: string;

  constructor() {
    super();
    this.voice = Voice.tenor;
  }
}
