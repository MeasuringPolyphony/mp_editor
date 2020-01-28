import { TestBed } from '@angular/core/testing';

import { HNPService } from './hnp.service';

describe('HnpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HNPService = TestBed.get(HNPService);
    expect(service).toBeTruthy();
  });
});
