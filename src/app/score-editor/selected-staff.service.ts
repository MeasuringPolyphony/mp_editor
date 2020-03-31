import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IRI } from '../input/definitions';

type BBox = {
  ulx: string,
  uly: string,
  lrx: string,
  lry: string
};

@Injectable({
  providedIn: 'root'
})
export class SelectedStaffService {
  _staffLoc: Subject<[IRI, BBox]>;

  constructor() {
    this._staffLoc = new Subject<[IRI, BBox]>();
  }

  getStaffLocation() {
    return this._staffLoc;
  }

  set staffLocation(loc: [IRI, BBox]) {
    console.debug(loc);
    this._staffLoc.next(loc);
  }


}
