import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { v4 as uuid } from 'uuid';

import * as ScoringUp from 'scoring-up';
import { HNPService } from '../../hnp.service';
import { StateService } from '../../state-service.service';

import { scoreDoc } from '../score-editor.module';

@Component({
  selector: 'app-score-verovio-view',
  templateUrl: './score-verovio-view.component.html',
  styleUrls: ['./score-verovio-view.component.css']
})
export class ScoreVerovioViewComponent implements OnInit, AfterViewInit {

  @ViewChild('verovio') container: ElementRef;

  selectedId: string = null;

  constructor(
    private verovioService: HNPService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    scoreDoc.subscribe((doc) => {
      this.container.nativeElement.innerHTML = '';
      const svg = this.verovioService.meiToSVG(doc);
      this.container.nativeElement.appendChild(svg);
      this.setSelected();
    })
  }

  setSelected() {
    if (this.selectedId !== null) {
      Array.from(document.getElementsByClassName("selected"))
        .forEach(elem => {
          elem.classList.remove("selected");
          elem.setAttribute("fill", "");
        });
      document.getElementById(this.selectedId).classList.add("selected");
      document.getElementById(this.selectedId).setAttribute("fill", "#d00");
    }
  }

  ngAfterViewInit() {
    scoreDoc.next(this.runScoringUp(this.stateService.mei));
  }

  handleClick(event: MouseEvent) {
    let target = event.target as Element;
    while (target) {
      if (target.nodeName === 'g') {
        if (target.classList.contains('note')) {
          this.selectedId = target.id;
          this.setSelected();
          break;
        }
      }
      target = target.parentElement;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (this.selectedId !== null) {
      const resolver = this.stateService.mei.createNSResolver(this.stateService.mei.ownerDocument == null ? this.stateService.mei.documentElement : this.stateService.mei.ownerDocument.documentElement);
      const result = this.stateService.mei.evaluate("//*[@xml:id='" + this.selectedId + "']", this.stateService.mei, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      if (!result.singleNodeValue) return;
      const target = result.singleNodeValue as Element;
      switch (event.key) {
        case '.':
          let sibling = target.nextElementSibling;
          if (sibling !== null && sibling.tagName === 'dot') {
            target.nextSibling.remove();
            if (target.hasAttribute("dots")) {
              target.setAttribute("dots", "0");
            }
          }
          else {
            let dot = this.stateService.mei.createElementNS("http://music-encoding.org/ns/mei", "dot");
            dot.setAttribute("xml:id", "m-" + uuid());
            target.insertAdjacentElement("afterend", dot);
          }
          break;
        default:
          return;
      }

      event.preventDefault();
      scoreDoc.next(this.runScoringUp(this.stateService.mei));
    }
  }

  runScoringUp(meiDoc: XMLDocument): XMLDocument {
    let output = null;
    try {
      const staffDef = meiDoc.getElementsByTagName("staffDef")[0];
      const quasiDoc = ScoringUp.merge(meiDoc.cloneNode(true));
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
