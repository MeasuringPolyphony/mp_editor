import { Component, OnInit } from '@angular/core';
import { IRI } from './definitions';
import { MeiService } from './mei.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  iiifManifest: IRI = 'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8454675g/manifest.json';
  title = 'Measuring Polyphony Editor';

  // Metadata for MEI header
  shortTitle = "";
  composerName = "";
  userName = "";
  notationSubtype = "";

  inputStep: InputComponent.InputStep;

  constructor(private meiService: MeiService) {
    this.inputStep = InputComponent.InputStep.METADATA;
  }

  ngOnInit() {}

  onSetMetadata() {
    this.meiService.headerData = {
      shortTitle: this.shortTitle,
      composerName: this.composerName,
      userName: this.userName,
      sourceURI: this.iiifManifest,
      notationSubtype: this.notationSubtype
    };
    this.inputStep = InputComponent.InputStep.INPUT;
  }
}

export namespace InputComponent {
  export enum InputStep {
    METADATA,
    INPUT
  }
}
