import { Injectable } from '@angular/core';

declare let vrvToolkit;  // Verovio is loaded globally through <script>

@Injectable({
  providedIn: 'root'
})
export class HNPService {

  constructor() {
  }

  humdrumToMEI(humdrumData: string): string {
    vrvToolkit.loadData(humdrumData);
    return vrvToolkit.getMEI(0, 1);
  }
}
