/**
 * Based on musiclist.js by Craig Sapp
 * From: https://github.com/craigsapp/mensural-input/blob/master/scripts/musiclist.js
 */

import { v4 } from "uuid";
import { Mensuration } from './definitions';

function parseRhythm(rhythm: string): number {
  let val: number;
  switch (rhythm) {
    case "semibrevis": val = 1; break;
    case "brevis": val = 0; break;
    case "maxima": val = 7; break;
    case "longa": val = 9; break;
    case "minima": val = 2; break;
    case "semiminima": val = 4; break;
    case "fusa": val = 8; break;
    case "semifusa": val = 6; break;
  }
  return val;
}

export enum PitchClass {
  C = 0,
  D = 1,
  E = 2,
  F = 3,
  G = 4,
  A = 5,
  B = 6,
}

export enum Accid {
  NONE,
  SHARP = "#",
  FLAT = "-",
  NATURAL = "n",
}

export enum LigStatus {
  NONE,
  START,
  END,
}

export enum PlicaStatus {
  NONE,
  UP,
  DOWN,
}

export enum ColorStatus {
  NONE,
  COLORED,
}

export interface MusicItem {
  m_type: string;
  m_id: string;
  m_line: number;
  getHumdrumLine(options: object): string;
}

export class ClefItem implements MusicItem {
  readonly m_type = "clef";
  m_line = -1;
  m_id: string;
  m_pname: PitchClass;
  m_clefLine: number;
  m_keySig: Map<string,string>;

  constructor () {
    this.m_pname = PitchClass.C;
    this.m_clefLine = 3;
    this.m_keySig = new Map();
  }

  raisePitch () {
    this.m_clefLine += 1;
    if (this.m_clefLine > 5) {
      this.m_clefLine = 5;
    }
  }

  lowerPitch () {
    this.m_clefLine -= 1;
    if (this.m_clefLine < 1) {
      this.m_clefLine = 1;
    }
  }

  getHumdrumLine(): string {
    let output = "*clef";
    switch (this.m_pname) {
      case PitchClass.G: output += "G"; break;
      case PitchClass.F: output += "F"; break;
      default: output += "C"; break;
    }
    output += this.m_clefLine;
    output += "\t";
    output += "*";
    if (this.m_keySig.size > 0) {
      output += "\n";
      output += "*k[";
      for (let [pitch, accid] of this.m_keySig) {
        output += pitch;
        output += accid;
      }
      output += "]\t*";
    }
    return output;
  }

  static parseXML(element: Element): ClefItem {
    let clef = new ClefItem();
    if (element.hasAttribute("xml:id")) {
      clef.m_id = element.getAttribute("xml:id");
    }
    switch (element.getAttribute("shape")) {
      case "F": clef.m_pname = PitchClass.F; break;
      case "G": clef.m_pname = PitchClass.G; break;
      case "C":
      default: break;
    }
    try {
      let line: number = parseInt(element.getAttribute("line"));
      clef.m_clefLine = line;
    } catch (e) {}
    return clef;
  }
}

export class RestItem implements MusicItem {
  readonly m_type = "rest";
  m_line = -1;
  m_id: string;
  m_rhythm: number;
  m_dot: boolean;

  constructor (rhythm?: number) {
    this.m_dot = false;
    if (rhythm !== undefined) {
      this.m_rhythm = rhythm;
    } else {
      this.m_rhythm = 1;
    }
  }

  getHumdrumLine (options: object): string {
    let output = "";
    switch (this.m_rhythm) {
      case 7: output += "X"; break;
			case 9: output += "L"; break;
			case 0: output += "S"; break;
			case 1: output += "s"; break;
			case 2: output += "M"; break;
			case 4: output += "m"; break;
			case 6: output += "u"; break;
			case 8: output += "U"; break;
    }
    if (this.m_dot) {
      output += ":";
    }
    output += "r";
    if (options["mark"]) {
      output += "@";
    }
    output += "\t.";
    return output;
  }

  static parseXML(element: Element): RestItem {
    let rest = new RestItem();
    if (element.hasAttribute("xml:id")) {
      rest.m_id = element.getAttribute("xml:id");
    }
    if (element.hasAttribute("dur")) {
      rest.m_rhythm = parseRhythm(element.getAttribute("dur"));
    }
    return rest;
  }
}

export class MensurItem implements MusicItem {
  readonly m_type = "mensur";
  m_line = -1;
  m_modus: Mensuration;
  m_tempus: Mensuration;
  m_prolatio: Mensuration;
  m_id: string;

  constructor() {
    this.m_modus = Mensuration.NA;
    this.m_tempus = Mensuration.NA;
    this.m_prolatio = Mensuration.NA;
  }

  getHumdrumLine(): string {
    if (this.m_tempus === Mensuration.Two && this.m_prolatio === Mensuration.Two)
      return "*met(C)\t*";
    if (this.m_tempus === Mensuration.Three && this.m_prolatio === Mensuration.Two)
      return "*met(O)\t*";
    if (this.m_tempus === Mensuration.Two && this.m_prolatio === Mensuration.Three)
      return "*met(C.)\t*";
    if (this.m_tempus === Mensuration.Three && this.m_prolatio === Mensuration.Three)
      return "*met(O.)\t*";
    else
      return "*met(C)\t*";
  }

  static parseXML(element: Element): MensurItem {
    let mensur = new MensurItem();
    if (element.hasAttribute("xml:id")) {
      mensur.m_id = element.getAttribute("xml:id");
    }
    if (element.hasAttribute("modusminor")) {
      mensur.m_modus = element.getAttribute("modusminor") as Mensuration;
    }
    if (element.hasAttribute("tempus")) {
      mensur.m_tempus = element.getAttribute("tempus") as Mensuration;
    }
    if (element.hasAttribute("prolatio")) {
      mensur.m_prolatio = element.getAttribute("prolatio") as Mensuration;
    }
    return mensur;
  }
}

export class NoteItem implements MusicItem {
  readonly m_type = "note";
  m_line = -1;
  m_pname: PitchClass;
  m_accid: Accid;
  m_oct: number;
  m_rhythm: number;
  m_dot: boolean;
  m_text: string;
  m_lig: LigStatus;
  m_id: string;
  m_plica: PlicaStatus;
  m_color: ColorStatus;

  constructor() {
    this.m_pname = PitchClass.C;
    this.m_accid = Accid.NONE;
    this.m_oct = 4;
    this.m_rhythm = 1;
    this.m_dot = false;
    this.m_text = "";
    this.m_lig = LigStatus.NONE;
    this.m_plica = PlicaStatus.NONE;
    this.m_color = ColorStatus.NONE;
  }

  raisePitch (amount?: number) {
    if (amount === undefined) {
      amount = 1;
    }
    if (amount >= 7) {
      this.m_oct += amount % 7;
      amount -= 7 * (amount % 7);
    }

    this.m_pname += amount;
    if (this.m_pname > 6) {
      this.m_pname -= 7;
      this.m_oct += 1;
    }
  }

  lowerPitch (amount?: number) {
    if (amount === undefined) {
      amount = 1;
    }
    if (amount >= 7) {
      this.m_oct -= amount % 7;
      amount -= 7 * (amount % 7);
    }
    this.m_pname -= amount;
    if (this.m_pname < 0) {
      this.m_pname += 7;
      this.m_oct -= 1;
    }
  }

  getHumdrumLine(options: object): string {
    let output = "";
    if (this.m_lig === LigStatus.START) {
      output += "[";
    }
    switch (this.m_rhythm) {
      case 7: output += "X"; break;
  		case 9: output += "L"; break;
  		case 0: output += "S"; break;
  		case 1: output += "s"; break;
  		case 2: output += "M"; break;
  		case 4: output += "m"; break;
  		case 6: output += "u"; break;
  		case 8: output += "U"; break;
    }
    if (this.m_dot) {
      output += ":";
    }

    let pname: string;
    switch(this.m_pname) {
      case PitchClass.C: pname = "c"; break;
      case PitchClass.D: pname = "d"; break;
      case PitchClass.E: pname = "e"; break;
      case PitchClass.F: pname = "f"; break;
      case PitchClass.G: pname = "g"; break;
      case PitchClass.A: pname = "a"; break;
      case PitchClass.B: pname = "b"; break;
    }
    if (this.m_oct >= 4) {
      for (let i = 4; i <= this.m_oct; i++) {
        output += pname;
      }
    } else {
      pname = pname.toUpperCase();
      for (let i = 3; i >= this.m_oct; i--) {
        output += pname;
      }
    }

    if (this.m_plica === PlicaStatus.DOWN) {
      output += "k";
    } else if (this.m_plica === PlicaStatus.UP) {
      output += "K";
    }

    if (this.m_color === ColorStatus.COLORED) {
      output += "~";
    }

    if (this.m_color === ColorStatus.COLORED) {
      output += "~";
    }

    if (this.m_accid !== Accid.NONE) {
      output += this.m_accid.toString();
    }

    if (this.m_lig === LigStatus.END) {
      output += "]";
    }

    if (options["mark"]) {
      output += "@";
    }

    output += "\t";
    if (this.m_text) {
      if (options["hyphen"]) {
        output += "-";
      }
      output += this.m_text;
    } else {
      output += ".";
    }

    return output;
  }

  static parseXML(element: Element): NoteItem {
    let note = new NoteItem();
    // Set info from element attributes
    if (element.hasAttribute("xml:id")) {
      note.m_id = element.getAttribute("xml:id");
    }
    if (element.hasAttribute("oct")) {
      note.m_oct = parseInt(element.getAttribute("oct"));
    }
    if (element.hasAttribute("dur")) {
      note.m_rhythm = parseRhythm(element.getAttribute("dur"));
    }
    if (element.hasAttribute("pname")) {
      note.m_pname = PitchClass[element.getAttribute("pname").toUpperCase()];
    }

    // Check children for a plica
    if (element.querySelector("plica")) {
      const plica = element.querySelector("plica");
      if (element.hasAttribute("dir") && element.getAttribute("dir") == "up") {
        note.m_plica = PlicaStatus.UP;
      } else {
        note.m_plica = PlicaStatus.DOWN;
      }
    }

    // Check next sibling for dot
    if (element.nextElementSibling && element.nextElementSibling.tagName === "dot") {
      note.m_dot = true;
    }

    // Check children for accid, text
    if (element.querySelector("accid")) {
      const accid = element.querySelector("accid");
      switch (accid.getAttribute("accid")) {
        case "s": note.m_accid = Accid.SHARP; break;
        case "f": note.m_accid = Accid.FLAT; break;
        case "n": note.m_accid = Accid.NATURAL; break;
        default: break;
      }
    }
    if (element.querySelector("syl")) {
      const syl = element.querySelector("syl");
      note.m_text = syl.textContent;
    }

    // Check parent for ligature
    if (element.parentElement.tagName === "ligature") {
      if (element === element.parentElement.firstElementChild) {
        note.m_lig = LigStatus.START;
      } else if (element === element.parentElement.lastElementChild) {
        note.m_lig = LigStatus.END;
      }
    }

    return note;
  }
}

export class MusicList {
  m_list: Array<MusicItem> = [];
  m_index = -1;
  m_rhythm = 1;
  m_notationCallback = null;

  addClef (dpc: PitchClass) {
    let item = new ClefItem();
    if (dpc === PitchClass.G) {
      item.m_pname = PitchClass.G;
      item.m_clefLine = 2;
    } else if (dpc === PitchClass.F) {
      item.m_pname = PitchClass.F;
      item.m_clefLine = 4;
    } else {
      item.m_pname = PitchClass.C;
      item.m_clefLine = 3;
    }
    this.m_list.push(item);
    this.runNotationCallback();
  }

  addRest () {
    if (this.m_list.length === 0) return;
    this.m_list.push(new RestItem(this.m_rhythm));
    this.runNotationCallback();
  }

  addMensur () {
    this.m_list.push(new MensurItem());
    this.runNotationCallback();
  }

  addPitchFar (dpc: PitchClass) {
    if (this.m_list.length === 0) {
      this.addClef(dpc);
      return;
    }
    dpc = (dpc + 7000) % 7;
    let ln = this.getLastNote();
    if (!ln) {
      ln = new NoteItem();
      ln.m_pname = PitchClass.C;
      ln.m_oct = 4;
      ln.m_rhythm = 1;
    }
    let oct = ln.m_oct;
    let pitch = ln.m_pname + 7 * oct;
    let candidate = [];
    candidate[0] = (oct - 1) * 7 + dpc;
    candidate[1] = (oct + 0) * 7 + dpc;
    candidate[2] = (oct + 1) * 7 + dpc;
    let best = -1;
    for (let i = 0; i < candidate.length; i++) {
      if ((Math.abs(pitch - candidate[i]) > 3) &&
          (Math.abs(pitch - candidate[i]) < 8)) {
        best = i;
        break;
      }
    }
    let newnote = new NoteItem();
    newnote.m_rhythm = this.m_rhythm;
    newnote.m_pname = dpc;
    switch (best) {
      case 0: newnote.m_oct = oct - 1; break;
      case 1: newnote.m_oct = oct;     break;
      case 2: newnote.m_oct = oct + 1; break;
    }
    this.m_list.push(newnote);
    this.runNotationCallback();
  }

  addPitchNear (dpc: PitchClass) {
    if (this.m_list.length == 0) {
  		this.addClef(dpc);
  		return;
  	}

  	dpc = (dpc + 7000) % 7;
  	let ln = this.getLastNote();
    if (!ln) {
      ln = new NoteItem();
      ln.m_pname = 0;
      ln.m_oct = 4;
      ln.m_rhythm = 1;
    }
    let oct = ln.m_oct;
    let pitch = ln.m_pname + 7 * oct;
    let candidate = [];
    candidate[0] = (oct - 1) * 7 + dpc;
  	candidate[1] = (oct + 0) * 7 + dpc;
  	candidate[2] = (oct + 1) * 7 + dpc;
    let best = -1;
    for (let i = 0; i < candidate.length; i++) {
      if (Math.abs(pitch - candidate[i]) < 4) {
        best = i;
        break;
      }
    }
    let newnote = new NoteItem();
    newnote.m_rhythm = this.m_rhythm;
    newnote.m_pname = dpc;
    switch (best) {
      case 0: newnote.m_oct = oct - 1; break;
      case 1: newnote.m_oct = oct;     break;
      case 2: newnote.m_oct = oct + 1; break;
    }
    this.m_list.push(newnote);
    this.runNotationCallback();
  }

  getLastNote(): NoteItem | null {
    for (let i = this.m_list.length - 1; i >= 0; i--) {
      if (this.m_list[i].m_type === "note") {
        return this.m_list[i] as NoteItem;
      }
    }
    return null;
  }

  removeLastItem() {
    this.m_list.pop();
    this.runNotationCallback();
  }

  hasOpenLigature(): boolean {
    let open = false;
    for (let item of this.m_list) {
      if (item.m_type === "note") {
        let note = item as NoteItem;
        if (note.m_lig === LigStatus.START) {
          open = true;
        } else if (note.m_lig === LigStatus.END) {
          open = false;
        }
      }
    }
    return open;
  }

  selectBackward() {
    if (this.m_index > 0) {
      this.m_index--;
    } else if (this.m_index === 0) {
      this.m_index = -1;
    } else if (this.m_index < 0) {
      this.m_index = this.m_list.length - 1;
    }
    this.runNotationCallback();
  }

  selectForward() {
    if (this.m_index < this.m_list.length - 1) {
  		this.m_index++;
  	} else if (this.m_index == this.m_list.length - 1) {
  		this.m_index = -1;
  	} else if (this.m_index < 0) {
  		this.m_index = 0;
  	}
  	this.runNotationCallback();
  }

  runNotationCallback() {
    if (this.m_notationCallback) {
      let score = this.getHumdrumScore({});
      this.m_notationCallback(score);
    }
  }

  addTextToCurrentItem (text: string): boolean {
    if (this.m_list.length === 0) {
      return false;
    }
    let index = this.m_index;
    if (index < 0) {
      index = this.m_list.length - 1;
    }
    if (index < 0) {
      return false;
    }
    let item = this.m_list[index];
    if (item.m_type === "note") {
      (item as NoteItem).m_text += text;
      if (text === "-") {
        this.m_index += 1;
        if (this.m_index >= this.m_list.length) {
          this.m_index = -1;
        }
      }
    }
    this.runNotationCallback();
    return true;
  }

  goToEndOfList() {
    this.m_index = -1;
    this.runNotationCallback();
  }

  lowerPitch (amount: number) {
    if (this.m_list.length === 0) return;
    let index = this.m_index;
    if (index < 0) index = this.m_list.length - 1;
    if (this.m_list[index].m_type === "note") {
      (this.m_list[index] as NoteItem).lowerPitch(amount);
    }
    else if (this.m_list[index].m_type === "clef") {
      (this.m_list[index] as ClefItem).lowerPitch();
    }
    this.runNotationCallback();
  }

  raisePitch (amount: number) {
    if (this.m_list.length === 0) return;
    let index = this.m_index;
    if (index < 0) index = this.m_list.length - 1;
    if (this.m_list[index].m_type === "note") {
      (this.m_list[index] as NoteItem).raisePitch(amount);
    }
    else if (this.m_list[index].m_type === "clef") {
      (this.m_list[index] as ClefItem).raisePitch();
    }
    this.runNotationCallback();
  }

  deleteCharacterOnCurrentItem () {
    let index = this.m_index;
    if (index < 0) index = this.m_list.length - 1;
    try {
      let item = this.m_list[index] as NoteItem;
      if (item.m_text.length === 0) return;
      item.m_text = item.m_text.substring(0, item.m_text.length - 1);
      this.runNotationCallback();
    }
    catch (e) {}
  }

  clearTextOnCurrentItem () {
    let index = this.m_index;
    if (index < 0 || index >= this.m_list.length) {
      return;
    }
    let item = this.m_list[index];
    if (!item) return;
    try {
      let note = item as NoteItem;
      note.m_text = "";
      this.runNotationCallback();
    } catch (e) {}
  }

  clear () {
    this.m_list = [];
    this.m_index = -1;
    this.runNotationCallback();
  }

  getHumdrumScore (opts?: object) {
    if (!opts) {
      opts = {};
    }
    let output = [];
    output.push("**mens\t**text");
    if (opts['white'] !== true) {
  	   output.push("*black\t*");
    }
  	var i: number;
  	var lines: string;
  	var noteCounter = 0;
  	var restCounter = 0;
  	var hyphen = false;
  	var options = opts;
  	for (i=0; i<this.m_list.length; i++) {
  		var item = this.m_list[i];
  		if (item.m_type == "note") {
  			noteCounter += 1;
  		} else if (item.m_type == "rest") {
  			restCounter += 1;
  		}
  		options["mark"] = false;
  		options["hyphen"] = hyphen;
  		if (i == this.m_index) {
  			options["mark"] = true;
  		}
  		if (options["export"]) {
  			options["mark"] = false;
  		}
      if (item.m_id === undefined) {
        item.m_id = 'm-' + v4();
      }
  		lines = item.getHumdrumLine(options);
  		if (item.m_type === "note") {
  			if ((item as NoteItem).m_text.match(/-$/)) {
  				hyphen = true;
  			} else {
  				hyphen = false;
  			}
  	  	}
  		this.m_list[i].m_line = output.length + 1;
  		output.push(lines);
  	}
  	if (noteCounter + restCounter == 0) {
  		// need to add a dummy rest to force display of clef
  		output.push("4ryy\t.");
  	}

  	output.push("=-\t=-");
  	output.push("*-\t*-");
  	if (!options["export"]) {
  		output.push("!!!RDF**kern: @ = marked note");
      // output.push("!!!RDF**kern: & = marked note, color=green")
  		//output.push("!!!RDF**kern: i = marked note, color=blue");
  		//output.push("!!!RDF**mens: @ = marked note");
  	}

  	var output2 = "";
  	for (i=0; i<output.length; i++) {
  		output2 += output[i] + "\n";
  	}
  	return output2;
  }

  selectItemByLine (lineNumber: number) {
    for (let i = 0; i < this.m_list.length; i++) {
      if (this.m_list[i].m_line === lineNumber) {
        this.m_index = i;
        this.runNotationCallback();
        return;
      }
    }
  }

  processKeySig (pitch: string, accid: string): boolean {
    if (this.m_list.length > 0) {
      let first = this.m_list[0] as ClefItem;
      if (first.m_type !== "clef") {
        console.debug("First was not a clef!!!");
        return false;
      }
      if (first.m_keySig.has(pitch)) {
        if (first.m_keySig.get(pitch) === accid) {
          first.m_keySig.delete(pitch);
        } else {
          first.m_keySig.set(pitch, accid);
        }
      }
      else {
        first.m_keySig.set(pitch, accid);
      }
      this.runNotationCallback();
      return true;
    }
  }
}
