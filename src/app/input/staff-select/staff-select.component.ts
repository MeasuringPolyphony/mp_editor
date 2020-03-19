import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StaffService } from '../staff.service';
import { C_PitchClass, D_PitchClass, E_PitchClass, F_PitchClass, G_PitchClass, A_PitchClass, B_PitchClass } from '../musiclist';
import { HNPService } from '../../hnp.service';

@Component({
  selector: 'app-staff-select',
  templateUrl: './staff-select.component.html',
  styleUrls: ['./staff-select.component.css']
})
export class StaffSelectComponent implements OnInit {
  @ViewChild('example') container: ElementRef;
  constructor(public staffService: StaffService, private hnpService: HNPService) { }

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

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (this.staffService._selectedStaff == null) return;

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
        case 'C':
          musicList.addPitchFar(C_PitchClass);
          event.preventDefault();
          break;
        case 'c':
          musicList.addPitchNear(C_PitchClass);
          event.preventDefault();
          break;
        case 'D':
          musicList.addPitchFar(D_PitchClass);
          event.preventDefault();
          break;
        case 'd':
          musicList.addPitchNear(D_PitchClass);
          event.preventDefault();
          break;
        case 'E':
          musicList.addPitchFar(E_PitchClass);
          event.preventDefault();
          break;
        case 'e':
          musicList.addPitchNear(E_PitchClass);
          event.preventDefault();
          break;
        case 'F':
          musicList.addPitchFar(F_PitchClass);
          event.preventDefault();
          break;
        case 'f':
          musicList.addPitchNear(F_PitchClass);
          event.preventDefault();
          break;
        case 'G':
          musicList.addPitchFar(G_PitchClass);
          event.preventDefault();
          break;
        case 'g':
          musicList.addPitchNear(G_PitchClass);
          event.preventDefault();
          break;
        case 'A':
          musicList.addPitchFar(A_PitchClass);
          event.preventDefault();
          break;
        case 'a':
          musicList.addPitchNear(A_PitchClass);
          event.preventDefault();
          break;
        case 'B':
          musicList.addPitchFar(B_PitchClass);
          event.preventDefault();
          break;
        case 'b':
          musicList.addPitchNear(B_PitchClass);
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
          item.m_rhythm = digit;
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
      item.m_dot = !item.m_dot;
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
      if (isStart) {
        item.m_ligStart = !item.m_ligStart;
      } else {
        item.m_ligEnd = !item.m_ligEnd;
      }
      musicList.runNotationCallback();
      return;
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
      switch(accid) {
        case 'N':
          item.m_accid = 0;
          break;
        case '#':
          item.m_accid = 1;
          break;
        case '-':
          item.m_accid = 2;
          break;
        case 'n':
          item.m_accid = 3;
          break;
      }
      musicList.runNotationCallback();
    }
  }
}
