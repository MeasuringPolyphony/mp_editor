import { Component, OnInit } from '@angular/core';

import { scoreDoc } from '../score-editor.module';

@Component({
  selector: 'app-score-toolbar',
  templateUrl: './score-toolbar.component.html',
  styleUrls: ['./score-toolbar.component.css']
})
export class ScoreToolbarComponent implements OnInit {

  currentDoc: XMLDocument = null;

  constructor() { }

  ngOnInit() {
    scoreDoc.subscribe((doc) => {
      this.currentDoc = doc;
    });
  }

  saveClick(event: MouseEvent) {
    if (this.currentDoc !== null) {
      const target = event.target as HTMLAnchorElement;
      const serializer = new XMLSerializer();
      const content = serializer.serializeToString(this.currentDoc);
      const blob = new Blob([content], {type: 'application/xml'});
      target.setAttribute('href', URL.createObjectURL(blob));
    }
  }

}
