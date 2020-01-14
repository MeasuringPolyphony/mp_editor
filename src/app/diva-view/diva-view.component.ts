import { Component, OnInit } from '@angular/core';

//const Diva = require('diva.js');
//import * as Diva from 'diva.js';
declare let Diva;

@Component({
  selector: 'app-diva-view',
  templateUrl: './diva-view.component.html',
  styleUrls: ['./diva-view.component.css']
})
export class DivaViewComponent implements OnInit {
  diva: any;

  constructor() {
  }

  ngOnInit() {
    this.diva = new Diva('diva-wrapper', {
      objectData: 'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8454675g/manifest.json'
    });
  }

}