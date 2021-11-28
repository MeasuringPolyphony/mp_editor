import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectDocumentComponent } from './select-document.component';

describe('SelectDocumentComponent', () => {
  let component: SelectDocumentComponent;
  let fixture: ComponentFixture<SelectDocumentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
