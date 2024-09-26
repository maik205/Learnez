import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = (route, state) => {
  let authService: Auth = inject(Auth);
  let router = inject(Router);
  authService.onAuthStateChanged((user) => {
    if (user) {
      router.navigate(['courses']);
    }
  });
  return true;
};
