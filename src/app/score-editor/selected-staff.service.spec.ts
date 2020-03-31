import { TestBed } from '@angular/core/testing';

import { SelectedStaffService } from './selected-staff.service';

describe('SelectedStaffService', () => {
  let service: SelectedStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
