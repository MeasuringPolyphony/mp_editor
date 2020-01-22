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
  creatingStaff: boolean = false;
  firstPoint: DOMPoint = null;

  // Index Map (map 0-indexes to staves)
  indexMap: Map<number, Array<Staff>>;

  @Input() iiifManifest: IRI;

  constructor() {
  }

  ngOnInit() {
    this.diva = new Diva('diva-wrapper', {
      objectData: this.iiifManifest
    });

    Diva.Events.subscribe('ManifestDidLoad', this.parseCanvases.bind(this), this.diva.settings.ID);
    Diva.Events.subscribe('ActivePageDidChange', this.refreshOverlay.bind(this), this.diva.settings.ID);
    Diva.Events.subscribe('DocumentDidLoad', this.refreshOverlay.bind(this), this.diva.settings.ID);

    this.diva.disableDragScrollable();
  }

  mousedownHandler(evt: MouseEvent) {
    if (evt.shiftKey) {
      this.creatingStaff = true;
      console.log("Mouse down! Shift key down!");

      const activeContainer = document.getElementById('editor-container-' + this.diva.getActivePageIndex().toString()).firstElementChild as SVGSVGElement;
      const clientPoint = activeContainer.createSVGPoint();
      clientPoint.x = evt.clientX;
      clientPoint.y = evt.clientY;

      const transformMatrix = activeContainer.getScreenCTM();
      this.firstPoint = clientPoint.matrixTransform(transformMatrix.inverse());
    }
  }

  mouseupHandler(evt: MouseEvent) {
    if (this.creatingStaff) {
      console.log("Mouse up!");
      this.creatingStaff = false;

      const pageIndex = this.diva.getActivePageIndex();

      const activeContainer = document.getElementById('editor-container-' + pageIndex.toString()).firstElementChild as SVGSVGElement;
      const clientPoint = activeContainer.createSVGPoint();
      clientPoint.x = evt.clientX;
      clientPoint.y = evt.clientY;

      const transformMatrix = activeContainer.getScreenCTM();
      const secondPoint = clientPoint.matrixTransform(transformMatrix.inverse());

      const newStaff = new Staff(
        this.firstPoint.x,
        this.firstPoint.y,
        secondPoint.x,
        secondPoint.y,
        ""
      );
      this.indexMap.get(pageIndex).push(newStaff);
      this.refreshOverlay(pageIndex);
      this.firstPoint = null;
    }
  }

  refreshOverlay(pageIndex: number): void {
    // Get some features from the diva viewer
    const inner = document.getElementById('diva-1-inner'); // Is there a better way to do this?
    const dimensions = this.diva.getPageDimensionsAtCurrentZoomLevel(pageIndex);
    const offset = this.diva.settings.viewHandler._viewerCore.getPageRegion(
      pageIndex,
      {
        includePadding: true,
        incorporateViewport: true
      }
    );
    const marginLeft = window.getComputedStyle(inner, null).getPropertyValue('margin-left');

    console.log(this.diva.getPageDimensionsAtCurrentZoomLevel(pageIndex));

    // Check if we have a div for this page. Otherwise create one.
    let pageContainer = document.getElementById('editor-container-' + pageIndex.toString());
    if (pageContainer === null) {
      pageContainer = document.createElement('div');
      pageContainer.id = 'editor-container-' + pageIndex.toString();
      pageContainer.classList.add('editor-container'); // For future use
      inner.appendChild(pageContainer); // Add the container to the DOM
    }

    // Create SVG container
    const svgParent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgParent.setAttribute('width', dimensions.width);
    svgParent.setAttribute('height', dimensions.height);
    svgParent.setAttribute('viewbox', '0 0 ' + dimensions.width + ' ' + dimensions.height);

    pageContainer.style.position = 'absolute';
    pageContainer.style.top = `${offset.top}px`;
    pageContainer.style.left = `${offset.left - parseInt(marginLeft)}px`;

    while (pageContainer.firstChild !== null) {
      pageContainer.firstChild.remove();
    }

    for (const staff of this.indexMap.get(pageIndex)) {
      svgParent.appendChild(staff.svg);
    }

    pageContainer.appendChild(svgParent);
  }

  /** Parse the IIIF manifest and associate each canvas index with an array of staves */
  parseCanvases(manifest: { sequences: { canvases: object[] }[] }) {
    console.log(this.diva);
    this.indexMap = new Map();
    for (const sequence of manifest.sequences) {
      for (const canvas of sequence.canvases) {
        // Add each canvas and record its zero-based index
        this.indexMap.set(sequence.canvases.indexOf(canvas), []);
      }
    }
  }
}
