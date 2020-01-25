import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DivaViewComponent } from './diva-view/diva-view.component';
import { StaffSelectComponent } from './staff-select/staff-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DivaViewComponent,
    StaffSelectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
