import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import * as ScoringUp from 'scoring-up';
import { HNPService } from '../../hnp.service';
import { StateService } from '../../state-service.service';

@Component({
  selector: 'app-score-verovio-view',
  templateUrl: './score-verovio-view.component.html',
  styleUrls: ['./score-verovio-view.component.css']
})
export class ScoreVerovioViewComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit() {
    this.container.nativeElement.innerHTML = '';
    const scoreDoc = ScoringUp.ArsAntiqua.lining_up(
      ScoringUp.merge(this.stateService.mei)
    );
    const svg = this.verovioService.meiToSVG(
      scoreDoc
    );
    this.container.nativeElement.appendChild(svg);
  }

}
