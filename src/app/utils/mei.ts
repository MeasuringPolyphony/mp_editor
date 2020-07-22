import { Part, Tenor } from './part';
import { IRI } from './definitions';


export const NAMESPACE = 'http://www.music-encoding.org/ns/mei';

export class MEIDocument {
  parts: Part[];
  metadata: Metadata;  // Should this be broken up better?
  notationType: string;
  notationSubtype: string;

  _meiDoc: Document;

  constructor (manuscriptIRI: IRI) {  // This is for creating a new document
    this.metadata = new Metadata();
    this.metadata.sourceIRI = manuscriptIRI;
    this.parts = [];
    this._createSkeletonMEI();
  }

  generateXML(): Document {
    this._createSkeletonMEI();
    let parts = this._meiDoc.querySelector('parts');
    for (let part of this.parts) {
      let partElement = part.generatePartXML();
      parts.appendChild(partElement);
    }
    return this._meiDoc;
  }

  _createSkeletonMEI() {
    this._meiDoc = document.implementation.createDocument(NAMESPACE, 'mei', null);
    let mei = this._meiDoc.documentElement;
    mei.setAttribute('meiversion', '4.0.1');
    // Create Header
    let head = this._generateHeader();
    // TODO Add more to header
    mei.appendChild(head);

    // Create music skeleton
    let music = this._meiDoc.createElementNS(NAMESPACE, 'music');
    let facsimile = this._meiDoc.createElementNS(NAMESPACE, 'facsimile');
    let body = this._meiDoc.createElementNS(NAMESPACE, 'body');
    let mdiv = this._meiDoc.createElementNS(NAMESPACE, 'mdiv');
    let parts = this._meiDoc.createElementNS(NAMESPACE, 'parts');
    mei.appendChild(music);
    music.appendChild(facsimile);
    music.appendChild(body);
    body.appendChild(mdiv);
    mdiv.appendChild(parts);
  }

  _generateHeader(): Element {
    let meiHead = this._meiDoc.createElementNS(NAMESPACE, "meiHead");
    let fileDesc = this._meiDoc.createElementNS(NAMESPACE, "fileDesc");
    meiHead.appendChild(fileDesc);
    let titleStmt = this._meiDoc.createElementNS(NAMESPACE, "titleStmt");
    fileDesc.appendChild(titleStmt);
    let title = this._meiDoc.createElementNS(NAMESPACE, "title");
    title.textContent = this.metadata.shortTitle;
    titleStmt.appendChild(title);
    let composer = this._meiDoc.createElementNS(NAMESPACE, "composer");
    composer.textContent = this.metadata.composerName;
    titleStmt.appendChild(composer);
    let respStmt = this._meiDoc.createElementNS(NAMESPACE, "respStmt");
    titleStmt.appendChild(respStmt);
    let persName = this._meiDoc.createElementNS(NAMESPACE, "persName");
    persName.textContent = this.metadata.encoderName;
    persName.setAttribute("role", "encoder");
    respStmt.appendChild(persName);
    let pubStmt = this._meiDoc.createElementNS(NAMESPACE, "pubStmt");
    fileDesc.appendChild(pubStmt);

    let sourceDesc = this._meiDoc.createElementNS(NAMESPACE, "sourceDesc");
    fileDesc.appendChild(sourceDesc);
    let source = this._meiDoc.createElementNS(NAMESPACE, "source");
    source.setAttribute("target", this.metadata.sourceIRI);
    sourceDesc.appendChild(source);

    return meiHead;
  }
}

class Metadata {
  shortTitle: string;
  sourceIRI: IRI;
  composerName: string;
  encoderName: string;
}
