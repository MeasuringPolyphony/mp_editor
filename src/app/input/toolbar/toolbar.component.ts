import { Component, OnInit } from '@angular/core';
import { MeiService } from '../mei.service';
import { StaffService } from '../staff.service';
import { StateService } from '../../state-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { StorageComponent } from '../storage/storage.component';

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
    dialogRef.afterClosed().subscribe(result => {
      console.debug("Closed!");
      console.debug(result);
    })
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
