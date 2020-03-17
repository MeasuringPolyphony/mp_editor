import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ScoreEditorComponent } from './score-editor.component';
import { ScoreDivaViewComponent } from './score-diva-view/score-diva-view.component';
import { ScoreVerovioViewComponent } from './score-verovio-view/score-verovio-view.component';
import { ScoreToolbarComponent } from './score-toolbar/score-toolbar.component';

@NgModule({
  declarations: [
    ScoreDivaViewComponent,
    ScoreVerovioViewComponent,
    ScoreEditorComponent,
    ScoreToolbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    ScoreEditorComponent
  ]
})
export class ScoreEditorModule { }
