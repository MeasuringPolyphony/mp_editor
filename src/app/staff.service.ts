import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { Staff, Voice } from './definitions';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  stavesByIndex: Map<number, Array<Staff>>;
  canvasIndex: Map<string, number>;
  _selectedStaff: Staff = null;
  selectedStaff = new Subject<Staff>();

  constructor() {
    this.stavesByIndex = new Map();
    this.canvasIndex = new Map();
  }

  initIndex(index: number, uri: string) {
    if (!this.stavesByIndex.has(index)) {
      this.stavesByIndex.set(index, []);
      this.canvasIndex.set(uri, index);
    }
  }

  addStaff(index: number, staff: Staff) {
    this.stavesByIndex.get(index).push(staff);
  }

  getStavesForIndex(index: number): Array<Staff> {
    return this.stavesByIndex.get(index);
  }

  get selected() {
    return this._selectedStaff;
  }

  set selected(staff: Staff) {
    this._selectedStaff = staff;
    this.selectedStaff.next(staff);
  }

  get staves(): Staff[] {
    let array = [];
    for (const setOfStaves of this.stavesByIndex.values()) {
      array = array.concat(setOfStaves);
    }
    return array;
  }

  getStaffById(id: string): Staff {
    let staves = this.staves.filter(staff => { return staff.id === id; });
    if (staves.length > 0) {
      return staves[0];
    }
    return null;
  }
}
