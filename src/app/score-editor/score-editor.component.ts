import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRI } from '../input/definitions';
import { StateService } from '../state-service.service';

@Component({
  selector: 'app-score-editor',
  templateUrl: './score-editor.component.html',
  styleUrls: ['./score-editor.component.css']
})
export class ScoreEditorComponent implements OnInit {

  source: string;
  identifier: string;
  iiifManifest: IRI;
  meiDoc: XMLDocument;

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService
  ) {
    this.source = this.route.snapshot.paramMap.get('source');
    this.identifier = decodeURIComponent(
      this.route.snapshot.paramMap.get('identifier')
    );
    this.meiDoc = this.stateService.mei;
    console.debug(this.meiDoc);
  }

  ngOnInit() {
  }

}
