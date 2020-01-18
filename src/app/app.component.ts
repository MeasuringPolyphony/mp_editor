import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iiifManifest = 'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8454675g/manifest.json';
  title = 'Measuring Polyphony Editor';
  documentTitle = "Example Manuscript";
  composer = "Example Composer";
}
