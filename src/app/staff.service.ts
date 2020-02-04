import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { Staff } from './definitions';

const NAMESPACE = 'http://www.music-encoding.org/ns/mei';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  stavesByIndex: Map<number, Array<Staff>>;
  _selectedStaff: Staff = null;
  selectedStaff = new Subject<Staff>();

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
    return this._selectedStaff;
  }

  set selected(staff: Staff) {
    this._selectedStaff = staff;
    this.selectedStaff.next(staff);
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

  generateFullMEI(): Document {
    return this._createSkeletonMEI();
  }

  _createSkeletonMEI(): Document {
    let meiDoc = document.implementation.createDocument(NAMESPACE, "mei", null);
    let mei = meiDoc.documentElement;
    mei.setAttribute('meiversion', '4.0.1');
    // Create Header
    let head = meiDoc.createElementNS(NAMESPACE, 'meiHead');
    // TODO Add more to header
    mei.appendChild(head);

    // Create music skeleton
    let music = meiDoc.createElementNS(NAMESPACE, 'music');
    let facsimile = meiDoc.createElementNS(NAMESPACE, 'facsimile');
    let body = meiDoc.createElementNS(NAMESPACE, 'body');
    let mdiv = meiDoc.createElementNS(NAMESPACE, 'mdiv');
    let parts = meiDoc.createElementNS(NAMESPACE, 'parts');
    mei.appendChild(music);
    music.appendChild(facsimile);
    music.appendChild(body);
    body.appendChild(mdiv);
    mdiv.appendChild(parts);

    return meiDoc;
  }

  _createNewSurface(meiDoc: XMLDocument, pageURI: string): Element {
    let surface = meiDoc.createElementNS(NAMESPACE, 'surface');
    surface.setAttribute('xml:id', 'm-' + uuid());
    let graphic = meiDoc.createElementNS(NAMESPACE, 'graphic');
    graphic.setAttribute('xml:id', 'm-' + uuid());
    graphic.setAttribute('target', pageURI);
    graphic.setAttribute('ulx', '0');
    graphic.setAttribute('uly', '0');
    // Set height and width
    surface.appendChild(graphic);
    return surface;
  }
}
