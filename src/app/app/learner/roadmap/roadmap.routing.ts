import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'new',
    loadComponent: () => import('./new/new.component').then(m => m.NewRoadmapComponent),
  }
]
