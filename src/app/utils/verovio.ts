declare let verovio;
declare let verovioReady: boolean;

class VrvObj {
  vrvToolkit = null;
  options = null;

  constructor() {
    this.options = {
      humType: 0,
      scale: 90,
      spacingNonLinear: 0.35,
      lyricSize: 3,
      breaks: 'none',
      choiceXPathQuery: './corr',
    }
  }

  setup() {
    if (!this.vrvToolkit) {
      this.vrvToolkit = new verovio.toolkit();
      this.vrvToolkit.setOptions(this.options);
    }
  }

  humdrumToMEI(data: string): string {
    this.vrvToolkit.loadData(data);
    return this.vrvToolkit.getMEI({
      pageNo: 0,
      scoreBased: true
    });
  }

  humdrumToSVG(humdrumData: string): SVGSVGElement {
    this.vrvToolkit.loadData(humdrumData);
    let data = this.vrvToolkit.renderToSVG(1);
    const parser = new DOMParser();
    return parser.parseFromString(data, 'image/svg+xml').documentElement as unknown as SVGSVGElement;
  }

  meiToSVG(meiDoc: XMLDocument): SVGSVGElement {
    const serializer = new XMLSerializer();
    const serializedMei = serializer.serializeToString(meiDoc);
    const parser = new DOMParser();
    this.vrvToolkit.loadData(serializedMei);
    const svgRaw = this.vrvToolkit.renderToSVG(1);
    return parser.parseFromString(svgRaw, 'image/svg+xml').documentElement as unknown as SVGSVGElement;
  }

  meiToHumdrum(meiDoc: XMLDocument): string {
    const serializer = new XMLSerializer();
    const serializedMei = serializer.serializeToString(meiDoc);
    return this.vrvToolkit.convertMEIToHumdrum(serializedMei);
  }

  dissonanceInfo(humdrum: string): string {
    humdrum += "\n!!!filter: mens2kern | dissonant\n";
    return this.vrvToolkit.convertHumdrumToHumdrum(humdrum);
  }
}

export const vrvToolkit = new VrvObj();
