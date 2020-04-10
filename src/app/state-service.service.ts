import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private meiDoc: XMLDocument;
  public editorialMode: boolean;

  constructor() {
    this.meiDoc = null;
    this.editorialMode = false;
  }

  get mei(): XMLDocument {
    return this.meiDoc;
  }

  set mei(document: XMLDocument) {
    this.meiDoc = document;
  }
}
