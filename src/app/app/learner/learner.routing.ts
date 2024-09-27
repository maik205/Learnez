import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'roadmap',
    pathMatch: 'full',
  },
  {
    path: 'roadmap',
    loadComponent: () =>
      import('./roadmap/roadmap.component').then((m) => m.RoadmapComponent),
    loadChildren: () =>
      import('./roadmap/roadmap.routing').then((m) => m.routes),
  },
  // {
  //   path: 'course/:id',
  //   loadComponent: () =>
  //     import('./course/course.component').then((m) => m.CourseComponent),
  // },
];
export default routes;
