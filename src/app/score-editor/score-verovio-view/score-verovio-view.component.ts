import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { v4 as uuid } from 'uuid';

import * as ScoringUp from 'scoring-up';
import { vrvToolkit } from '../../utils/verovio';
import { StateService } from '../../state-service.service';
import { SelectedStaffService } from '../selected-staff.service';

import { wrapper, scoreDoc } from '../definitions';

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
  quasiScore: XMLDocument = null;
  corrToSicMap: Map<string, string> = new Map();

  constructor(
    public stateService: StateService,
    private staffService: SelectedStaffService
  ) {
    wrapper.meiDoc = this.stateService.mei.generateXML();
  }

  ngOnInit() {
    scoreDoc.subscribe((doc) => {
      this.container.nativeElement.innerHTML = '';
      const svg = vrvToolkit.meiToSVG(doc);
      this.container.nativeElement.appendChild(svg);
      this.setSelected();
    })
  }

  setEditorialMode() {
    if (confirm("Edits in editorial mode reflect cases where there is a problem with the manuscript. You cannot exit editorial mode. Do you want to continue?")) {
      this.stateService.editorialMode = true;
    }
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
        return;
      }
      try {
        // Convert ID to sic ID if applicable
        let partsId = this.selectedId;
        if (this.corrToSicMap.has(partsId)) {
          partsId = this.corrToSicMap.get(partsId);
        }
        // Get nearest pb  and sb
        const resolver = wrapper.meiDoc.createNSResolver(wrapper.meiDoc.ownerDocument == null ? wrapper.meiDoc.documentElement : wrapper.meiDoc.ownerDocument.documentElement);
        const meiRes = () => { return 'http://www.music-encoding.org/ns/mei'; };
        const ref = wrapper.meiDoc.evaluate("//*[@xml:id='" + partsId + "']", wrapper.meiDoc, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let result = wrapper.meiDoc.evaluate("./preceding::mei:pb", ref, meiRes, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const pb = result.snapshotItem(result.snapshotLength - 1) as Element;
        result = wrapper.meiDoc.evaluate("./preceding::mei:sb", ref, meiRes, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const sb = result.snapshotItem(result.snapshotLength - 1) as Element;
        // Get corresponding zones (strip away fragment symbol)
        const pbFacsId = pb.getAttribute("facs")[0] === "#" ?
          pb.getAttribute("facs").substring(1) :
          pb.getAttribute("facs");
        const sbFacsId = sb.getAttribute("facs")[0] === "#" ?
          sb.getAttribute("facs").substring(1) :
          sb.getAttribute("facs");

        // The following SHOULD use XPath but I haven't been able to get it to work
        const pbGraphic = Array.from(
          wrapper.meiDoc.getElementsByTagName("graphic")
        ).filter(el => { return el.getAttribute("xml:id") === pbFacsId; }).pop();
        const sbZone = Array.from(
          pbGraphic.children
        ).filter(el => { return el.getAttribute("xml:id") === sbFacsId; }).pop()
        const iri = pbGraphic.getAttribute("target");
        const bbox = {
          ulx: sbZone.getAttribute("ulx"),
          uly: sbZone.getAttribute("uly"),
          lrx: sbZone.getAttribute("lrx"),
          lry: sbZone.getAttribute("lry")
        };
        this.staffService.staffLocation = [iri, bbox];
      }
      catch (_e) {
        console.debug(_e);
      }
    }
  }

  ngAfterViewInit() {
    scoreDoc.next(this.runScoringUp(wrapper.meiDoc));
  }

  handleClick(event: MouseEvent) {
    let target = event.target as Element;
    while (target) {
      if (target.nodeName === 'g') {
        if (target.classList.contains('note') || target.classList.contains('rest')) {
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
      let doc: XMLDocument;
      if (this.stateService.editorialMode) {
        if (this.quasiScore === null) {
          this.quasiScore = this.getQuasiScore(wrapper.meiDoc);
        }
        doc = this.quasiScore;
      }
      else {
        doc = wrapper.meiDoc;
      }
      const resolver = wrapper.meiDoc.createNSResolver(wrapper.meiDoc.ownerDocument == null ? wrapper.meiDoc.documentElement : wrapper.meiDoc.ownerDocument.documentElement);
      const result = wrapper.meiDoc.evaluate("//*[@xml:id='" + this.selectedId + "']", wrapper.meiDoc, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      if (!result.singleNodeValue) return;
      let target = result.singleNodeValue as Element;
      // Ensure corrected element in MEI
      if (this.stateService.editorialMode) {
        target = this.ensureCorrElement(target, wrapper.meiDoc);
      }
      if (target.tagName === "note") {
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
              let dot = wrapper.meiDoc.createElementNS("http://www.music-encoding.org/ns/mei", "dot");
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
          case '0': target.setAttribute('dur', 'brevis'); break;

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
      } else if (target.tagName === "rest") {
        switch (event.key) {
          case '1': target.setAttribute('dur', 'semibrevis'); break;
          case '2': target.setAttribute('dur', 'minima'); break;
          case '4': target.setAttribute('dur', 'semiminima'); break;
          case '8': target.setAttribute('dur', 'fusa'); break;
          case '6': target.setAttribute('dur', 'semifusa'); break;
          case '7': target.setAttribute('dur', 'maxima'); break;
          case '9': target.setAttribute('dur', 'longa'); break;
          case '0': target.setAttribute('dur', 'brevis'); break;

          case 'I':
            const clone = target.cloneNode(true) as Element;
            recurseXmlId(clone);
            target.insertAdjacentElement('beforebegin', clone);
            break;

          case 'Backspace':
            target.remove();
            break;

          default:
            return;
        }
      }

      event.preventDefault();
      scoreDoc.next(this.runScoringUp(wrapper.meiDoc));
    }
  }

  runScoringUp(meiDoc: XMLDocument): XMLDocument {
    let output = null;
    try {
      const staffDef = meiDoc.getElementsByTagName("staffDef")[0];
      let quasiDoc: XMLDocument;
      if (this.stateService.editorialMode) {
        quasiDoc = this.quasiScore.cloneNode(true) as XMLDocument;
      }
      else {
        quasiDoc = ScoringUp.merge(meiDoc.cloneNode(true));
      }
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

  getQuasiScore(partsMEI: XMLDocument): XMLDocument {
    let quasi = null;
    try {
      quasi = ScoringUp.merge(partsMEI.cloneNode(true));
    } catch (e) {
      console.error(e);
    }
    return quasi;
  }

  ensureCorrElement(target: Element, meiDoc: XMLDocument): Element {
    if (target.closest('corr')) {
      return target;
    }
    const choice = meiDoc.createElementNS('http://www.music-encoding.org/ns/mei', 'choice');
    const corr = meiDoc.createElementNS('http://www.music-encoding.org/ns/mei', 'corr');
    const sic = meiDoc.createElementNS('http://www.music-encoding.org/ns/mei', 'sic');
    const sibling = target.nextElementSibling;
    target.insertAdjacentElement('beforebegin', choice);
    choice.appendChild(corr);
    choice.appendChild(sic);
    sic.appendChild(target);
    const corrTarget = target.cloneNode(true) as Element;
    recurseXmlId(corrTarget);
    corr.appendChild(corrTarget);
    this.corrToSicMap.set(corrTarget.getAttribute("xml:id"), target.getAttribute("xml:id"));
    if (sibling !== null && sibling.tagName === 'dot') {
      sic.appendChild(sibling);
      const sibCorr = sibling.cloneNode(true) as Element;
      recurseXmlId(sibCorr);
      corr.appendChild(sibCorr);
    }
    return corrTarget;
  }
}
