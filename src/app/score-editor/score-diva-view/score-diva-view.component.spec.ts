import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScoreDivaViewComponent } from './score-diva-view.component';

describe('ScoreDivaViewComponent', () => {
  let component: ScoreDivaViewComponent;
  let fixture: ComponentFixture<ScoreDivaViewComponent>;

  beforeEach(waitForAsync(() => {
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
