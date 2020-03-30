import { Component, OnInit } from '@angular/core';
import { MeiService } from '../mei.service';
import { StaffService } from '../staff.service';
import { StateService } from '../../state-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { StorageComponent, DialogResult } from '../storage/storage.component';
import { Staff } from '../definitions';
import { MusicList, MusicItem } from '../musiclist';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private meiService: MeiService,
    public staffService: StaffService,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StorageComponent);
    dialogRef.afterClosed().subscribe((result: DialogResult) => {
      console.debug("Closed!");
      switch (result.action) {
        case 'save':
          const state = {
            voices: [...(this.staffService.voices.entries())].map(value => {
              return {
                voice: value[0],
                mensurations: value[1]
              };
            }),
            staves: this.staffService.staves,
            metadata: this.meiService.metadata
          };
          localStorage.setItem(
            "input-slot-" + result.selected.toString(),
            JSON.stringify(state)
          );
          break;
        case 'load':
          const stateString = localStorage.getItem("input-slot-" + result.selected.toString());
          try {
            const state = JSON.parse(stateString);
            this.staffService.setVoices(state.voices);
            this.meiService.metadata = state.metadata;
            for (let staff of state.staves as Staff[]) {
              Object.setPrototypeOf(staff, Staff.prototype);
              Object.setPrototypeOf(staff.musicList, MusicList.prototype);
              staff.musicList.m_list.forEach(item => {
                Object.setPrototypeOf(item, MusicItem.prototype);
                item.init();
              });
              this.staffService.initIndex(staff.index, staff.canvas);
              this.staffService.addStaff(staff.index, staff);
            }
            this.staffService.selected = this.staffService.staves[0];
          }
          catch (e) {
            console.error(e);
          }
          break;
      }
    });
  }

  saveClick(evt: MouseEvent) {
    let target = evt.target as HTMLAnchorElement;
    const mei = this.meiService.generateFullMEI();
    const serializer = new XMLSerializer();
    const content = serializer.serializeToString(mei);
    const blob = new Blob([content], {type: 'application/xml'});
    target.setAttribute('href', window.URL.createObjectURL(blob));
  }

  finishStep() {
    const mei = this.meiService.generateFullMEI();
    const type = this.route.snapshot.paramMap.get('source');
    const identifier = this.route.snapshot.paramMap.get('identifier');
    this.stateService.mei = mei;
    this.router.navigate(['/score', type, identifier]);
  }

  deleteStaff() {
    this.staffService.triggerDelete();
  }

}
