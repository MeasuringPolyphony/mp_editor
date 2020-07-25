import { Subject } from 'rxjs';
import { System } from '../utils/system';

class SelectedSystem {
  _subject: Subject<System>;
  _selected: System;
  constructor() {
    this._subject = new Subject<System>();
    this._selected = null;
  }

  get selected(): System {
    return this._selected;
  }

  set selected(system: System) {
    this._selected = system;
    this._subject.next(this._selected);
  }

  subscribe = this._subject.subscribe;
}

export const selectedSystem = new SelectedSystem();
