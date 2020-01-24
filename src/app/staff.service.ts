import { Injectable } from '@angular/core';

import { Staff } from './definitions';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  stavesByIndex: Map<number, Array<Staff>>;
  selectedStaff: Staff = null;

  constructor() {
    this.stavesByIndex = new Map();
  }

  initIndex(index: number) {
    if (!this.stavesByIndex.has(index)) {
      this.stavesByIndex.set(index, []);
    }
  }

  addStaff(index: number, staff: Staff) {
    this.stavesByIndex.get(index).push(staff);
  }

  getStavesForIndex(index: number): Array<Staff> {
    return this.stavesByIndex.get(index);
  }

  get selected() {
    return this.selectedStaff;
  }

  set selected(staff: Staff) {
    this.selectedStaff = staff;
  }

  get staves() {
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
