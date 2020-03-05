import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDivaViewComponent } from './score-diva-view.component';

describe('ScoreDivaViewComponent', () => {
  let component: ScoreDivaViewComponent;
  let fixture: ComponentFixture<ScoreDivaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreDivaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreDivaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
