import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent),
    loadChildren: () => import('./landing/landing.routing').then(m => m.routes),
  },
  {
    path: 'app',
    loadComponent: () => import('./app/app.component').then(m => m.AppComponent),
    loadChildren: () => import('./app/app.routing').then(m => m.routes),
  }
];
