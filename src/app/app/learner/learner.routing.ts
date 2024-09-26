import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'roadmap',
    loadComponent: () =>
      import('./roadmap/roadmap.component').then((m) => m.RoadmapComponent),
    loadChildren: () =>
      import('./roadmap/roadmap.routing').then((m) => m.routes),
  },
  {
    path: 'course/:id',
    loadComponent: () =>
      import('./course/course.component').then((m) => m.CourseComponent),
  }
];
export default routes;
