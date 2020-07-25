import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state-service.service';
import { MatDialog } from '@angular/material/dialog';
import { System } from '../../utils/system';
import { selectedSystem } from '../utils';

import * as vkbeautify from 'vkbeautify';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  currentStaff: System;

  constructor(
    private stateService: StateService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    selectedSystem.subscribe(system => {
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

  deleteStaff() {
    let system = this.stateService.mei.getSystem(this.currentStaff.id);
    let part = system.parent;
    part.removeSystem(system.id);
  }

}
