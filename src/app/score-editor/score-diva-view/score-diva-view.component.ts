import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { IRI, Staff } from '../../input/definitions';

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

  @Input() iiifManifest: IRI;

  constructor(private staffService: SelectedStaffService) { }

  ngOnInit() {
    this.diva = new Diva('diva-score-wrapper', {
      objectData: this.iiifManifest
    });

    Diva.Events.subscribe('ManifestDidLoad', this.parseCanvases.bind(this), this.diva.settings.ID);

    this.staffService.getStaffLocation().subscribe(([iri, _bbox]) =>  {
      if (!this.diva.getCurrentPageIndices().includes(this.pageToCanvasMap.get(iri))) {
        this.diva.gotoPageByIndex(this.pageToCanvasMap.get(iri));
      }
    });
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
