import { TestBed } from '@angular/core/testing';

import { FreightServiceService } from './freight-service.service';

describe('FreightServiceService', () => {
  let service: FreightServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreightServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
