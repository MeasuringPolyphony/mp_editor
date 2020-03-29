import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { v4 as uuid } from 'uuid';

import * as ScoringUp from 'scoring-up';
import { HNPService } from '../../hnp.service';
import { StateService } from '../../state-service.service';

import { scoreDoc } from '../definitions';

const pnameOrder = [ 'c', 'd', 'e', 'f', 'g', 'a', 'b'];

function recurseXmlId(element: Element) {
  if (element.hasAttribute('xml:id')) {
    element.setAttribute('xml:id', 'm-' + uuid());
  }
  for (let i = 0; i < element.children.length; i++) {
    recurseXmlId(element.children[i]);
  }
}

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
      try {
        document.getElementById(this.selectedId).classList.add("selected");
        document.getElementById(this.selectedId).setAttribute("fill", "#d00");
      }
      catch (_e) {
        console.debug(_e);
        this.selectedId = null;
      }

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
        case 'ArrowUp':
          if (target.hasAttribute('pname')) {
            let currentPname = target.getAttribute('pname');
            let idx = pnameOrder.indexOf(currentPname);
            if (idx + 1 < pnameOrder.length) {
              target.setAttribute('pname', pnameOrder[idx + 1]);
            }
            else {
              target.setAttribute('pname', pnameOrder[0]);
              target.setAttribute('oct', (parseInt(target.getAttribute('oct')) + 1).toString());
            }
          }
          break;
        case 'ArrowDown':
          if (target.hasAttribute('pname')) {
            let currentPname = target.getAttribute('pname');
            let idx = pnameOrder.indexOf(currentPname);
            if (idx - 1 > 0) {
              target.setAttribute('pname', pnameOrder[idx - 1]);
            }
            else {
              target.setAttribute('pname', pnameOrder[pnameOrder.length - 1]);
              target.setAttribute('oct', (parseInt(target.getAttribute('oct')) - 1).toString());
            }
          }
          break;
        case '1': target.setAttribute('dur', 'semibrevis'); break;
        case '2': target.setAttribute('dur', 'minima'); break;
        case '4': target.setAttribute('dur', 'semiminima'); break;
        case '8': target.setAttribute('dur', 'fusa'); break;
        case '6': target.setAttribute('dur', 'semifusa'); break;
        case '7': target.setAttribute('dur', 'maxima'); break;
        case '9': target.setAttribute('dur', 'longa'); break;
        case '0': target.setAttribute('dur', 'brevis'); break

        case '#': target.setAttribute('accid', 's'); break;
        case '-': target.setAttribute('accid', 'f'); break;
        case 'n': target.setAttribute('accid', 'n'); break;
        case 'N': target.removeAttribute('accid'); break;

        case 'I':
          const clone = target.cloneNode(true) as Element;
          recurseXmlId(clone);
          if (target.nextElementSibling && target.nextElementSibling.tagName === 'dot') {
            const cloneDot = target.nextElementSibling.cloneNode(true) as Element;
            recurseXmlId(cloneDot);
            target.nextElementSibling.insertAdjacentElement('afterend', clone);
            clone.insertAdjacentElement('afterend', cloneDot);
          }
          else {
            target.insertAdjacentElement('beforebegin', clone);
          }
          break;
        case 'Backspace':
          if (target.nextElementSibling && target.nextElementSibling.tagName === 'dot') {
            target.nextElementSibling.remove();
          }
          target.remove();

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
      alert("Error in scoring up tool! " + e);
      output = null;
    }
    finally {
      return output;
    }
  }
}
