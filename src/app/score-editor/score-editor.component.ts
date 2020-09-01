import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IRI } from '../utils/definitions';
import { StateService } from '../state-service.service';
import { MEIDocument } from '../utils/mei';
import { formIIIFManifest } from '../tools';

@Component({
  selector: 'app-score-editor',
  templateUrl: './score-editor.component.html',
  styleUrls: ['./score-editor.component.css']
})
export class ScoreEditorComponent implements OnInit {

  source: string;
  identifier: string;
  iiifManifest: IRI;
  meiDoc: MEIDocument;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StateService
  ) {
    this.source = this.route.snapshot.paramMap.get('source');
    this.identifier = decodeURIComponent(
      this.route.snapshot.paramMap.get('identifier')
    );
    this.iiifManifest = formIIIFManifest(this.source, this.identifier);
    this.meiDoc = this.stateService.mei;
    if (this.meiDoc === null) {
      this.router.navigate(['/input', this.source, this.identifier])
    }
  }

  ngOnInit() {
  }
}
