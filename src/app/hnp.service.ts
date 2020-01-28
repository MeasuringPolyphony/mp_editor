import { Injectable } from '@angular/core';

declare let verovio;  // Verovio is loaded globally through <script>

@Injectable({
  providedIn: 'root'
})
export class HNPService {
  vrvToolkit = null;

  constructor() {
    let options = {
      type: 'MEI',
      humType: 0
    }
    this.vrvToolkit = new verovio.toolkit();
    this.vrvToolkit.setOptions(options);
  }

  humdrumToMEI(humdrumData: string): string {
    this.vrvToolkit.loadData(humdrumData);
    return this.vrvToolkit.getMEI(0, 1);
  }
}
