/**************************************
musiclist.js by Craig Sapp
From: https://github.com/craigsapp/mensural-input/blob/master/scripts/musiclist.js
**************************************/

// vim: ts=3

export var C_PitchClass = 0;
export var D_PitchClass = 1;
export var E_PitchClass = 2;
export var F_PitchClass = 3;
export var G_PitchClass = 4;
export var A_PitchClass = 5;
export var B_PitchClass = 6;



//////////////////////////////
//
// MusicList -- Constructor for MusicList object.
//

function MusicList() {
	this.m_list = [];
	this.m_index = -1;
	this.m_rhythm = 1;
	this.m_notationCallback = null;
	return this;
}



//////////////////////////////
//
// MusicItem -- Constructor for MusicItem object.
//

function MusicItem() {
	this.m_type   = "note";
	this.m_pname  = C_PitchClass;
	this.m_accid  = 0;
	this.m_oct    = 4;
	this.m_rhythm = 1;
	this.m_dot    = false;
	this.m_line   = -1;
	this.m_text   = "";
	this.m_clefLine = 3;

	return this;
}



///////////////////////////////////////////////////////////////////////////
//
// MusicList functions --
//


//////////////////////////////
//
// MusicList::addClef --
//

MusicList.prototype.addClef = function (dpc) {
	var item = new MusicItem();
	item.m_type = "clef";
	if (dpc == G_PitchClass) {
		item.m_pname = G_PitchClass;
		item.m_clefLine = 2;
	} else if (dpc == F_PitchClass) {
		item.m_pname = F_PitchClass;
		item.m_clefLine = 4;
	} else {
		item.m_pname = C_PitchClass;
		item.m_clefLine = 3;
	}
	this.m_list.push(item);
	this.runNotationCallback();
}



//////////////////////////////
//
// MusicList::addRest -- Add rest to end of list.
//

MusicList.prototype.addRest = function () {
	if (this.m_list.length == 0) {
		return;
	}
	var newrest = new MusicItem();
	newrest.m_type = "rest";
	newrest.m_rhythm = this.m_rhythm;
	this.m_list.push(newrest);
	this.runNotationCallback();
}



//////////////////////////////
//
// MusicList::addPitchFar -- Add a pitch which is a fifth
//     to an oct away from the previous pitch.
//

MusicList.prototype.addPitchFar = function (dpc) {
	if (this.m_list.length == 0) {
		this.addClef(dpc);
		return;
	}

	dpc = parseInt(dpc);
	dpc = (dpc + 7000) % 7;
	var ln = this.getLastNote();
	if (!ln) {
		ln = {};
		ln.m_pname = 0;   // using middle C if no notes in list
		ln.m_oct = 4;
		ln.m_rhythm = 1;
	}
	var oct = ln.m_oct;
	var pitch = ln.m_pname + 7 * oct;
	var candidate = [];
	candidate[0] = (oct - 1) * 7 + dpc
	candidate[1] = (oct + 0) * 7 + dpc
	candidate[2] = (oct + 1) * 7 + dpc
	var i;
	var best = -1;
	for (i=0; i<candidate.length; i++) {
		if ((Math.abs(pitch - candidate[i]) > 3) &&
		    (Math.abs(pitch - candidate[i]) < 8)) {
			best = i
			break;
		}
	}
	var newnote = new MusicItem();
	newnote.m_type = "note";
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



//////////////////////////////
//
// MusicList::addPitchNear -- Add a pitch that is a fourth
//     or less away from the previous pitch.
//

MusicList.prototype.addPitchNear = function (dpc) {
	if (this.m_list.length == 0) {
		this.addClef(dpc);
		return;
	}

	dpc = parseInt(dpc);
	dpc = (dpc + 7000) % 7;
	var ln = this.getLastNote();
	if (!ln) {
		ln = {};
		ln.m_pname = 0;   // using middle C if no notes in list
		ln.m_oct = 4;
		ln.m_rhythm = 1;
	}
	var oct = ln.m_oct;
	var pitch = ln.m_pname + 7 * oct;
	var candidate = [];
	candidate[0] = (oct - 1) * 7 + dpc
	candidate[1] = (oct + 0) * 7 + dpc
	candidate[2] = (oct + 1) * 7 + dpc
	var i;
	var best = -1;
	for (i=0; i<candidate.length; i++) {
		if (Math.abs(pitch - candidate[i]) < 4) {
			best = i
			break;
		}
	}
	var newnote = new MusicItem;
	newnote.m_type = "note";
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



//////////////////////////////
//
// MusicList::getHumdrumScore -- Convert MusicList into
//     a Humdrum score.
//

MusicList.prototype.getHumdrumScore = function (opts) {
	var output = [];
	//output.push("**kern\t**text");
	output.push("**mens\t**text");
	var i;
	var lines;
	var noteCounter = 0;
	var restCounter = 0;
	var hyphen = false;
	if (!opts) {
		opts = {};
  	}
	var options = opts;
	for (i=0; i<this.m_list.length; i++) {
		var item = this.m_list[i];
		if (item.m_type == "note") {
			noteCounter += 1;
		} else if (item.m_type == "rest") {
			restCounter += 1;
		}
		options.mark = false;
		options.hyphen = hyphen;
		if (i == this.m_index) {
			options.mark = true;
		}
		if (options.export) {
			options.mark = false;
		}
		var lines = item.getHumdrumLine(options);
		if (item.m_type === "note") {
			if (item.m_text.match(/-$/)) {
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
	if (!options.export) {
		output.push("!!!RDF**kern: @ = marked note");
		//output.push("!!!RDF**mens: @ = marked note");
	}

	var output2 = "";
	for (i=0; i<output.length; i++) {
		output2 += output[i] + "\n";
	}
	return output2;
}



//////////////////////////////
//
// MusicList::getLastNote -- return the last note in the list
//     or null if no last note.
//

MusicList.prototype.getLastNote = function () {
	var i;
	for (i=this.m_list.length - 1; i >= 0; i--) {
		if (this.m_list[i].m_type === "note") {
			return this.m_list[i];
		}
	}
	return null;
}



//////////////////////////////
//
// MusicList::removeLastItem -- delete the last item in the list.
//    Later: delete from the currently selected note.
//

MusicList.prototype.removeLastItem = function () {
	var lastItem = this.m_list.pop();
	this.runNotationCallback();
}



//////////////////////////////
//
// MusicList::selectBackward -- Select the previous item in the list.
//

MusicList.prototype.selectBackward = function () {
	if (this.m_index > 0) {
		this.m_index--;
	} else if (this.m_index == 0) {
		this.m_index = -1;
	} else if (this.m_index < 0) {
		this.m_index = this.m_list.length - 1;
	}
	this.runNotationCallback();
}



//////////////////////////////
//
// MusicList::selectForward -- Select the next item in the list.
//

MusicList.prototype.selectForward = function () {
	if (this.m_index < this.m_list.length - 1) {
		this.m_index++;
	} else if (this.m_index == this.m_list.length - 1) {
		this.m_index = -1;
	} else if (this.m_index < 0) {
		this.m_index = 0;
	}
	this.runNotationCallback();
}



//////////////////////////////
//
// MusicList::runNotationCallback --
//

MusicList.prototype.runNotationCallback = function () {
	if (this.m_notationCallback) {
		var score = this.getHumdrumScore();
		this.m_notationCallback(score);
	}
}


//////////////////////////////
//
// MusicList::addTextToCurrentItem -- Returns true if successful.
//

MusicList.prototype.addTextToCurrentItem = function (text) {
	var list = this.m_list;
	if (list.length == 0) {
		return false;
	}
	var index = this.m_index;
	if (index < 0) {
		index = list.length - 1;
	}
	if (index < 0) {
		return false;
	}
	var item = list[index];
	item.m_text += text;
	if (text === "-") {
		this.m_index += 1;
		if (this.m_index >= this.m_list) {
			this.m_index = -1;
		}
	}
	this.runNotationCallback();
	return true;
}



//////////////////////////////
//
// MusicList::goToEndOfList -- Move edit point to end of list.
//

MusicList.prototype.goToEndOfList = function () {
	this.m_index = -1;
	this.runNotationCallback();
}



//////////////////////////////
//
// MusicList::lowerPitch -- Move pitch down a step.
//

MusicList.prototype.lowerPitch = function (amount) {
	var list = this.m_list;
	var len = list.length
	if (len <= 0) {
		return;
	}
	var index = this.m_index;
	if (index < 0) {
		index = len - 1;
	}
	var status;
	status = list[index].lowerPitch(amount);
	if (status) {
		this.runNotationCallback();
	}
}



//////////////////////////////
//
// MusicList::raisePitch -- Move pitch up a step.
//

MusicList.prototype.raisePitch = function (amount) {
	var list = this.m_list;
	var len = list.length
	if (len <= 0) {
		return;
	}
	var index = this.m_index;
	if (index < 0) {
		index = len - 1;
	}
	var status;
	status = list[index].raisePitch(amount);
	if (status) {
		this.runNotationCallback();
	}
}



//////////////////////////////
//
// MusicList::selectItemByLine --
//

MusicList.prototype.selectItemByLine = function (lineNumber) {
	var list = this.m_list;
	var i;
	for (i=0; i<list.length; i++) {
		if (list[i].m_line == lineNumber) {
			this.m_index = i;
			this.runNotationCallback();
			return;
		}
	}
}


//////////////////////////////
//
// MusicList::deleteCharacterOnCurrentItem --
//

MusicList.prototype.deleteCharacterOnCurrentItem = function () {
	var index = this.m_index;
	if (index < 0) {
		index = this.m_list.length - 1;
	}
	var item = this.m_list[index];
	if (!item) {
		return;
	}
	var len = item.m_text.length;
	if (len == 0) {
		return;
	}
	item.m_text = item.m_text.substring(0, len-1);
	this.runNotationCallback();
}



//////////////////////////////
//
// MusicList::clearTextOnCurrentItem --
//

MusicList.prototype.clearTextOnCurrentItem = function () {
	var index = this.m_index;
	if (index < 0) {
		return;
	}
	var item = this.m_list[index];
	if (!item) {
		return;
	}
	var len = item.m_text.length;
	if (len == 0) {
		return;
	}
	item.m_text = "";
	this.runNotationCallback();
}



//////////////////////////////
//
// MusicList::clear --
//

MusicList.prototype.clear = function () {
	this.m_list = [];
	this.m_index = -1;
	this.runNotationCallback();
}



///////////////////////////////////////////////////////////////////////////
//
// MusicItem functions --
//


//////////////////////////////
//
// MusicItem::raisePitch -- Returns true if successful.
//

MusicItem.prototype.raisePitch = function (amount) {
	if (this.m_type === "clef") {
		this.m_clefLine += 1;
		if (this.m_clefLine > 5) {
			this.m_clefLine = 5;
		}
		return true;
	}
	if (!this.m_type === "pitch") {
		return false;
	}
	if (!amount) {
		amount = 1;
	} else if (amount < 0) {
		amount = -amount;
	}

	if (amount >= 7) {
		this.m_oct += amount % 7;
		amount = amount - 7 * (amount % 7);
	}

	this.m_pname += amount;
	if (this.m_pname > 6) {
		this.m_pname -= 7;
		this.m_oct += 1;
	}

	return true;
}



//////////////////////////////
//
// MusicItem::lowerPitch -- Returns true if successful.
//

MusicItem.prototype.lowerPitch = function (amount) {
	if (this.m_type === "clef") {
console.log("THIS IS A CLEF");
		this.m_clefLine -= 1;
		if (this.m_clefLine < 1) {
			this.m_clefLine = 1;
		}
console.log("NEW CLEF LINE", this.m_clefLine);
		return true;
	}
	if (!this.m_type === "pitch") {
		return false;
	}
	if (!amount) {
		amount = 1;
	} else if (amount < 0) {
		amount = -amount;
	}

	if (amount >= 7) {
		this.m_oct -= amount % 7;
		amount = amount - 7 * (amount % 7);
	}

	this.m_pname -= amount;
	if (this.m_pname < 0) {
		this.m_pname += 7;
		this.m_oct -= 1;
	}

	return true;
}



//////////////////////////////
//
// MusicItem::getHumdrumLine --
//

MusicItem.prototype.getHumdrumLine = function (options) {
	if (!options) {
		options = {};
	}
	var output = "";
	var hyphen = options.hyphen;

	// clefs
	if (this.m_type == "clef") {
		output += "*clef";
		switch (this.m_pname) {
			case G_PitchClass: output += "G"; break;
			case F_PitchClass: output += "F"; break;
			default: output += "C"; break;
		}
		output += this.m_clefLine;
		output += "\t";
		output += "*";
		return output;
	}
	if (this.m_type == "rest") {
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
			// output += ".";
			output += ":";
		}
		output += "r\t.";

		return output;
	}

	// note line
	var i;

	/*switch (this.m_rhythm) {
		case 4: output += "4"; break;
		case 2: output += "2"; break;
		case 1: output += "1"; break;
		case 0: output += "0"; break;
		case 9: output += "00"; break;
	}*/
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
		// output += ".";
		output += ":";
	}
	var pname;
	switch (this.m_pname) {
		case C_PitchClass: pname = "c"; break;
		case D_PitchClass: pname = "d"; break;
		case E_PitchClass: pname = "e"; break;
		case F_PitchClass: pname = "f"; break;
		case G_PitchClass: pname = "g"; break;
		case A_PitchClass: pname = "a"; break;
		case B_PitchClass: pname = "b"; break;
	}
	if (this.m_oct >= 4) {
		for (i=4; i<=this.m_oct; i++) {
			output += pname;
		}
	} else {
		pname = pname.toUpperCase();
		for (i=3; i>=this.m_oct; i--) {
			output += pname;
		}
	}
	if (this.m_accid) {
		switch (this.m_accid) {
			case 1: output += "#"; break;
			case 2: output += "-"; break;
		}
	}
	if (options.mark) {
		output += "@";
	}

	// Add text
	output += "\t";
	if (this.m_text) {
		if (hyphen) {
			output += "-";
		}
		output += this.m_text;
	} else {
		output += ".";
	}

	return output;
}

export { MusicItem, MusicList };
