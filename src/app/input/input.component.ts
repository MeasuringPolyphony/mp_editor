import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Contributor, IRI } from '../utils/definitions';
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
    shortTitle: new FormControl('', [Validators.required]),
    composerName: new FormControl('', [Validators.required]),
    contributors: new FormArray([]),
    notationSubtype: new FormControl('', [Validators.required]),
    siglum: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
  });

  temp: FormArray;

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
      //this.metadataForm.controls.userName.setValue(this.stateService.mei.metadata.encoderName);
      this.metadataForm.controls.notationSubtype.setValue(this.stateService.mei.notationSubtype);
      this.metadataForm.controls.siglum.setValue(this.stateService.mei.metadata.siglum);
      this.metadataForm.controls.genre.setValue(this.stateService.mei.metadata.genre);
    }

    this.temp = this.metadataForm.get('contributors') as FormArray;
    console.debug(this.iiifManifest);
    console.debug(this.metadataForm.controls.contributors);
  }

  ngOnInit() {
    this.stateService.editorialMode = false;
  }

  onSetMetadata() {
    let value = this.metadataForm.value;

    this.stateService.mei.metadata = {
      shortTitle: value.shortTitle,
      composerName: value.composerName,
      contributors: value.contributors.filter(entry => {
        return (entry.type.length > 0) && (entry.name.length > 0);
      }).map(entry => {
        return entry as Contributor;
      }),
      sourceIRI: this.iiifManifest,
      siglum: value.siglum,
      genre: value.genre,
    };
    this.stateService.mei.notationSubtype = value.notationSubtype;
    this.inputStep = InputComponent.InputStep.INPUT;
  }

  addContributor() {
    this.temp.push(
      new FormGroup({
        type: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
      })
    )
  }
}

export namespace InputComponent {
  export enum InputStep {
    METADATA,
    INPUT
  }
}
