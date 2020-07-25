import { Subject } from 'rxjs';
import { System } from '../utils/system';

class SelectedSystem {
  _subject: Subject<System>;
  _selected: System;
  subscribe;
  constructor() {
    this._subject = new Subject<System>();
    this._selected = null;
    this.subscribe = this._subject.subscribe;
  }

  get selected(): System {
    return this._selected;
  }

  set selected(system: System) {
    this._selected = system;
    this._subject.next(this._selected);
  }
}

export const selectedSystem = new SelectedSystem();
