import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing.component').then((m) => m.LandingComponent),
    loadChildren: () =>
      import('./landing/landing.routing').then((m) => m.routes),
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./app/app.component').then((m) => m.AppComponent),
    loadChildren: () => import('./app/app.routing').then((m) => m.routes),
  },
  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
    canActivate: [authGuard],
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    canActivate: [authGuard],
  },
];
