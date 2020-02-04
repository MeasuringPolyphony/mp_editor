import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DivaViewComponent } from './diva-view/diva-view.component';
import { StaffSelectComponent } from './staff-select/staff-select.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    DivaViewComponent,
    StaffSelectComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
