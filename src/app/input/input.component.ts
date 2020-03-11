import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IRI } from './definitions';
import { formIIIFManifest } from '../tools';
import { MeiService } from './mei.service';

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
    private meiService: MeiService,
    private route: ActivatedRoute,
  ) {
    this.inputStep = InputComponent.InputStep.METADATA;
    this.source = this.route.snapshot.paramMap.get('source');
    this.identifier = decodeURIComponent(this.route.snapshot.paramMap.get('identifier'));
    this.iiifManifest = formIIIFManifest(this.source, this.identifier);

    if (this.meiService.headerData != undefined) {
      this.shortTitle = this.meiService.headerData.shortTitle;
      this.composerName = this.meiService.headerData.composerName;
      this.userName = this.meiService.headerData.userName;
      this.notationSubtype = this.meiService.headerData.notationSubtype;
    }

    console.debug(this.iiifManifest);
  }

  ngOnInit() {
    /*this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.source = paramMap.get('source');
      this.identifier = decodeURIComponent(paramMap.get('identifier'));
    });*/
  }

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
