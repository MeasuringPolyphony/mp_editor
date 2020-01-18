/**
 * This component contains diva.js and has the staff bounding boxes
 * rendered over it. This is always visible.
 */
import { Component, OnInit, Input } from '@angular/core';

//import * as Diva from 'diva.js';
declare let Diva;

@Component({
  selector: 'app-diva-view',
  templateUrl: './diva-view.component.html',
  styleUrls: ['./diva-view.component.css']
})
export class DivaViewComponent implements OnInit {
  diva: any;
  creatingStaff: boolean = false;

  @Input() iiifManifest: string;

  constructor() {
  }

  ngOnInit() {
    this.diva = new Diva('diva-wrapper', {
      objectData: this.iiifManifest
    });

    this.diva.disableDragScrollable();
  }

  mousedownHandler(evt: MouseEvent) {
    if (evt.shiftKey) {
      this.creatingStaff = true;
      console.log("Mouse down! Shift key down!");
    }
  }

  mouseupHandler(evt: MouseEvent) {
    if (this.creatingStaff) {
      console.log("Mouse up!");
      this.creatingStaff = false;
      // Create new staff element
    }
  }

}
