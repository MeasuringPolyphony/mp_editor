import { Injectable } from '@angular/core';
import { MEIDocument } from './utils/mei';

export enum Barline {
  NONE="None",
  SEMIBREVE="semibrevis",
  BREVE="brevis",
  LONG="longa",
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private meiDoc: MEIDocument;
  public editorialMode: boolean;
  public scoreOptions: {
    barlines: Barline,
    modernClefs: boolean
  };

  constructor() {
    this.meiDoc = null;
    this.editorialMode = false;
    this.scoreOptions = {
      barlines: Barline.NONE,
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
