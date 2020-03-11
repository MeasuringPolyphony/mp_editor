/**
 * This component contains diva.js and has the staff bounding boxes
 * rendered over it. This is always visible.
 */
import { Component, OnInit, OnDestroy, Input, ViewEncapsulation, HostListener } from '@angular/core';

import { StaffService } from '../staff.service';
import { IRI, Staff } from '../definitions';

import Diva from 'diva.js';

@Component({
  selector: 'app-diva-view',
  templateUrl: './diva-view.component.html',
  styleUrls: ['./diva-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DivaViewComponent implements OnInit, OnDestroy {
  diva: Diva;
  creatingStaff: boolean = false;
  firstPoint: DOMPoint = null;

  @Input() iiifManifest: IRI;

  constructor(private staffService: StaffService) {
  }

  ngOnInit() {
    this.diva = new Diva('diva-wrapper', {
      objectData: this.iiifManifest
    });

    Diva.Events.subscribe('ManifestDidLoad', this.parseCanvases.bind(this), this.diva.settings.ID);
    Diva.Events.subscribe('ActivePageDidChange', this.refreshOverlay.bind(this), this.diva.settings.ID);
    Diva.Events.subscribe('DocumentDidLoad', this.refreshOverlay.bind(this), this.diva.settings.ID);
    Diva.Events.subscribe('ZoomLevelDidChange', this.handleZoom.bind(this), this.diva.settings.ID);

    // this.diva.disableDragScrollable();

    this.staffService.selectedStaff.subscribe(() => {
      this.refreshOverlay(this.diva.getActivePageIndex());
    });
  }

  ngOnDestroy() {
    try {
      this.diva.deactivate();
      this.diva.destroy();
    }
    catch (e) {
      console.warn(e);
    }
  }

  @HostListener('window:keydown.shift', [])
  handleKeydown() {
    this.diva.disableDragScrollable();
  }

  @HostListener('window:keyup.shift', [])
  handleKeyup() {
    if (!this.creatingStaff) {
      this.diva.enableDragScrollable();
    }
  }

  clickHandler(evt: MouseEvent) {
    const target = evt.target as Element;
    if (target.tagName === 'rect') {
      // Unselect previously selected staff.
      Array.from(document.getElementsByClassName("selectedZone"))
        .forEach(elem => {
          elem.classList.remove("selectedZone");
        });
      let staff = this.staffService.getStaffById(target.id);
      if (staff !== null) {
        this.staffService.selected = staff;
        target.classList.add("selectedZone");
      }
    }
  }

  mousedownHandler(evt: MouseEvent) {
    if (evt.shiftKey) {
      this.creatingStaff = true;

      const activeContainer = document.getElementById('editor-container-' + this.diva.getActivePageIndex().toString()).firstElementChild as SVGSVGElement;
      const clientPoint = activeContainer.createSVGPoint();
      clientPoint.x = evt.clientX;
      clientPoint.y = evt.clientY;

      const transformMatrix = activeContainer.getScreenCTM();
      this.firstPoint = clientPoint.matrixTransform(transformMatrix.inverse());

      // Create the initial drawing rect
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', this.firstPoint.x.toString());
      rect.setAttribute('y', this.firstPoint.y.toString());
      rect.setAttribute('width', '0');
      rect.setAttribute('height', '0');
      rect.classList.add("zoneRect");
      rect.id = 'drawing-rect';

      activeContainer.appendChild(rect);
    }
  }

  mousemoveHandler(evt: MouseEvent) {
    if (this.creatingStaff) {
      const drawingRect = document.getElementById('drawing-rect') as unknown as SVGRectElement;
      if (drawingRect !== null) {
        const container = drawingRect.viewportElement as SVGSVGElement;
        const currentPoint = container.createSVGPoint();
        currentPoint.x = evt.clientX;
        currentPoint.y = evt.clientY;

        const transformedPoint = currentPoint.matrixTransform(
          container.getScreenCTM().inverse()
        );

        drawingRect.setAttribute('x', Math.min(transformedPoint.x, this.firstPoint.x).toString());
        drawingRect.setAttribute('y', Math.min(transformedPoint.y, this.firstPoint.y).toString());

        drawingRect.setAttribute('width', Math.abs(transformedPoint.x - this.firstPoint.x).toString());
        drawingRect.setAttribute('height', Math.abs(transformedPoint.y - this.firstPoint.y).toString());
      }
    }
  }

  mouseupHandler(evt: MouseEvent) {
    if (this.creatingStaff) {
      this.diva.enableDragScrollable();
      this.creatingStaff = false;

      const pageIndex = this.diva.getActivePageIndex();

      const activeContainer = document.getElementById('editor-container-' + pageIndex.toString()).firstElementChild as SVGSVGElement;
      const clientPoint = activeContainer.createSVGPoint();
      clientPoint.x = evt.clientX;
      clientPoint.y = evt.clientY;

      const transformMatrix = activeContainer.getScreenCTM();
      const secondPoint = clientPoint.matrixTransform(transformMatrix.inverse());

      const newStaff = new Staff(
        Math.min(this.firstPoint.x, secondPoint.x),
        Math.min(this.firstPoint.y, secondPoint.y),
        Math.max(secondPoint.x, this.firstPoint.x),
        Math.max(secondPoint.y, this.firstPoint.y),
        this.diva.getCurrentCanvas(),
        this.diva.getActivePageIndex()
      );
      // Check for positive height and width before adding
      this.staffService.addStaff(pageIndex, newStaff);
      /*if ((secondPoint.x - this.firstPoint.x > 0) &&
        (secondPoint.y - this.firstPoint.y) > 0) {
        this.staffService.addStaff(pageIndex, newStaff);
      }*/
      this.refreshOverlay(pageIndex);
      this.firstPoint = null;
    }
  }

  refreshOverlay(pageIndex: number): void {
    // Get some features from the diva viewer
    const inner = this.diva.settings.innerElement;
    const dimensions = this.diva.getPageDimensionsAtCurrentZoomLevel(pageIndex);
    const offset = this.diva.settings.viewHandler._viewerCore.getPageRegion(
      pageIndex,
      {
        includePadding: true,
        incorporateViewport: true
      }
    );
    const marginLeft = getComputedStyle(inner, null).getPropertyValue('margin-left');

    // Check if we have a div for this page. Otherwise create one.
    let pageContainer = document.getElementById('editor-container-' + pageIndex.toString());
    if (pageContainer === null) {
      //pageContainer = document.createElement('div');
      pageContainer = document.createElement('div');
      pageContainer.id = 'editor-container-' + pageIndex.toString();
      pageContainer.classList.add('editor-container'); // For future use
      inner.appendChild(pageContainer); // Add the container to the DOM
    }

    // Create SVG container
    const svgParent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const maxZoom = this.diva.getPageDimensionsAtZoomLevel(pageIndex, Number.MAX_SAFE_INTEGER)
    svgParent.setAttribute('width', dimensions.width.toString());
    svgParent.setAttribute('height', dimensions.height.toString());
    svgParent.setAttribute('viewBox', '0 0 ' + maxZoom.width + ' ' + maxZoom.height);

    pageContainer.style.position = 'absolute';
    pageContainer.style.top = `${offset.top}px`;
    pageContainer.style.left = `${offset.left - parseInt(marginLeft)}px`;

    while (pageContainer.firstChild !== null) {
      pageContainer.firstChild.remove();
    }

    for (const staff of this.staffService.getStavesForIndex(pageIndex)) {
      let item = staff.svg;
      svgParent.appendChild(item);
      if (this.staffService._selectedStaff === staff) {
        item.classList.add("selectedZone");
      }
    }

    pageContainer.appendChild(svgParent);
  }

  handleZoom(): void {
    (new Promise(resolve => {
      Array.from(document.getElementsByClassName('editor-container'))
        .forEach((elem: HTMLElement) => { elem.style.display = 'none'; });
      setTimeout(resolve, this.diva.settings.zoomDuration + 100);
    })).then(() => {
      this.refreshOverlay(this.diva.getActivePageIndex());
      Array.from(document.getElementsByClassName('editor-container'))
        .forEach((elem: HTMLElement) => {
          elem.style.display = '';
        });
    });
  }

  /** Parse the IIIF manifest and associate each canvas index with an array of staves */
  parseCanvases(manifest: { sequences: { canvases: object[] }[] }) {
    for (const sequence of manifest.sequences) {
      for (const canvas of sequence.canvases) {
        // Add each canvas and record its zero-based index
        this.staffService.initIndex(sequence.canvases.indexOf(canvas), canvas.toString());
      }
    }
  }
}
