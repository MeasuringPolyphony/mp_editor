import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { refineScore } from 'scoring-up';
import * as vkbeautify from 'vkbeautify';

import { StateService } from '../../state-service.service';
import { DocService } from '../doc.service';

@Component({
  selector: 'app-score-toolbar',
  templateUrl: './score-toolbar.component.html',
  styleUrls: ['./score-toolbar.component.css']
})
export class ScoreToolbarComponent implements OnInit {

  currentDoc: XMLDocument = null;

  constructor(public stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    private doc: DocService
  ) { }

  ngOnInit() {
    this.doc._scoreSubject.subscribe((doc) => {
      this.currentDoc = doc;
    });
  }

  saveClick(event: MouseEvent) {
    if (this.currentDoc !== null) {
      const target = event.target as HTMLAnchorElement;
      const refinedDoc = refineScore(
        this.currentDoc.cloneNode(true),
        this.stateService.scoreOptions.modernClefs,
        this.stateService.scoreOptions.barlines
      );
      const serializer = new XMLSerializer();
      const content = vkbeautify.xml(serializer.serializeToString(refinedDoc));
      const blob = new Blob([content], {type: 'application/xml'});
      target.setAttribute('href', URL.createObjectURL(blob));
    }
  }

  savePartsClick(event: MouseEvent) {
    if (this.stateService.mei != null) {
      const target = event.target as HTMLAnchorElement;
      const serializer = new XMLSerializer();
      const content = vkbeautify.xml(serializer.serializeToString(this.doc.parts));
      const blob = new Blob([content], {type: 'application/xml'});
      target.setAttribute('href', URL.createObjectURL(blob));
    }
  }

  goToInputEditor() {
    if (confirm("Warning: Edits made on this page will be lost. Return to input editor?")) {
      let source = this.route.snapshot.paramMap.get('source');
      let identifier = this.route.snapshot.paramMap.get('identifier');
      this.router.navigate(['/input', source, identifier]);
    }
  }

  copyToClipboard() {
    if (this.currentDoc !== null) {
      const serializer = new XMLSerializer();
      const refinedDoc = refineScore(
        this.currentDoc.cloneNode(true),
        this.stateService.scoreOptions.modernClefs,
        this.stateService.scoreOptions.barlines
      );
      const content = vkbeautify.xml(serializer.serializeToString(refinedDoc));
      navigator.clipboard.writeText(content).then(() => { alert("MEI Score Copied!"); }).catch(err => { console.debug(err); alert("Copy failed :("); });
    }
  }

}
