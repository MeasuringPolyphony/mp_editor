import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { InputModule } from './input/input.module';
import { InputComponent } from './input/input.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'input/:source/:identifier',
    component: InputComponent
  },
  {
    path: '',
    redirectTo: '/input/gallica/12148%2Fbtv1b8454675g',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
