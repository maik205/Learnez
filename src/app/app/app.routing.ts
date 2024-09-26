import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'learner',
    loadChildren: () => import('./learner/learner.routing'),
    loadComponent: () =>
      import('./learner/learner.component').then((m) => m.LearnerComponent),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
