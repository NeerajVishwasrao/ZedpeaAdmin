import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authZPGuard } from './auth-zp.guard';

describe('authZPGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authZPGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
