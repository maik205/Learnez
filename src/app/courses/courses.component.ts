import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CourseCardComponent } from '../app/components/course/card/card.component';
import { PLACEHOLDER_COURSES } from '../services/placeholder';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses = PLACEHOLDER_COURSES;
}
