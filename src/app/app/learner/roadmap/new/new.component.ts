import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewRoadmapComponent {}
