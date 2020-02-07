import { Component } from '@angular/core';
import { IRI } from './definitions';
import { MeiService } from './mei.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iiifManifest: IRI = 'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8454675g/manifest.json';
  title = 'Measuring Polyphony Editor';

  // Metadata for MEI header
  shortTitle = "";
  composerName = "";
  userName = "";

  inputStep: AppComponent.InputStep;

  constructor(private meiService: MeiService) {
    this.inputStep = AppComponent.InputStep.METADATA;
  }

  onSetMetadata() {
    this.meiService.headerData = { shortTitle: this.shortTitle, composerName: this.composerName, userName: this.userName };
    this.inputStep = AppComponent.InputStep.INPUT;
  }
}

export namespace AppComponent {
  export enum InputStep {
    METADATA,
    INPUT
  }
}
