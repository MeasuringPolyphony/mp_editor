import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as vkbeautify from 'vkbeautify';

import { StateService } from '../../state-service.service';
import { scoreDoc } from '../definitions';

@Component({
  selector: 'app-score-toolbar',
  templateUrl: './score-toolbar.component.html',
  styleUrls: ['./score-toolbar.component.css']
})
export class ScoreToolbarComponent implements OnInit {

  currentDoc: XMLDocument = null;

  constructor(public stateService: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    scoreDoc.subscribe((doc) => {
      this.currentDoc = doc;
    });
  }

  saveClick(event: MouseEvent) {
    if (this.currentDoc !== null) {
      const target = event.target as HTMLAnchorElement;
      const serializer = new XMLSerializer();
      const content = vkbeautify.xml(serializer.serializeToString(this.currentDoc));
      const blob = new Blob([content], {type: 'application/xml'});
      target.setAttribute('href', URL.createObjectURL(blob));
    }
  }

  savePartsClick(event: MouseEvent) {
    if (this.stateService.mei != null) {
      const target = event.target as HTMLAnchorElement;
      const serializer = new XMLSerializer();
      const content = vkbeautify.xml(serializer.serializeToString(this.stateService.mei));
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

}
