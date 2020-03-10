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
    const scoreDoc = this.runScoringUp(this.stateService.mei);
    const svg = this.verovioService.meiToSVG(
      scoreDoc
    );
    this.container.nativeElement.appendChild(svg);
  }

  runScoringUp(meiDoc: XMLDocument): XMLDocument {
    let output = null;
    try {
      const staffDef = meiDoc.getElementsByTagName("staffDef")[0];
      const quasiDoc = ScoringUp.merge(meiDoc);
      switch (staffDef.getAttribute("notationtype")) {
        case "mensural.white":
          console.warn("Mensural White is not currently supported!");
          break;
        case "mensural.black":
          switch(staffDef.getAttribute("notationsubtype")) {
            case "Ars antiqua":
              output = ScoringUp.ArsAntiqua.lining_up(quasiDoc);
              break;
            case "Ars nova":
              console.warn("Ars antiqua is currently not supported!");
              break;
            default:
              console.warn("Only 'Ars antiqua' and 'Ars nova' are supported!");
          }
          break;
        default:
          console.warn("Only mensural notation types are supported.");
          break;
      }
    }
    catch(e) {
      console.error(e);
      output = null;
    }
    finally {
      return output;
    }
  }

}
