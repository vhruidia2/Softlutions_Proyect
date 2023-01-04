import { TestBed } from '@angular/core/testing';

import { DevsService } from './devs.service';

describe('DevsService', () => {
  let service: DevsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
