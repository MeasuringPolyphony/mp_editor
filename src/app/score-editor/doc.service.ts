import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  _partsSubject: Subject<XMLDocument>;
  _scoreSubject: Subject<XMLDocument>;
  _parts: XMLDocument;
  _score: XMLDocument;

  constructor() {
    this._parts = null;
    this._score = null;
    this._partsSubject = new Subject<XMLDocument>();
    this._scoreSubject = new Subject<XMLDocument>();
  }

  get parts(): XMLDocument {
    return this._parts;
  }

  set parts(doc: XMLDocument) {
    this._parts = doc;
    this._partsSubject.next(this._parts);
  }

  get score(): XMLDocument {
    return this._score;
  }

  set score(doc: XMLDocument) {
    this._score = doc;
    this._scoreSubject.next(this._score);
  }
}
