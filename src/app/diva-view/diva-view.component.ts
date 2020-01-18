/**
 * This component contains diva.js and has the staff bounding boxes
 * rendered over it. This is always visible.
 */
import { Component, OnInit, Input } from '@angular/core';

import { IRI, Staff } from '../definitions';

//import * as Diva from 'diva.js';
declare let Diva;

@Component({
  selector: 'app-diva-view',
  templateUrl: './diva-view.component.html',
  styleUrls: ['./diva-view.component.css']
})
export class DivaViewComponent implements OnInit {
  diva: any;
  canvas: HTMLCanvasElement;
  creatingStaff: boolean = false;
  staffMap: Map<IRI, Array<Staff>> = new Map();
  firstPoint: DOMPoint = null;

  @Input() iiifManifest: IRI;

  constructor() {
  }

  ngOnInit() {
    this.diva = new Diva('diva-wrapper', {
      objectData: this.iiifManifest
    });
    Diva.Events.subscribe('ViewerDidLoad', this.objectLoaded.bind(this), this.diva.settings.ID);

    this.diva.disableDragScrollable();
  }

  objectLoaded() {
    this.canvas = document.getElementById('diva-wrapper').getElementsByClassName('diva-viewer-canvas')[0] as HTMLCanvasElement;
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
    }
  }

}
