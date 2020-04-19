import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Staff, Voice, Mensuration, PartMensuration, VoicePair } from './definitions';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  voices: Map<Voice, PartMensuration>;
  stavesByIndex: Map<number, Array<Staff>>;
  canvasIndex: Map<string, number>;
  _selectedStaff: Staff = null;
  _currentPart: PartMensuration = null;
  selectedStaff = new Subject<Staff>();
  _repeatingTenor: {
    followsId: string,
    repetitions: number
  }

  constructor() {
    this.stavesByIndex = new Map();
    this.canvasIndex = new Map();
    this.voices = new Map();

    this._repeatingTenor = {
      followsId: null,
      repetitions: 0
    };

    for (let voice in Voice) {
      this.voices.set(voice as Voice, {
        modus: Mensuration.NA,
        tempus: Mensuration.NA,
        prolatio: Mensuration.NA
      });
    }
  }

  initIndex(index: number, uri: string) {
    if (!this.stavesByIndex.has(index)) {
      this.stavesByIndex.set(index, []);
      this.canvasIndex.set(uri, index);
    }
  }

  setVoices(voices: VoicePair[]) {
    for (let voice of voices) {
      this.voices.set(voice.voice, voice.mensurations);
    }
  }

  triggerDelete() {
    if (this._selectedStaff !== null) {
      for (const [_, staves] of this.stavesByIndex) {
        if (!staves.includes(this._selectedStaff)) {
          continue;
        }
        staves.splice(staves.indexOf(this._selectedStaff), 1);
        this.selected = null;
        break;
      }
    }
  }

  addStaff(index: number, staff: Staff) {
    this.stavesByIndex.get(index).push(staff);
  }

  getStavesForIndex(index: number): Array<Staff> {
    return this.stavesByIndex.get(index);
  }

  get currentPart() {
    return this.voices.get(this.selected.voice);
  }

  set currentPart(_part: PartMensuration) {
    this.voices.set(this.selected.voice, _part);
  }

  get repeatingTenor() {
    return this._repeatingTenor;
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
