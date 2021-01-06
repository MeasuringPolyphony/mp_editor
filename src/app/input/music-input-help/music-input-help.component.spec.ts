import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicInputHelpComponent } from './music-input-help.component';

describe('MusicInputHelpComponent', () => {
  let component: MusicInputHelpComponent;
  let fixture: ComponentFixture<MusicInputHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicInputHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicInputHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
