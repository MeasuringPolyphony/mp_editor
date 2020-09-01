import { Injectable } from '@angular/core';
import { MEIDocument } from './utils/mei';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private meiDoc: MEIDocument;
  public editorialMode: boolean;
  public scoreOptions: {
    barlines: boolean,
    modernClefs: boolean
  };

  constructor() {
    this.meiDoc = null;
    this.editorialMode = false;
    this.scoreOptions = {
      barlines: false,
      modernClefs: false
    };
  }

  get mei(): MEIDocument {
    return this.meiDoc;
  }

  set mei(document: MEIDocument) {
    this.meiDoc = document;
  }
}
