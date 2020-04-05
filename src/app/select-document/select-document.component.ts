import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';

import * as Tools from '../tools';

@Component({
  selector: 'app-select-document',
  templateUrl: './select-document.component.html',
  styleUrls: ['./select-document.component.css']
})
export class SelectDocumentComponent implements OnInit {

  type: string = 'gallica';
  identifier: string = '12148/btv1b8454675g';

  invalid = false;

  selectionForm = new FormGroup({
    source: new FormControl('gallica', Validators.required),
    resourceURL: new FormControl('', [Validators.required, RxwebValidators.url()])
  });

  constructor(private router: Router) { }

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
      default:
        console.debug(source);
        this.invalid = true;
        return;
    }
    console.debug(identifier);
    this.router.navigate(['/input', source, encodeURIComponent(identifier)]);
  }

  get encodedIdSample(): string {
    return encodeURIComponent(this.identifier);
  }

}
