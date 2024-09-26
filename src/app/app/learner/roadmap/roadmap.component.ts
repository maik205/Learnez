import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
})
export class RoadmapComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public menus: { name: string; nav: string; icon: string }[] = [
    {
      name: 'Dashboard',
      nav: 'dashboard',
      icon: 'dashboard',
    },
    {
      name: 'Create a Roadmap',
      nav: 'new',
      icon: 'add',
    },
  ];
}
