import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreToolbarComponent } from './score-toolbar.component';

describe('ScoreToolbarComponent', () => {
  let component: ScoreToolbarComponent;
  let fixture: ComponentFixture<ScoreToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
