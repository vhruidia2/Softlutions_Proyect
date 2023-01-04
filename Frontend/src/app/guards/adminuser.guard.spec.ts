import { TestBed } from '@angular/core/testing';

import { AdminuserGuard } from './adminuser.guard';

describe('AdminuserGuard', () => {
  let guard: AdminuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
