import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./intro/intro.component').then((m) => m.IntroComponent),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses-preview/courses-preview.component').then(
        (m) => m.CoursesPreviewComponent
      ),
  },
];
