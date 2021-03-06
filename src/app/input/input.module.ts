import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { DivaViewComponent } from './diva-view/diva-view.component';
import { StaffSelectComponent } from './staff-select/staff-select.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InputComponent } from './input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralHelpComponent } from './general-help/general-help.component';
import { MusicInputHelpComponent } from './music-input-help/music-input-help.component';

@NgModule({
  declarations: [
    DivaViewComponent,
    StaffSelectComponent,
    StaffSelectComponent,
    ToolbarComponent,
    InputComponent,
    GeneralHelpComponent,
    MusicInputHelpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
