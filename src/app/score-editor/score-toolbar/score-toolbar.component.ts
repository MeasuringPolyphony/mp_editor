import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { v4 as uuid } from 'uuid';
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
      const serializer = new XMLSerializer();
      const temp = serializer.serializeToString(this.currentDoc);
      const content = vkbeautify.xml(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<?xml-model href=\"https://music-encoding.org/schema/dev/mei-Mensural.rng\"" +
        " type=\"application/xml\" schematypens=\"http://relaxng.org/ns/structure/1.0\"?>\n" +
        "<?xml-model href=\"https://music-encoding.org/schema/dev/mei-Mensural.rng\"" +
        " type=\"application/xml\" schematypens=\"http://purl.oclc.org/dsdl/schematron\"?>\n" +
        temp
      );
      const blob = new Blob([content], {type: 'application/xml'});
      target.setAttribute('href', URL.createObjectURL(blob));
      target.setAttribute('download', 'Score_' + (this.stateService.editorialMode ? 'Editorial' : 'Original') + '_' + uuid() + '.xml');
    }
  }

  savePartsClick(event: MouseEvent) {
    if (this.stateService.mei != null) {
      const target = event.target as HTMLAnchorElement;
      const serializer = new XMLSerializer();
      const temp = serializer.serializeToString(this.doc.parts);
      const content = vkbeautify.xml(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<?xml-model href=\"https://music-encoding.org/schema/dev/mei-Mensural.rng\"" +
        " type=\"application/xml\" schematypens=\"http://relaxng.org/ns/structure/1.0\"?>\n" +
        "<?xml-model href=\"https://music-encoding.org/schema/dev/mei-Mensural.rng\"" +
        " type=\"application/xml\" schematypens=\"http://purl.oclc.org/dsdl/schematron\"?>\n" +
        temp
      );
      const blob = new Blob([content], {type: 'application/xml'});
      target.setAttribute('href', URL.createObjectURL(blob));
      target.setAttribute('download', 'Parts_' + (this.stateService.editorialMode ? 'Editorial' : 'Original') + '_' + uuid() + '.xml');
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
      const content = vkbeautify.xml(serializer.serializeToString(this.currentDoc));
      navigator.clipboard.writeText(content).then(() => { alert("MEI Score Copied!"); }).catch(err => { console.debug(err); alert("Copy failed :("); });
    }
  }

}
