import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreEditorComponent } from './score-editor.component';
import { ScoreDivaViewComponent } from './score-diva-view/score-diva-view.component';
import { ScoreVerovioViewComponent } from './score-verovio-view/score-verovio-view.component';



@NgModule({
  declarations: [
    ScoreDivaViewComponent,
    ScoreVerovioViewComponent,
    ScoreEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScoreEditorComponent
  ]
})
export class ScoreEditorModule { }
