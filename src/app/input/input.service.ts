import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

import { System } from '../utils/system';

@Injectable({
  providedIn: 'root'
})
export class InputService extends Subject<System> {

  _selected: System;

  constructor() {
    super();
    this._selected = null;
  }

  get selected(): System {
    return this._selected;
  }

  set selected(system: System) {
    this._selected = system;
    this.next(this._selected);
  }
}
