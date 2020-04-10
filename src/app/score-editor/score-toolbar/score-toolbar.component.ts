import { Component, OnInit } from '@angular/core';

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

  constructor(private stateService: StateService) { }

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

}
