import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';

import { MEIDocument } from '../utils/mei';
import { StateService } from '../state-service.service';
import * as Tools from '../tools';

@Component({
  selector: 'app-select-document',
  templateUrl: './select-document.component.html',
  styleUrls: ['./select-document.component.css']
})
export class SelectDocumentComponent implements OnInit {

  type: string = 'gallica';
  identifier: string = '12148/btv1b8454675g';
  file: File = null;

  invalid = false;

  selectionForm = new FormGroup({
    source: new FormControl('gallica', Validators.required),
    resourceURL: new FormControl('', [Validators.required, RxwebValidators.url()])
  });

  loadMEIForm = new FormGroup({
    fileInput: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private stateService: StateService) { }

  ngOnInit() {
  }

  submit() {
    console.debug("Submit");
    let source = this.selectionForm.controls['source'].value;
    let resourceURL = this.selectionForm.controls['resourceURL'].value;
    this.invalid = false;
    let identifier: string;
    switch (source) {
      case 'gallica':
        console.debug("gallica");
        if (Tools.gallicaRegexp.test(resourceURL)) {
          console.debug("true");
          identifier = resourceURL.match(Tools.gallicaRegexp)[1];
        }
        else {
          console.debug("false");
          this.invalid = true;
          return;
        }
        break;
      case 'ecodices':
        if (Tools.ecodicesRegexp.test(resourceURL)) {
          console.debug("Regular ecodices");
          let matches = resourceURL.match(Tools.ecodicesRegexp);
          identifier = matches[1] + '-' + matches[2];
        }
        else if (Tools.ecodicesIIIFRegexp.test(resourceURL)) {
          console.debug("IIIF ecodices");
          identifier = resourceURL.match(Tools.ecodicesIIIFRegexp)[1];
        }
        else {
          this.invalid = true;
          return;
        }
        break;
      case 'iiif':
        console.debug('iiif case')
        if (Tools.genericIIIFRegexp.test(resourceURL)) {
          console.debug("generic iiif");
          identifier = encodeURIComponent(resourceURL);
        }
        break;
      default:
        console.debug(source);
        this.invalid = true;
        return;
    }
    console.debug(identifier);
    this.router.navigate(['/input', source, encodeURIComponent(identifier)]);
  }

  meiSubmit() {
    console.debug("MEI Submit");
    console.debug(this.file);
    if (this.file === null) { return; }
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let rawText = reader.result as string;
      let parser = new DOMParser();
      let doc = parser.parseFromString(rawText, "application/xml");
      let mei = MEIDocument.fromXML(doc)
      console.debug(mei);

      // Try to determine IIIF
      let iiif = mei.metadata.sourceIRI;
      let source: string, identifier: string;
      if (Tools.gallicaIIIFRegexp.test(iiif)) {
        source = "gallica";
        identifier = iiif.match(Tools.gallicaIIIFRegexp)[1];
      }
      else if (Tools.ecodicesIIIFRegexp.test(iiif)) {
        source = "ecodices";
        identifier = iiif.match(Tools.ecodicesIIIFRegexp)[1];
      }
      else if (Tools.genericIIIFRegexp.test(iiif)) {
        source = "iiif";
        identifier = encodeURIComponent(iiif);
      }
      else {
        window.alert("Sorry! This seems to be a valid file, but this IIIF manifest cannot be loaded.");
        return;
      }
      this.stateService.mei = mei;
      this.router.navigate(['/input', source, encodeURIComponent(identifier)]);
    });
    reader.readAsText(this.file);
  }

  onFileChange(evt) {
    this.file = evt.target['files'][0];
  }

  get encodedIdSample(): string {
    return encodeURIComponent(this.identifier);
  }

}
