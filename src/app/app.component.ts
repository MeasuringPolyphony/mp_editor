import { Component } from '@angular/core';
import { IRI } from './definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iiifManifest: IRI = 'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8454675g/manifest.json';
  title = 'Measuring Polyphony Editor';
  documentTitle = "Example Manuscript";
  composer = "Example Composer";
}
