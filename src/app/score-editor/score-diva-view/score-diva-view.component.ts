import { Component, OnInit, Input } from '@angular/core';

import { IRI, Staff } from '../../input/definitions';

import Diva from 'diva.js';

@Component({
  selector: 'app-score-diva-view',
  templateUrl: './score-diva-view.component.html',
  styleUrls: ['./score-diva-view.component.css']
})
export class ScoreDivaViewComponent implements OnInit {

  diva: Diva;

  @Input() iiifManifest: IRI;

  constructor() { }

  ngOnInit() {
    console.debug('IIIFManifest: ' + this.iiifManifest);
    this.diva = new Diva('diva-wrapper', {
      objectData: this.iiifManifest
    });
  }

}
