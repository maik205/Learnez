import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatRadioModule,
    CommonModule,
  ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewRoadmapComponent {
  public educationLevel: string = '';
  public field: string = 'Computer Science';
  public topicOfInterest: string = '';
  public interestedCategories: string[] = [];

  public topicsOfInterest: { [key: string]: string[] } = {
    'Computer Science': [
      'Web Development',
      'Mobile Development',
      'Data Science',
      'Cybersecurity',
      'Machine Learning',
      'Artificial Intelligence',
    ],

    Business: [
      'Entrepreneurship',
      'Marketing',
      'Finance',
      'Accounting',
      'Management',
      'Human Resources',
    ],

    Health: [
      'Nutrition',
      'Fitness',
      'Mental Health',
      'Medicine',
      'Public Health',
      'Nursing',
    ],

    Art: [
      'Drawing',
      'Painting',
      'Photography',
      'Graphic Design',
      'Sculpture',
      'Music',
    ],
  };
  constructor() {}
}
