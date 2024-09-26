import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public authService = inject(AuthService);
  public fb = inject(FormBuilder);
  public form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    ifKeepLoggedIn: [false],
  });
  public isLoggingIn: boolean = false;
  public error: string = '';
  public async login() {
    this.isLoggingIn = true;
    try {
      await this.authService.login(
        this.form.value.email!,
        this.form.value.password!,
        this.form.value.ifKeepLoggedIn!
      );
    } catch (e: any) {
      this.error = e.message;
    }
    this.isLoggingIn = false;
  }
}
