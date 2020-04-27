import { Injectable } from '@angular/core';

declare let verovio;  // Verovio is loaded globally through <script>

@Injectable({
  providedIn: 'root'
})
export class HNPService {
  vrvToolkit = null;
  options = null;

  constructor() {
    this.options = {
      humType: 0,
      scale: 90,
      spacingNonLinear: 0.35,
      lyricSize: 3,
      breaks: 'none',
    }
    this.vrvToolkit = new verovio.toolkit();
    this.vrvToolkit.setOptions(this.options);
  }

  humdrumToMEI(humdrumData: string): string {
    this.vrvToolkit.loadData(humdrumData);
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

  meiToSVG(meiDocument: XMLDocument): SVGSVGElement {
    const serializer = new XMLSerializer();
    const serializedMei = serializer.serializeToString(meiDocument);
    const parser = new DOMParser();
    this.vrvToolkit.loadData(serializedMei);
    const svgRaw = this.vrvToolkit.renderToSVG(1);
    return parser.parseFromString(svgRaw, 'image/svg+xml').documentElement as unknown as SVGSVGElement;
  }
}
