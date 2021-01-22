import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { v4 as uuid } from 'uuid';
import * as vkbeautify from 'vkbeautify';

import * as ScoringUp from 'scoring-up';
import { vrvToolkit } from '../../utils/verovio';
import { StateService, Barline } from '../../state-service.service';
import { SelectedStaffService } from '../selected-staff.service';
import { DocService } from '../doc.service';
import { NAMESPACE } from '../../utils/mei';

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
  corrToSicMap: Map<string, string> = new Map();
  barOptions = Object.entries(Barline);

  constructor(
    public stateService: StateService,
    private staffService: SelectedStaffService,
    private doc: DocService
  ) {  }

  ngOnInit() {
    this.doc.parts = this.stateService.mei.generateXML();
    this.doc._scoreSubject.subscribe((doc) => {
      this.container.nativeElement.innerHTML = '';
      const svg = vrvToolkit.meiToSVG(doc);
      this.container.nativeElement.appendChild(svg);
      this.setSelected();
    });
  }

  setEditorialMode() {
    if (confirm("Edits in editorial mode reflect cases where there is a problem with the manuscript. You cannot exit editorial mode and changes from editorial mode cannot be loaded back into the editor from MEI. A parts file that can be loaded will be downloaded before entering. Do you want to continue?")) {
      this.stateService.editorialMode = true;
      // Download parts file
      if (this.stateService.mei != null) {
        const serializer = new XMLSerializer();
        const temp = serializer.serializeToString(this.doc.parts);
        const content = vkbeautify.xml(
          "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
          "<?xml-model href=\"https://music-encoding.org/schema/dev/mei-Mensural.rng\"" +
          " type=\"application/xml\" schematypens=\"http://relaxng.org/ns/structure/1.0\"?>\n" +
          "<?xml-model href=\"https://music-encoding.org/schema/dev/mei-Mensural.rng\"" +
          " type=\"application/xml\" schematypens=\"http://purl.oclc.org/dsdl/schematron\"?>\n" +
          temp
        );
        const blob = new Blob([content], {type: 'application/xml'});
        const target = document.createElement("a");
        target.setAttribute("href", URL.createObjectURL(blob));
        const name = (this.stateService.mei.metadata.shortTitle.length > 0 ? this.stateService.mei.metadata.shortTitle : "Untitled") + "_MENSURAL_PARTS.xml";
        target.setAttribute("download", name);
        document.body.appendChild(target);
        target.click();
        target.remove();
      }
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
        const resolver = this.doc.parts.createNSResolver(this.doc.parts.ownerDocument == null ? this.doc.parts.documentElement : (this.doc.parts.ownerDocument as Document).documentElement);
        const meiRes = () => { return 'http://www.music-encoding.org/ns/mei'; };
        const ref = this.doc.parts.evaluate("//*[@xml:id='" + partsId + "']", this.doc.parts, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let result = this.doc.parts.evaluate("./preceding::mei:pb", ref, meiRes, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const pb = result.snapshotItem(result.snapshotLength - 1) as Element;
        result = this.doc.parts.evaluate("./preceding::mei:sb", ref, meiRes, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const sb = result.snapshotItem(result.snapshotLength - 1) as Element;
        // Get corresponding zones (strip away fragment symbol)
        const pbFacsId = pb.getAttribute("facs")[0] === "#" ?
          pb.getAttribute("facs").substring(1) :
          pb.getAttribute("facs");
        const sbFacsId = sb.getAttribute("facs")[0] === "#" ?
          sb.getAttribute("facs").substring(1) :
          sb.getAttribute("facs");
        console.debug(sbFacsId);

        // The following SHOULD use XPath but I haven't been able to get it to work
        const pbGraphic = Array.from(
          this.doc.parts.getElementsByTagName("surface")
        ).filter(el => { return el.getAttribute("xml:id") === pbFacsId; }).pop()
          .querySelector("graphic");
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
        console.debug(iri);
        this.staffService.staffLocation = [iri, bbox];
      }
      catch (_e) {
        console.debug(_e);
      }
    }
  }

  ngAfterViewInit() {
    this.doc.score = this.runScoringUp(this.doc.parts);
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
      const resolver = this.doc.parts.createNSResolver(this.doc.parts.ownerDocument == null ? this.doc.parts.documentElement : (this.doc.parts.ownerDocument as Document).documentElement!);
      const result = this.doc.parts.evaluate("//*[@xml:id='" + this.selectedId + "']", this.doc.parts, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      if (!result.singleNodeValue) return;
      let target = result.singleNodeValue as Element;
      // Ensure corrected element in MEI
      if (this.stateService.editorialMode) {
        target = this.ensureCorrElement(target, this.doc.parts);
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
              let dot = this.doc.parts.createElementNS("http://www.music-encoding.org/ns/mei", "dot");
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
          case 'p':
          case 'P':
            let plica;
            if (target.querySelector('plica')) {
              plica = target.querySelector('plica');
            } else {
              plica = this.doc.parts.createElementNS(NAMESPACE, 'plica');
              target.appendChild(plica);
            }
            if (event.key === 'P') {
              if (plica.getAttribute('dir') === 'down') {
                plica.remove();
              } else {
                plica.setAttribute('dir', 'down');
              }
            } else {
              if (plica.getAttribute('dir') === 'up') {
                plica.remove();
              } else {
                plica.setAttribute('dir', 'up');
              }
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
      this.doc.score = this.runScoringUp(this.doc.parts);
    }
  }

  runScoringUp(meiDoc: XMLDocument): XMLDocument {
    let output = null;
    try {
      const staffDef = meiDoc.getElementsByTagName("staffDef")[0];
      let quasiDoc: XMLDocument;
      quasiDoc = ScoringUp.merge(meiDoc.cloneNode(true));
      switch (staffDef.getAttribute("notationtype")) {
        case "mensural.white":
          output = ScoringUp.ArsNova.lining_up(quasiDoc);
          break;
        case "mensural.black":
          switch(staffDef.getAttribute("notationsubtype")) {
            case "Ars_antiqua":
              output = ScoringUp.ArsAntiqua.lining_up(quasiDoc);
              break;
            case "Ars_nova":
              output = ScoringUp.ArsNova.lining_up(quasiDoc);
              break;
            default:
              console.warn("Only 'Ars antiqua' and 'Ars nova' are supported!");
          }
          break;
        default:
          console.warn("Only mensural notation types are supported.");
          break;
      }
      if (output !== null) {
        ScoringUp.PostProcessing.replace_ligatures_by_brackets(output);
        ScoringUp.PostProcessing.refine_score(
          output,
          this.stateService.scoreOptions.modernClefs,
          this.stateService.scoreOptions.barlines
        );
        // ScoringUp.PostProcessing.remove_num_and_numbase(output);
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

  onRefinementChange() {
    this.doc.score = this.runScoringUp(this.doc.parts);
  }
}
