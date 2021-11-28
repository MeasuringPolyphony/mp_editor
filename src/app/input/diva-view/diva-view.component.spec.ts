import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DivaViewComponent } from './diva-view.component';

describe('DivaViewComponent', () => {
  let component: DivaViewComponent;
  let fixture: ComponentFixture<DivaViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DivaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
