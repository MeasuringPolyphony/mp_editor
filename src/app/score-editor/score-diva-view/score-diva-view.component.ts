import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { IRI } from '../../utils/definitions';
import * as diamm from '../../utils/diamm';

import { SelectedStaffService } from '../selected-staff.service';

import Diva from 'diva.js';

@Component({
  selector: 'app-score-diva-view',
  templateUrl: './score-diva-view.component.html',
  styleUrls: ['./score-diva-view.component.css']
})
export class ScoreDivaViewComponent implements OnInit, OnDestroy {

  diva: Diva;
  pageToCanvasMap: Map<string, number> = new Map();
  iri: IRI;
  bbox: {ulx: string, uly: string, lrx: string, lry: string};

  @Input() iiifManifest: IRI;

  constructor(private staffService: SelectedStaffService) { }

  ngOnInit() {
    let headers;
    if (this.iiifManifest.includes('diamm.ac.uk')) {
      headers = {
          Accept: 'application/json',
          Authorization: `Token ${diamm.key}`,
          'X-DIAMM-Secret': diamm.result,
          'X-DIAMM-Origin': diamm.domain
      };
    } else {
      headers = {
          Accept: 'application/json',
      };
    }
    this.diva = new Diva('diva-score-wrapper', {
      objectData: this.iiifManifest,
      // @ts-ignore-next
      requestHeaders: headers
    });

    Diva.Events.subscribe('ManifestDidLoad', this.parseCanvases.bind(this), this.diva.settings.ID);
    Diva.Events.subscribe('ZoomLevelDidChange', this.handleZoom.bind(this), this.diva.settings.ID);

    this.staffService.getStaffLocation().subscribe(([iri, bbox]) =>  {
      this.iri = iri;
      this.bbox = bbox;
      console.debug(iri);
      console.debug(bbox);
      this.redraw();
    });
  }

  handleZoom() {
    (new Promise(resolve => {
      document.getElementById("score-editor-container").style.display = "none";
      setTimeout(resolve, this.diva.settings.zoomDuration + 100);
    })).then(() => {
      this.redraw();
      document.getElementById("score-editor-container").style.display = "";
    });
  }

  redraw() {
    const index = this.pageToCanvasMap.get(this.iri);
    if (index === undefined) {
      return;
    }
    // Change to correct folio if necessary
    if (!this.diva.getCurrentPageIndices().includes(index)) {
      this.diva.gotoPageByIndex(index);
    }
    // Get the inner element and dimensions
    const inner =this.diva.settings.innerElement;
    const dimensions = this.diva.getPageDimensionsAtCurrentZoomLevel(index);
    const offset = this.diva.settings.viewHandler._viewerCore.getPageRegion(
      index,
      {
        includePadding: true,
        incorporateViewport: true
      }
    );
    const marginLeft = getComputedStyle(inner, null).getPropertyValue('margin-left');
    // Check for the container div or create one
    let container = document.getElementById("score-editor-container");
    if (container === null) {
      container = document.createElement("div");
      container.id = "score-editor-container";
      inner.appendChild(container);
    }

    // Create SVG container
    const svgParent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const maxZoom = this.diva.getPageDimensionsAtZoomLevel(index, Number.MAX_SAFE_INTEGER)
    svgParent.setAttribute('width', dimensions.width.toString());
    svgParent.setAttribute('height', dimensions.height.toString());
    svgParent.setAttribute('viewBox', '0 0 ' + maxZoom.width + ' ' + maxZoom.height);

    container.style.position = 'absolute';
    container.style.top = `${offset.top}px`;
    container.style.left = `${offset.left - parseInt(marginLeft)}px`;

    while (container.firstChild !== null) {
      container.firstChild.remove();
    }

    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", this.bbox.ulx);
    rect.setAttribute("y", this.bbox.uly);
    rect.setAttribute("width", (Number(this.bbox.lrx) - Number(this.bbox.ulx)).toString());
    rect.setAttribute("height", (Number(this.bbox.lry) - Number(this.bbox.uly)).toString());
    rect.classList.add("zoneRect");
    svgParent.appendChild(rect);

    container.appendChild(svgParent);
  }

  parseCanvases(manifest: { sequences: { canvases: object[] }[]}) {
    for (const sequence of manifest.sequences) {
      for (const canvas of sequence.canvases) {
        this.pageToCanvasMap.set(canvas['@id'], sequence.canvases.indexOf(canvas));
      }
    }
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

}
