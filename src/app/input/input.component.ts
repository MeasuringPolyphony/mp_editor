import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { IRI } from '../utils/definitions';
import { MEIDocument } from '../utils/mei';
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
  metadataForm = new FormGroup({
    shortTitle: new FormControl(''),
    composerName: new FormControl(''),
    userName: new FormControl(''),
    notationSubtype: new FormControl(''),
    siglum: new FormControl(''),
    genre: new FormControl(''),
  });

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

    if (!this.stateService.mei) {
      this.stateService.mei = new MEIDocument(this.iiifManifest);
    }

    if (this.stateService.mei.metadata != undefined) {
      this.metadataForm.controls.shortTitle.setValue(this.stateService.mei.metadata.shortTitle);
      this.metadataForm.controls.composerName.setValue(this.stateService.mei.metadata.composerName);
      this.metadataForm.controls.userName.setValue(this.stateService.mei.metadata.encoderName);
      this.metadataForm.controls.notationSubtype.setValue(this.stateService.mei.notationSubtype);
      this.metadataForm.controls.siglum.setValue(this.stateService.mei.metadata.siglum);
      this.metadataForm.controls.genre.setValue(this.stateService.mei.metadata.genre);
    }

    console.debug(this.iiifManifest);
  }

  ngOnInit() {
    this.stateService.editorialMode = false;
  }

  onSetMetadata() {
    let value =this.metadataForm.value;
    this.stateService.mei.metadata = {
      shortTitle: value.shortTitle,
      composerName: value.composerName,
      encoderName: value.userName,
      sourceIRI: this.iiifManifest,
      siglum: value.siglum,
      genre: value.genre,
    };
    this.stateService.mei.notationSubtype = value.notationSubtype;
    this.inputStep = InputComponent.InputStep.INPUT;
  }
}

export namespace InputComponent {
  export enum InputStep {
    METADATA,
    INPUT
  }
}
