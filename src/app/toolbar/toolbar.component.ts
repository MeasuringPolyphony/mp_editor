import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private staffService: StaffService) { }

  ngOnInit() {
  }

  saveClick() {
    let mei = this.staffService.generateFullMEI();
    let serializer = new XMLSerializer();
    let content = serializer.serializeToString(mei);
    console.log(content);
  }

}
