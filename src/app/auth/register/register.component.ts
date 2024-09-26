import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  public form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  public isRegistering: boolean = false;
  public error: string = '';
  public async register() {
    this.isRegistering = true;
    try {
      await this.authService.register(
        this.form.value.email!,
        this.form.value.password!
      );
    } catch (e: any) {
      this.error = e.message;
    }
    this.isRegistering = false;
  }
}
