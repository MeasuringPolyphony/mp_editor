import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRI } from '../utils/definitions';
import { formIIIFManifest } from '../tools';
import { StateService } from '../state-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  iiifManifest: IRI;

  // Metadata for MEI header
  shortTitle = "";
  composerName = "";
  userName = "";
  notationSubtype = "";

  inputStep: InputComponent.InputStep;

  source: string;
  identifier: string;

  constructor(
    private stateService: StateService,
    private route: ActivatedRoute,
  ) {
    this.inputStep = InputComponent.InputStep.METADATA;
    this.source = this.route.snapshot.paramMap.get('source');
    this.identifier = decodeURIComponent(this.route.snapshot.paramMap.get('identifier'));
    this.iiifManifest = formIIIFManifest(this.source, this.identifier);

    if (this.stateService.mei.metadata != undefined) {
      this.shortTitle = this.stateService.mei.metadata.shortTitle;
      this.composerName = this.stateService.mei.metadata.composerName;
      this.userName = this.stateService.mei.metadata.encoderName;
      this.notationSubtype = this.stateService.mei.notationSubtype;
    }

    console.debug(this.iiifManifest);
  }

  ngOnInit() {
    this.stateService.editorialMode = false;
  }

  onSetMetadata() {
    this.stateService.mei.metadata = {
      shortTitle: this.shortTitle,
      composerName: this.composerName,
      encoderName: this.userName,
      sourceIRI: this.iiifManifest,
    };
    this.stateService.mei.notationSubtype = this.notationSubtype;
    this.inputStep = InputComponent.InputStep.INPUT;
  }
}

export namespace InputComponent {
  export enum InputStep {
    METADATA,
    INPUT
  }
}
