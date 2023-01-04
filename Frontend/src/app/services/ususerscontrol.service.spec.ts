import { TestBed } from '@angular/core/testing';

import { UsuserscontrolService } from './ususerscontrol.service';

describe('UsuserscontrolService', () => {
  let service: UsuserscontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuserscontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
