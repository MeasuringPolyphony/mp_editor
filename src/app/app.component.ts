import { Component } from '@angular/core';
import { vrvToolkit } from './utils/verovio';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    vrvToolkit.setup();
  }
}
