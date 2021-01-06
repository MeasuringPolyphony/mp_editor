import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

import { ScoreEditorComponent } from './score-editor.component';
import { ScoreDivaViewComponent } from './score-diva-view/score-diva-view.component';
import { ScoreVerovioViewComponent } from './score-verovio-view/score-verovio-view.component';
import { ScoreToolbarComponent } from './score-toolbar/score-toolbar.component';
import { ScoreEditorHelpComponent } from './score-editor-help/score-editor-help.component';

@NgModule({
  declarations: [
    ScoreDivaViewComponent,
    ScoreVerovioViewComponent,
    ScoreEditorComponent,
    ScoreToolbarComponent,
    ScoreEditorHelpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
  ],
  exports: [
    ScoreEditorComponent
  ]
})
export class ScoreEditorModule { }
