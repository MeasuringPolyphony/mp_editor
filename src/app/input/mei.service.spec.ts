import { TestBed } from '@angular/core/testing';

import { MeiService } from './mei.service';

describe('MeiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeiService = TestBed.get(MeiService);
    expect(service).toBeTruthy();
  });
});
