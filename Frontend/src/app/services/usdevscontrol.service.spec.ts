import { TestBed } from '@angular/core/testing';

import { UsdevscontrolService } from './usdevscontrol.service';

describe('UsdevscontrolService', () => {
  let service: UsdevscontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsdevscontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
