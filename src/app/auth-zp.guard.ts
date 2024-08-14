import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authZPGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (localStorage.getItem("password") != null) {
    return true
  }
  else {
    router.navigateByUrl("")

    return false;
  }
};
