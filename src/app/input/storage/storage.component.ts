import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

const SLOTS = 5;

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {

  selected = 1;

  slots = ([...Array(SLOTS).keys()].map(x => x+1));

  constructor(
    public dialogRef: MatDialogRef<StorageComponent>
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close({
      "selected": this.selected,
      "action": "save"
    });
  }

  onLoadClick(): void {
    this.dialogRef.close({
      "selected": this.selected,
      "action": "load"
    });
  }

}
