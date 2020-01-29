import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StaffService } from '../staff.service';
import { C_PitchClass, D_PitchClass, E_PitchClass, F_PitchClass, G_PitchClass, A_PitchClass, B_PitchClass } from '../musiclist';
import { HNPService } from '../hnp.service';
import { Voice, Mensuration } from '../definitions';

@Component({
  selector: 'app-staff-select',
  templateUrl: './staff-select.component.html',
  styleUrls: ['./staff-select.component.css']
})
export class StaffSelectComponent implements OnInit {
  @ViewChild('example', {static: false}) container: ElementRef;

  constructor(private staffService: StaffService, private hnpService: HNPService) { }

  ngOnInit() {
    this.staffService.selectedStaff.subscribe({
      next: (staff) => {
        console.log(staff.voice.toString());
        console.log(staff.musicList.getHumdrumScore());
        this.staffForm.get('voice').setValue(staff.voice.toString());
        this.staffForm.get('modus').setValue(staff.modus.toString());
        this.staffForm.get('tempus').setValue(staff.tempus.toString());
        this.staffForm.get('prolatio').setValue(staff.prolatio.toString());
        let element = this.hnpService.humdrumToSVG(staff.musicList.getHumdrumScore());
        console.log(element);
        this.container.nativeElement.innerHTML = '';
        this.container.nativeElement.appendChild(element);
      }
    })
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

  onSubmit() {
    if (this.staffService._selectedStaff !== null) {
      console.log("Set!");
      this.staffService._selectedStaff.voice = this.staffForm.get('voice').value as Voice;
      this.staffService._selectedStaff.modus = this.staffForm.get('modus').value as Mensuration;
      this.staffService._selectedStaff.tempus = this.staffForm.get('tempus').value as Mensuration;
      this.staffService._selectedStaff.prolatio = this.staffForm.get('prolatio').value as Mensuration;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (this.staffService._selectedStaff == null) return;
    console.log(event);

    // Based on processKeypress function in mensural-input
    if (event.metaKey) return;
    var state;
    let musicList = this.staffService._selectedStaff.musicList;
    if ((musicList.m_index >=0) && (event.key.length === 1)) {
      if ((event.key >= '0') && (event.key <= '9')) {
        //processDigit(event.key.toString(), event);
        event.preventDefault();
        return;
      }
      state = musicList.addTextToCurrentItem(event.key);
      if (state) {
        event.preventDefault();
        return;
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
      return;
    }

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
    }
    this.updateSVG();
  }
}
