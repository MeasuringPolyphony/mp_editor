import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { IRI, Staff } from '../../input/definitions';

import Diva from 'diva.js';

@Component({
  selector: 'app-score-diva-view',
  templateUrl: './score-diva-view.component.html',
  styleUrls: ['./score-diva-view.component.css']
})
export class ScoreDivaViewComponent implements OnInit, OnDestroy {

  diva: Diva;

  @Input() iiifManifest: IRI;

  constructor() { }

  ngOnInit() {
    console.debug('IIIFManifest: ' + this.iiifManifest);
    this.diva = new Diva('diva-score-wrapper', {
      objectData: this.iiifManifest
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

}
