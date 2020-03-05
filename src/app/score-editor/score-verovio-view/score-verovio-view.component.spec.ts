import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreVerovioViewComponent } from './score-verovio-view.component';

describe('ScoreVerovioViewComponent', () => {
  let component: ScoreVerovioViewComponent;
  let fixture: ComponentFixture<ScoreVerovioViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreVerovioViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreVerovioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
