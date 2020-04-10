import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private meiDoc: XMLDocument;
  public editorialMode = false;

  constructor() {
    this.meiDoc = null;
  }

  get mei(): XMLDocument {
    return this.meiDoc;
  }

  set mei(document: XMLDocument) {
    this.meiDoc = document;
  }
}
