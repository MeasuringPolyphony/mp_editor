import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { InputModule } from './input/input.module';
import { InputComponent } from './input/input.component';

import { AppComponent } from './app.component';
import { SelectDocumentComponent } from './select-document/select-document.component';
import { ScoreEditorModule } from './score-editor/score-editor.module';
import { ScoreEditorComponent } from './score-editor/score-editor.component';

const routes: Routes = [
  {
    path: 'input/:source/:identifier',
    component: InputComponent
  },
  {
    path: 'score/:source/:identifier',
    component: ScoreEditorComponent
  },
  {
    path: '',
    // redirectTo: '/input/gallica/12148%2Fbtv1b8454675g',
    component: SelectDocumentComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SelectDocumentComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: true, relativeLinkResolution: 'legacy' }
      //{ enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    InputModule,
    ScoreEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
