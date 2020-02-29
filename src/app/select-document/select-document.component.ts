import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-document',
  templateUrl: './select-document.component.html',
  styleUrls: ['./select-document.component.css']
})
export class SelectDocumentComponent implements OnInit {

  type: string = 'gallica';
  identifier: string = '12148/btv1b8454675g';

  constructor() { }

  ngOnInit() {
  }

  get encodedId(): string {
    return encodeURIComponent(this.identifier);
  }

}
