import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HNPService } from '../../hnp.service';
import { StateService } from '../../state-service.service';

@Component({
  selector: 'app-score-verovio-view',
  templateUrl: './score-verovio-view.component.html',
  styleUrls: ['./score-verovio-view.component.css']
})
export class ScoreVerovioViewComponent implements OnInit {

  @ViewChild('verovio') container: ElementRef;

  constructor(
    private verovioService: HNPService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    // this.container.nativeElement.innerHTML = '';
    // const svg = this.verovioService.meiToSVG(this.stateService.mei);
    // console.debug('svg');
    // console.debug(svg);
    // this.container.nativeElement.appendChild(svg);
  }

}
