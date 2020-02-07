import { Component, OnInit } from '@angular/core';
import { MeiService } from '../mei.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private meiService: MeiService) { }

  ngOnInit() {
  }

  saveClick() {
    let mei = this.meiService.generateFullMEI();
    let serializer = new XMLSerializer();
    let content = serializer.serializeToString(mei);
    console.log(content);
  }

}
