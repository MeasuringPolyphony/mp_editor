import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state-service.service';
import { MatDialog } from '@angular/material/dialog';
import { System } from '../../utils/system';
import { InputService } from '../input.service';

import * as vkbeautify from 'vkbeautify';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  currentStaff: System;

  constructor(
    private selectedSystem: InputService,
    private stateService: StateService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.selectedSystem.subscribe(system => {
      this.currentStaff = system;
    });
  }

  saveClick(evt: MouseEvent) {
    let target = evt.target as HTMLAnchorElement;
    const mei = this.stateService.mei.generateXML();
    const serializer = new XMLSerializer();
    const content = vkbeautify.xml(serializer.serializeToString(mei));
    const blob = new Blob([content], {type: 'application/xml'});
    target.setAttribute('href', window.URL.createObjectURL(blob));
  }

  saveHumdrumClick(evt: MouseEvent) {
    let target = evt.target as HTMLAnchorElement;
    const white = this.currentStaff.parent.parent.notationType === "mensural.white";
    const content = this.currentStaff.contents.getHumdrumScore({white: white});
    const blob = new Blob([content], {type: 'text/plain'});
    target.setAttribute('href', window.URL.createObjectURL(blob));
  }

  deleteStaff() {
    let system = this.currentStaff;
    let part = system.parent;
    part.removeSystem(system.id);
    this.selectedSystem.next(null);
  }

}
