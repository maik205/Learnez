import { Component, input, InputSignal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Course } from '../../../../services/interfaces/course.interface';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'course-preview',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CourseCardComponent {
  public course: InputSignal<Course> = input.required();
}
