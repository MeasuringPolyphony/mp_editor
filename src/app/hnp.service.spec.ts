import { TestBed } from '@angular/core/testing';

import { HnpService } from './hnp.service';

describe('HnpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HnpService = TestBed.get(HnpService);
    expect(service).toBeTruthy();
  });
});
