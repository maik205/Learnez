import { routes } from './../app.routes';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterOutlet],
  providers: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  public authService = inject(AuthService);
}
