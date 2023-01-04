import { TestBed } from '@angular/core/testing';

import { AdmindevGuard } from './admindev.guard';

describe('AdmindevGuard', () => {
  let guard: AdmindevGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmindevGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
