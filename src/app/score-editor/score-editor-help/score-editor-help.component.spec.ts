import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreEditorHelpComponent } from './score-editor-help.component';

describe('ScoreEditorHelpComponent', () => {
  let component: ScoreEditorHelpComponent;
  let fixture: ComponentFixture<ScoreEditorHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreEditorHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreEditorHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
