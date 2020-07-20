import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../staff.service';
import { PitchClass, NoteItem, RestItem, Accid, LigStatus } from '../../utils/MusicItem';
import { HNPService } from '../../hnp.service';
import { MeiService } from '../mei.service';
import { StateService } from '../../state-service.service';

@Component({
  selector: 'app-staff-select',
  templateUrl: './staff-select.component.html',
  styleUrls: ['./staff-select.component.css']
})
export class StaffSelectComponent implements OnInit {
  @ViewChild('example') container: ElementRef;
  keySigMode = false;
  pitchSig: string = null;
  accidSig: string = null;
  constructor(
    public staffService: StaffService,
    private hnpService: HNPService,
    private meiService: MeiService,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.staffService.selectedStaff.subscribe({
      next: (staff) => {
        this.container.nativeElement.innerHTML = '';
        if (staff === null) return;
        let element = this.hnpService.humdrumToSVG(staff.musicList.getHumdrumScore());
        this.container.nativeElement.appendChild(element);
      }
    });
  }

  updateSVG() {
    let element = this.hnpService.humdrumToSVG(this.staffService._selectedStaff.musicList.getHumdrumScore());
    this.container.nativeElement.innerHTML = '';
    this.container.nativeElement.appendChild(element);

    if (this.staffService._selectedStaff.id === this.staffService._repeatingTenor.staffId &&
        this.staffService._repeatingTenor.elementId !== null) {
      let endNote = element.getElementById(this.staffService._repeatingTenor.elementId);
      if (endNote !== null) {
        endNote.setAttribute('fill', '#00f');
      } else {
        this.staffService._repeatingTenor.elementId = null;
      }
    }
  }

  staffForm = new FormGroup({
    voice: new FormControl(''),
    modus: new FormControl(''),
    tempus: new FormControl(''),
    prolatio: new FormControl('')
  });

  handleClick(event: MouseEvent) {
    let target = event.target as Element;
    while (target) {
      if (target.nodeName === 'g') {
        let matches: Array<string>;
        if (matches = target.id.match(/-.*L(\d+)/)) {
          this.staffService._selectedStaff.musicList.selectItemByLine(parseInt(matches[1]))
          this.updateSVG();
          break;
        }
      }
      target = target.parentNode as Element;
    }
  }

  finishStep() {
    const mei = this.meiService.generateFullMEI();
    const type = this.route.snapshot.paramMap.get('source');
    const identifier = this.route.snapshot.paramMap.get('identifier');
    this.stateService.mei = mei;
    this.router.navigate(['/score', type, identifier]);
  }

  repTenorButton() {
    this.staffService._repeatingTenor.staffId = this.staffService._selectedStaff.id;

    try {
        let layer = this.container.nativeElement.querySelector('.layer');
        this.staffService._repeatingTenor.elementId = layer.lastElementChild.id;
    } catch (e) {
      console.debug(e);
      this.staffService._repeatingTenor.elementId = null;
    }
    this.updateSVG();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (this.staffService._selectedStaff == null) return;

    if (this.keySigMode) {
      this.handleKeySigPress(event);
      event.preventDefault();
      this.updateSVG();
      return;
    }

    // Based on processKeypress function in mensural-input
    if (event.metaKey) return;
    let musicList = this.staffService._selectedStaff.musicList;
    if ((musicList.m_index >=0) && (event.key.length === 1)) {
      if ((event.key >= '0') && (event.key <= '9')) {
        this.processDigit(Number(event.key), event);
        event.preventDefault();
        this.updateSVG();
        return;
      }
      if (event.key !== ' ') {
        let state = musicList.addTextToCurrentItem(event.key);
        if (state) {
          event.preventDefault();
          this.updateSVG();
          return;
        }
      }
    }
    if ((musicList.m_index >= 0) && (event.key === 'Backspace')) {
      if (event.shiftKey) {
        musicList.clearTextOnCurrentItem();
      }
      else {
        musicList.deleteCharacterOnCurrentItem();
      }
      event.preventDefault();
    }
    else if ((musicList.m_index < 0) && (event.key === 'Backspace')) {
      musicList.removeLastItem();
      event.preventDefault();
    }
    else {
      switch (event.key) {
        case 'k':
          this.keySigMode = true;
          console.debug("Set keySigMode");
          event.preventDefault();
          break;
        case 'C':
          musicList.addPitchFar(PitchClass.C);
          event.preventDefault();
          break;
        case 'c':
          musicList.addPitchNear(PitchClass.C);
          event.preventDefault();
          break;
        case 'D':
          musicList.addPitchFar(PitchClass.D);
          event.preventDefault();
          break;
        case 'd':
          musicList.addPitchNear(PitchClass.D);
          event.preventDefault();
          break;
        case 'E':
          musicList.addPitchFar(PitchClass.E);
          event.preventDefault();
          break;
        case 'e':
          musicList.addPitchNear(PitchClass.E);
          event.preventDefault();
          break;
        case 'F':
          musicList.addPitchFar(PitchClass.F);
          event.preventDefault();
          break;
        case 'f':
          musicList.addPitchNear(PitchClass.F);
          event.preventDefault();
          break;
        case 'G':
          musicList.addPitchFar(PitchClass.G);
          event.preventDefault();
          break;
        case 'g':
          musicList.addPitchNear(PitchClass.G);
          event.preventDefault();
          break;
        case 'A':
          musicList.addPitchFar(PitchClass.A);
          event.preventDefault();
          break;
        case 'a':
          musicList.addPitchNear(PitchClass.A);
          event.preventDefault();
          break;
        case 'B':
          musicList.addPitchFar(PitchClass.B);
          event.preventDefault();
          break;
        case 'b':
          musicList.addPitchNear(PitchClass.B);
          event.preventDefault();
          break;
        case 'r':
        case 'R':
          musicList.addRest();
          event.preventDefault();
          break;
        case '.':
          this.processDotKey();
          event.preventDefault();
          break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          this.processDigit(Number(event.key), event);
          event.preventDefault();
          break;
        case 'Tab':
          if (event.shiftKey) {
            musicList.selectBackward();
          } else {
            musicList.selectForward();
          }
          event.preventDefault();
          break;
        case ' ':
        case 'ArrowRight':
          musicList.selectForward();
          event.preventDefault();
          break;
        case 'ArrowLeft':
          musicList.selectBackward();
          event.preventDefault();
          break;
        case 'ArrowUp':
          musicList.raisePitch(event.shiftKey ? 7 : 1);
          event.preventDefault();
          break;
        case 'ArrowDown':
          musicList.lowerPitch(event.shiftKey ? 7 : 1);
          event.preventDefault();
          break;
        case 'End':
          musicList.goToEndOfList();
          event.preventDefault();
          break;
        case '[':
          this.processLig(true);
          event.preventDefault();
          break;
        case ']':
          this.processLig(false);
          event.preventDefault();
          break;
        case '#':
        case '-':
        case 'N':
        case 'n':
          this.processAccidental(event.key);
          event.preventDefault();
          break;
        }
    }
    this.updateSVG();
  }

  processDigit(digit: number, _event: KeyboardEvent) {
    let musicList = this.staffService._selectedStaff.musicList;
    if (musicList.m_list.length === 0) {
      if (digit !== 3) {
        musicList.m_rhythm = digit;
      }
      return;
    }
    var index = musicList.m_index;
    var ending = false;
    if (index < 0) {
      index = musicList.m_list.length - 1;
      ending = true;
    }
    let item = musicList.m_list[index];
    if (item.m_type === 'clef') {
      if (digit !== 3) {
        musicList.m_rhythm = digit;
      }
      musicList.runNotationCallback();
      return;
    }
    else if (ending) {
      musicList.m_rhythm = digit;
    }
    else if ((item.m_type === 'note') || (item.m_type === 'rest')) {
      if (!ending) {
        if (digit !== 3) {
          if (item.m_type === "note") {
            (item as NoteItem).m_rhythm = digit;
          }
          else {
            (item as RestItem).m_rhythm = digit;
          }
          musicList.m_index += 1;
          musicList.m_rhythm = digit;
          musicList.runNotationCallback();
        }
        if (musicList.m_index >= musicList.m_list.length) {
          musicList.m_index = -1;
        }
      }
    }
  }

  processDotKey() {
    let musicList = this.staffService._selectedStaff.musicList;
    if (musicList.m_list.length === 0) {
      return;
    }
    let index = musicList.m_index;
    if (index < 0) {
      index = musicList.m_list.length - 1;
    }
    let item = musicList.m_list[index];
    if (item.m_type === 'note') {
      let note = item as NoteItem;
      note.m_dot = !note.m_dot;
      musicList.runNotationCallback();
      return;
    }
  }

  processLig(isStart: boolean) {
    let musicList = this.staffService._selectedStaff.musicList;
    if (musicList.m_list.length === 0) {
      return;
    }
    let index = musicList.m_index;
    if (index < 0) {
      index = musicList.m_list.length - 1;
    }
    let item = musicList.m_list[index];
    if (item.m_type === 'note') {
      let note = item as NoteItem;
      if (isStart) {
        note.m_lig = note.m_lig === LigStatus.START ? LigStatus.NONE : LigStatus.START;
      } else {
        note.m_lig = note.m_lig === LigStatus.END ? LigStatus.NONE : LigStatus.END;
      }
      musicList.runNotationCallback();
      return;
    }
  }

  handleKeySigPress(event: KeyboardEvent) {
    switch (event.key) {
      case 'a':
      case 'A':
      case 'b':
      case 'B':
      case 'c':
      case 'C':
      case 'd':
      case 'D':
      case 'e':
      case 'E':
      case 'f':
      case 'F':
      case 'g':
      case 'G':
        if (this.pitchSig === null) {
          this.pitchSig = event.key;
        }
        else {
          this.pitchSig = null;
          this.accidSig = null;
          this.keySigMode = false;
          console.debug("unset keySigMode");
        }
        break;
      case '#':
      case '-':
      case 'n':
        if (this.pitchSig !== null && this.accidSig === null) {
          this.accidSig = event.key;
          let musicList = this.staffService._selectedStaff.musicList;
          musicList.processKeySig(this.pitchSig, this.accidSig);
          console.debug("Process with " + this.pitchSig + " and " + this.accidSig);
        }
        this.pitchSig = null;
        this.accidSig = null;
        this.keySigMode = false;
        console.debug("unset keySigMode");
        break;
    }
  }

  processAccidental(accid: string) {
    let musicList = this.staffService._selectedStaff.musicList;
    if (musicList.m_list.length === 0) {
      return;
    }
    let index = musicList.m_index;
    if (index < 0) {
      index = musicList.m_list.length - 1;
    }
    let item = musicList.m_list[index];
    if (item.m_type === 'note') {
      let note = item as NoteItem;
      switch(accid) {
        case 'N':
          note.m_accid = Accid.NONE;
          break;
        case '#':
          note.m_accid = Accid.SHARP;
          break;
        case '-':
          note.m_accid = Accid.FLAT;
          break;
        case 'n':
          note.m_accid = Accid.NATURAL;
          break;
      }
      musicList.runNotationCallback();
    }
  }
}
