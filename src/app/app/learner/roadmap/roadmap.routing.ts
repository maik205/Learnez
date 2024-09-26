import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./new/new.component').then((m) => m.NewRoadmapComponent),
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./view/view.component').then((m) => m.ViewRoadmapComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.RoadmapDashboardComponent
      ),
  },
];
