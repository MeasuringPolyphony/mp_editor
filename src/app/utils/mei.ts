import { Part, Tenor } from './part';
import { System, Pb, Sb } from './system';
import { ClefItem, NoteItem, RestItem, MensurItem } from './MusicItem';
import { Voice, Mensuration, Contributor, Sign } from './definitions';
import { IRI } from './definitions';


export const NAMESPACE = 'http://www.music-encoding.org/ns/mei';

export class MEIDocument {
  parts: Part[];
  metadata: Metadata;  // Should this be broken up better?
  notationSubtype: string;

  _meiDoc: Document;

  get notationType(): string {
    if (/Ars[_ ](antiqua|nova)/.test(this.notationSubtype)) {
      return "mensural.black";
    } else {
      return "mensural.white";
    }
  }

  constructor (manuscriptIRI: IRI) {  // This is for creating a new document
    this.metadata = new Metadata();
    this.metadata.sourceIRI = manuscriptIRI;
    this.parts = [];
    this._createSkeletonMEI();
  }

  static fromXML(source: XMLDocument): MEIDocument {
    let doc = source.documentElement;
    let iiif = "";
    try {
      let manifestations = doc.querySelectorAll("sourceDesc");
      for (let s of Array.from(manifestations)) {
        for (let item of Array.from(s.querySelectorAll("source"))) {
          if (iiif !== "") break;
          if (item.getAttribute("targettype") === "IIIF") {
            iiif = item.getAttribute("target");
            break;
          }
        }
      }
    } catch (e) {
      console.debug(e);
    }
    let mei = new MEIDocument(iiif);

    // Try to get metadata
    for (let s of Array.from(doc.querySelectorAll("manifestation"))) {
      if (s.querySelector("titleStmt")) {
        let identifier = s.querySelector("titleStmt")?.querySelector("title")?.querySelector("identifier");
        if (identifier && identifier.getAttribute("label") === "siglum") {
          mei.metadata.siglum = identifier.textContent;
          break;
        }
      }
    }
    let titleStmt = doc.querySelector("fileDesc")?.querySelector("titleStmt");
    if (titleStmt) {
      if (titleStmt.querySelector("title")) {
        mei.metadata.shortTitle = titleStmt.querySelector("title").textContent;
      }
      for (let contributor of Array.from(titleStmt.querySelector("respStmt")?.querySelectorAll("persName"))) {
        switch (contributor.getAttribute("role").toLowerCase()) {
          case "encoder":
          case "proofreader":
          case "editor":
          let c: Contributor = {
            name: contributor.textContent,
            type: contributor.getAttribute("role").toLowerCase(),
          };
          mei.metadata.contributors.push(c);
        }
      }
    }
    let workList = doc.querySelector("workList");
    if (workList) {
      let work = doc.querySelector("work");
      if (work) {
        if (work.querySelector("title")) {
          mei.metadata.shortTitle = work.querySelector("title").textContent;
        }
        if (work.querySelector("composer")) {
          mei.metadata.composerName = work.querySelector("composer").textContent;
        }
        if (work.querySelector("classification")) {
          let terms = work.querySelector("classification").querySelector("termList");
          if (terms) {
            for (let term of Array.from(terms.querySelectorAll("term"))) {
              switch (term.textContent) {
                case "Motet":
                case "Song":
                case "Conductus":
                case "Mass Movement":
                case "Plainchant":
                mei.metadata.genre = term.textContent;
              }
              if (mei.metadata.genre !== "") break;
            }
          }
        }
      }
    }

    let facsimile = doc.querySelector("facsimile");
    let surfaces = Array.from(facsimile.querySelectorAll("surface"));
    let zones = Array.from(facsimile.querySelectorAll("zone"));

    // Start processing parts
    const parts = Array.from(doc.querySelectorAll("part"));
    for (const part of parts) {
      let staffDef = part.querySelector("staffDef");
      console.assert(staffDef.hasAttribute("label"));
      let voice = staffDef.getAttribute("label");
      let partObj: Part | Tenor = /^[tT]enor/.test(voice) ? new Tenor(mei, part.getAttribute("xml:id")) : new Part(mei, part.getAttribute("xml:id"));
      partObj.voice = Voice[voice];
      mei.parts.push(partObj);
      let mensur = staffDef.querySelector("mensur");
      let sign = "";

      if (staffDef.hasAttribute("notationsubtype")) {
        mei.notationSubtype = staffDef.getAttribute("notationsubtype");
      } else {
        mei.notationSubtype = "";
      }
      // Parsing logical-domain mensuration attributes for the part
      if (staffDef.hasAttribute("modusminor")) {
        partObj.modus = staffDef.getAttribute("modusminor") as Mensuration;
      } else if (mensur && mensur.hasAttribute("modusminor")) {
        partObj.modus = mensur.getAttribute("modusminor") as Mensuration;
      }
      if (staffDef.hasAttribute("tempus")) {
        partObj.tempus = staffDef.getAttribute("tempus") as Mensuration;
      } else if (mensur && mensur.hasAttribute("tempus")) {
        partObj.tempus = mensur.getAttribute("tempus") as Mensuration;
      }
      if (staffDef.hasAttribute("prolatio")) {
        partObj.prolatio = staffDef.getAttribute("prolatio") as Mensuration;
      } else if (mensur && mensur.hasAttribute("prolatio")) {
        partObj.prolatio = mensur.getAttribute("prolatio") as Mensuration;
      }
      // Parse visual-domain mensuration attributes for the part
      if (staffDef.hasAttribute("sign")) {
        sign = sign + staffDef.getAttribute("sign");
      } else if (mensur && mensur.hasAttribute("sign")) {
        sign = sign + mensur.getAttribute("sign");
      }
      if (staffDef.hasAttribute("slash") && staffDef.getAttribute("slash") === "1") {
        sign = sign + "|";
      } else if (mensur && mensur.hasAttribute("slash") && mensur.getAttribute("slash") === "1") {
        sign = sign + "|";
      }
      if (staffDef.hasAttribute("dot") && staffDef.getAttribute("dot") === "true") {
        sign = sign + ".";
      } else if (mensur && mensur.hasAttribute("dot") && mensur.getAttribute("dot") === "true") {
        sign = sign + ".";
      }
      if (staffDef.hasAttribute("num")) {
        sign = sign + staffDef.getAttribute("num");
      } else if (mensur && mensur.hasAttribute("num")) {
        sign = sign + mensur.getAttribute("num");
      }
      if (staffDef.hasAttribute("numbase")) {
        sign = sign + "/" + staffDef.getAttribute("numbase");
      } else if (mensur && mensur.hasAttribute("numbase")) {
        sign = sign + "/" + mensur.getAttribute("numbase");
      }
      if (sign === "") {sign = "N/A"}
      partObj.sign = sign as Sign;

      const layer = part.querySelector("layer");
      // Handle repeating tenor if tenor
      if (/^[tT]enor/.test(partObj.voice)) {
        const dir = part.querySelector("dir");
        if (dir) {
          const tenorObj = partObj as Tenor;
          tenorObj.repetitions = Number(dir.getAttribute("n")) + 1
          const matchResults = dir.getAttribute("plist").match(/^#[-\w\d]+ #([-\w\d]+)$/);
          if (matchResults.length > 1) {
            tenorObj.endingId = matchResults[1];
          }
        }
      }
      // Handle regular children
      const layerChildren = Array.from(layer.querySelectorAll("pb,sb,clef,note,rest,mensur"));
      let activePb: Pb = null;
      let activeSystem: System = null;
      for (const child of layerChildren) {
        if (child.tagName === "pb") {
          let facs = child.getAttribute("facs").split("#")[1];
          console.assert(surfaces.some(el => { return el.getAttribute("xml:id") === facs; }));
          let surface = surfaces.find(el => { return el.getAttribute("xml:id") === facs; });
          let graphic = surface.querySelector("graphic");
          activePb = new Pb(graphic.getAttribute("target"), child.getAttribute("xml:id"));

          // Determine Pb index and codedVal
          function setIndex(pb: Pb) {
            fetch(iiif).then(response => {
              return response.json();
            }).then((manifest: object) => {
              let canvases: object[] = manifest["sequences"][0]["canvases"];
              pb.index = canvases.findIndex(canvas => { return canvas["@id"] === pb.canvasIRI; });
              pb.codedVal = canvases[pb.index]["label"];
            });
          }

          setIndex(activePb);
        } else if (child.tagName === "sb") {
          let sb: Sb;
          if (child.hasAttribute("facs")) {
            let facs = child.getAttribute("facs").split("#")[1];
            console.assert(zones.some(el => { return el.getAttribute("xml:id") === facs; }));
            let zone = zones.find(el => { return el.getAttribute("xml:id") === facs; });
            sb = new Sb(
              {
                ulx: Number(zone.getAttribute("ulx")),
                uly: Number(zone.getAttribute("uly")),
                lrx: Number(zone.getAttribute("lrx")),
                lry: Number(zone.getAttribute("lry"))
              },
              child.getAttribute("xml:id")
            );
          } else {
            sb = new Sb({ulx: 0, uly: 0, lrx: 0, lry: 0}, child.getAttribute("xml:id"));
          }
          activeSystem = new System();
          activeSystem.sb = sb;
          activeSystem.pb = activePb;
          partObj.addSystem(activeSystem);
        } else if (child.tagName === "clef") {
          let clef = ClefItem.parseXML(child);
          // Check for keysignature
          if (child.nextElementSibling?.tagName === "keySig") {
            const keySig = child.nextElementSibling.getAttribute("sig");
            if (/([1-9]|1[0-2])(f|s)/.test(keySig)) {
              const match = /([1-9]|1[0-2])(f|s)/.exec(keySig);
              const sigCount = parseInt(match[1]);
              const sigKind = match[2] as string;
              const sharpList = ["f", "c", "g", "d", "a", "e", "b"];
              const flatList = ["b", "e", "a", "d", "g", "c", "f"];
              for (let i = 0; i < sigCount; i++) {
                if (sigKind === "f") {
                  clef.m_keySig.set(flatList[i], "-");
                } else {
                  clef.m_keySig.set(sharpList[i], "#");
                }
              }
            }
          }
          activeSystem.contents.m_list.push(clef);
        } else if (child.tagName === "rest") {
          let rest = RestItem.parseXML(child);
          activeSystem.contents.m_list.push(rest);
        } else if (child.tagName === "note") {
          let note = NoteItem.parseXML(child);
          activeSystem.contents.m_list.push(note);
        } else if (child.tagName === "mensur") {
          let mensur = MensurItem.parseXML(child);
          activeSystem.contents.m_list.push(mensur);
        }
      }
    }

    return mei;
  }

  generateXML(): Document {
    this.parts.sort(Part.compare);
    this._createSkeletonMEI();
    let parts = this._meiDoc.querySelector('parts');
    for (let part of this.parts) {
      if (part.systems.length === 0) {
        continue;
      }
      let partElement = /^[tT]enor/.test(part.voice) ?
        (part as Tenor).generatePartXML() : part.generatePartXML();
      if (partElement.querySelector('layer').children.length === 0) continue;
      parts.appendChild(partElement);
    }
    return this._meiDoc;
  }

  _createSkeletonMEI() {
    this._meiDoc = document.implementation.createDocument(NAMESPACE, 'mei', null);
    let mei = this._meiDoc.documentElement;
    mei.setAttribute('meiversion', '5.0.0-dev');
    mei.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    // Create Header
    let head = this._generateHeader();
    // TODO Add more to header
    mei.appendChild(head);

    // Create music skeleton
    let music = this._meiDoc.createElementNS(NAMESPACE, 'music');
    let facsimile = this._meiDoc.createElementNS(NAMESPACE, 'facsimile');
    let body = this._meiDoc.createElementNS(NAMESPACE, 'body');
    let mdiv = this._meiDoc.createElementNS(NAMESPACE, 'mdiv');
    let parts = this._meiDoc.createElementNS(NAMESPACE, 'parts');
    mei.appendChild(music);
    music.appendChild(facsimile);
    music.appendChild(body);
    body.appendChild(mdiv);
    mdiv.appendChild(parts);
  }

  _generateHeader(): Element {
    let meiHead = this._meiDoc.createElementNS(NAMESPACE, "meiHead");
    let fileDesc = this._meiDoc.createElementNS(NAMESPACE, "fileDesc");
    meiHead.appendChild(fileDesc);
    let titleStmt = this._meiDoc.createElementNS(NAMESPACE, "titleStmt");
    fileDesc.appendChild(titleStmt);
    let title = this._meiDoc.createElementNS(NAMESPACE, "title");
    title.textContent = this.metadata.shortTitle;
    titleStmt.appendChild(title);
    let composer1 = this._meiDoc.createElementNS(NAMESPACE, "composer");
    composer1.textContent = this.metadata.composerName;
    titleStmt.appendChild(composer1);

    // Note funders (Brandeis + NEH)
    let funder1 = this._meiDoc.createElementNS(NAMESPACE, "funder");
    let funder2 = this._meiDoc.createElementNS(NAMESPACE, "funder");
    let corpName1 = this._meiDoc.createElementNS(NAMESPACE, "corpName");
    let corpName2 = this._meiDoc.createElementNS(NAMESPACE, "corpName");
    corpName1.textContent = "Brandeis University";
    funder1.appendChild(corpName1);
    corpName2.textContent = "National Endowment for the Humanities (NEH)";
    funder2.appendChild(corpName2);
    titleStmt.appendChild(funder1);
    titleStmt.appendChild(funder2);

    let respStmt = this._meiDoc.createElementNS(NAMESPACE, "respStmt");
    titleStmt.appendChild(respStmt);
    // Add Karen as project director
    let director = this._meiDoc.createElementNS(NAMESPACE, "persName");
    director.textContent = "Karen Desmond";
    director.setAttribute("role", "project director");
    director.setAttribute("auth", "VIAF");
    director.setAttribute("auth.uri", "http://viaf.org/viaf/");
    director.setAttribute("codedval", "316001213");
    respStmt.appendChild(director);
    for (let contributor of this.metadata.contributors) {
      let persName = this._meiDoc.createElementNS(NAMESPACE, "persName");
      persName.textContent = contributor.name;
      persName.setAttribute("role", contributor.type);
      respStmt.appendChild(persName);
    }

    let pubStmt = this._meiDoc.createElementNS(NAMESPACE, "pubStmt");
    fileDesc.appendChild(pubStmt);
    let publisher = this._meiDoc.createElementNS(NAMESPACE, "publisher");
    pubStmt.appendChild(publisher);
    let pubPersName = this._meiDoc.createElementNS(NAMESPACE, "persName");
    pubPersName.textContent = "Karen Desmond";
    publisher.appendChild(pubPersName);
    let pubCorpName = this._meiDoc.createElementNS(NAMESPACE, "corpName");
    pubCorpName.textContent = "Brandeis University";
    publisher.appendChild(pubCorpName);
    let pubDate = this._meiDoc.createElementNS(NAMESPACE, "date");
    pubDate.textContent = (new Date()).getFullYear().toString();
    pubStmt.appendChild(pubDate);
    let availability = this._meiDoc.createElementNS(NAMESPACE, "availability");
    pubStmt.appendChild(availability);
    let useRestrict = this._meiDoc.createElementNS(NAMESPACE, "useRestrict");
    useRestrict.textContent = "Available for purposes of academic research and teaching only.";
    availability.appendChild(useRestrict);

    let seriesStmt = this._meiDoc.createElementNS(NAMESPACE, "seriesStmt");
    fileDesc.appendChild(seriesStmt);
    let seriesTitle = this._meiDoc.createElementNS(NAMESPACE, "title");
    seriesTitle.textContent = "Measuring Polyphony: Digital Encodings of Late Medieval Music";
    seriesStmt.appendChild(seriesTitle);
    let seriesEditor = this._meiDoc.createElementNS(NAMESPACE, "editor");
    seriesStmt.appendChild(seriesEditor);
    let editorPersName = this._meiDoc.createElementNS(NAMESPACE, "persName");
    editorPersName.textContent = "Karen Desmond";
    seriesEditor.appendChild(editorPersName);
    let seriesIdentifier = this._meiDoc.createElementNS(NAMESPACE, "identifier");
    seriesStmt.appendChild(seriesIdentifier);
    let identifierRef = this._meiDoc.createElementNS(NAMESPACE, "ref");
    identifierRef.setAttribute("targettype", "home_page");
    identifierRef.setAttribute("target", "http://www.measuringpolyphony.org/");
    seriesIdentifier.appendChild(identifierRef);

    let fileDescNotes = this._meiDoc.createElementNS(NAMESPACE, "notesStmt");
    let annot2 = this._meiDoc.createElementNS(NAMESPACE, "annot");
    annot2.setAttribute("label", "original_clefs");
    fileDescNotes.appendChild(annot2);
    let annot3 = this._meiDoc.createElementNS(NAMESPACE, "annot");
    annot3.setAttribute("label", "commentary");
    fileDescNotes.appendChild(annot3);
    fileDesc.appendChild(fileDescNotes);

    let sourceDesc = this._meiDoc.createElementNS(NAMESPACE, "sourceDesc");
    fileDesc.appendChild(sourceDesc);
    let source = this._meiDoc.createElementNS(NAMESPACE, "source");
    sourceDesc.appendChild(source);
    source.setAttribute("targettype", "IIIF");
    source.setAttribute("target", this.metadata.sourceIRI);
    let locus = this._meiDoc.createElementNS(NAMESPACE, "locus");
    source.appendChild(locus);
    locus.textContent = this.parts[0]?.systems[0]?.pb.codedVal;

    let encodingDesc = this._meiDoc.createElementNS(NAMESPACE, "encodingDesc");
    meiHead.appendChild(encodingDesc);
    let appInfo = this._meiDoc.createElementNS(NAMESPACE, "appInfo");
    encodingDesc.appendChild(appInfo);
    let application = this._meiDoc.createElementNS(NAMESPACE, "application");
    application.setAttribute("xml:id", "MPEditor");
    appInfo.appendChild(application);
    let appName = this._meiDoc.createElementNS(NAMESPACE, "name");
    appName.textContent = "Measuring Polyphony Editor";
    application.appendChild(appName);
    let editorialDecl = this._meiDoc.createElementNS(NAMESPACE, "editorialDecl");
    encodingDesc.appendChild(editorialDecl);
    let editorialDeclP = this._meiDoc.createElementNS(NAMESPACE, "p");
    editorialDeclP.textContent = "This MEI encoding in mensural notation was made using the Measuring Polyphony Editor, transcribed from IIIF images of the original manuscript source one staff at a time, entering the pitches and rhythms for each stave using a combination of number and letter keystrokes. The Measuring Polyphony Editor generates two MEI files from this user input: an MEI parts file that captures each voice part entered, and an MEI score file that scores up the voice parts, which is viewable here.";
    editorialDecl.appendChild(editorialDeclP);
    let projectDesc = this._meiDoc.createElementNS(NAMESPACE, "projectDesc");
    encodingDesc.appendChild(projectDesc);
    let projectDescP = this._meiDoc.createElementNS(NAMESPACE, "p");
    projectDescP.textContent = "The Measuring Polyphony Editor, funded by a 2019-2020 NEH Digital Humanities Grant, is a prototype tool that allows a variety of modern readers (students and experts, musicologists, music theorists, those interested in the history of music notation, counterpoint, medieval palaeography and/or manuscript studies) to access and contribute transcriptions of music directly linked to digital images of the medieval manuscripts, and to learn about the original notation. This tool will offer new possibilities for the analysis and interpretation of late medieval music. In a broader humanities context, the project investigates how modeling the meanings of notational signs can lead to new understandings of the interaction between the sign and the signified, and of the relationship between notational style and changes in musical style across time and place.";
    projectDesc.appendChild(projectDescP);


    let workList = this._meiDoc.createElementNS(NAMESPACE, "workList");
    meiHead.appendChild(workList);
    let work = this._meiDoc.createElementNS(NAMESPACE, "work");
    workList.appendChild(work);
    let identifierPlaceholder = this._meiDoc.createElementNS(NAMESPACE, "identifier");
    identifierPlaceholder.setAttribute("type", "catalogue_number");
    work.appendChild(identifierPlaceholder);
    let title2 = this._meiDoc.createElementNS(NAMESPACE, "title");
    title2.textContent = this.metadata.shortTitle;
    work.appendChild(title2);
    let composer = this._meiDoc.createElementNS(NAMESPACE, "composer");
    composer.textContent = this.metadata.composerName;
    work.appendChild(composer);
    let incip = this._meiDoc.createElementNS(NAMESPACE, "incip");
    work.appendChild(incip);
    for (let part of this.parts) {
        let incipText = this._meiDoc.createElementNS(NAMESPACE, "incipText");
        incipText.setAttribute("label", part.voice.toString());
        incipText.setAttribute("corresp", "#" + part.voice.toString().replace(" ", ""));
        incipText.innerHTML = "<lg><l>[" + part.voice.toString().toUpperCase() + "]</l></lg>";
        incip.appendChild(incipText);
    }
    let classification = this._meiDoc.createElementNS(NAMESPACE, "classification");
    work.appendChild(classification);
    let termList = this._meiDoc.createElementNS(NAMESPACE, "termList");
    classification.appendChild(termList);
    let term = this._meiDoc.createElementNS(NAMESPACE, "term");
    term.textContent = this.metadata.genre;
    termList.appendChild(term);


    let manifestList = this._meiDoc.createElementNS(NAMESPACE, "manifestationList");
    meiHead.appendChild(manifestList);
    let manifestation = this._meiDoc.createElementNS(NAMESPACE, "manifestation");
    manifestation.setAttribute("singleton", "true");
    manifestList.appendChild(manifestation);
    let titleStmt2 = this._meiDoc.createElementNS(NAMESPACE, "titleStmt");
    manifestation.appendChild(titleStmt2);
    let title3 = this._meiDoc.createElementNS(NAMESPACE, "title");
    titleStmt2.appendChild(title3);
    let identifier = this._meiDoc.createElementNS(NAMESPACE, "identifier");
    identifier.setAttribute("label", "siglum");
    identifier.textContent = this.metadata.siglum;
    title3.appendChild(identifier);
    let physLoc = this._meiDoc.createElementNS(NAMESPACE, "physLoc");
    manifestation.appendChild(physLoc);
    let physRepository = this._meiDoc.createElementNS(NAMESPACE, "repository");
    physLoc.appendChild(physRepository);
    let libName = this._meiDoc.createElementNS(NAMESPACE, "corpName");
    libName.textContent = "[LIBRARY NAME]";
    physRepository.appendChild(libName);
    let shelfIdentifier = this._meiDoc.createElementNS(NAMESPACE, "identifier");
    physRepository.appendChild(shelfIdentifier);
    shelfIdentifier.textContent = "[SHELFMARK]";
    let iiifPtr = this._meiDoc.createElementNS(NAMESPACE, "ptr");
    physRepository.appendChild(iiifPtr);
    iiifPtr.setAttribute("targettype", "IIIF");
    iiifPtr.setAttribute("target", this.metadata.sourceIRI);
    let notesStmt = this._meiDoc.createElementNS(NAMESPACE, "notesStmt");
    manifestation.appendChild(notesStmt);
    let annot1 = this._meiDoc.createElementNS(NAMESPACE, "annot");
    annot1.textContent = "Primary manuscript source for this encoding.";
    notesStmt.appendChild(annot1);

    return meiHead;
  }

  getSystems(): System[] {
    let allSystems: System[] = [];
    for (let part of this.parts) {
      allSystems.unshift(...part.systems);
    }
    return allSystems;
  }

  getSystem(id: string): System {
    let allSystems = this.getSystems();
    let systemList = allSystems.filter(system => { return system.id === id; });
    return systemList.length > 0 ? systemList[0] : null;
  }

  getPart(voice: Voice): Part {
    let partlist = this.parts.filter(part => { return part.voice === voice; });
    return partlist.length > 0 ? partlist[0] : null;
  }

  getOrCreatePart(voice: Voice): Part {
    if (this.parts.some(part => { return part.voice === voice; })) {
      return this.getPart(voice);
    }
    let part = /^[tT]enor/.test(voice) ? new Tenor(this) : new Part(this);
    part.voice = voice;
    this.parts.push(part);
    this.parts.sort(Part.compare);
    return part;
  }

  getPb(index: number): Pb {
    let pbs = new Set<Pb>();
    for (let part of this.parts) {
      part.systems.forEach(system => {
        pbs.add(system.pb);
      });
    }
    for (let pb of pbs.values()) {
      if (pb.index === index) return pb;
    }
    return null;
  }
}

class Metadata {
  shortTitle: string;
  sourceIRI: IRI;
  composerName: string;
  contributors: Contributor[] = [];
  siglum: string;
  genre: string;
}
