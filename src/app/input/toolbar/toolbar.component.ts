import { Component, OnInit } from '@angular/core';
import { MeiService } from '../mei.service';
import { StaffService } from '../staff.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private meiService: MeiService,
    public staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveClick(evt: MouseEvent) {
    let target = evt.target as HTMLAnchorElement;
    const mei = this.meiService.generateFullMEI();
    const serializer = new XMLSerializer();
    const content = serializer.serializeToString(mei);
    const blob = new Blob([content], {type: 'application/xml'});
    target.setAttribute('href', window.URL.createObjectURL(blob));
  }

  finishStep() {
    const mei = this.meiService.generateFullMEI();
    const type = this.route.snapshot.paramMap.get('source');
    const identifier = this.route.snapshot.paramMap.get('identifier');
    this.router.navigate(['/score', type, identifier]);
  }

  deleteStaff() {
    this.staffService.triggerDelete();
  }

}
