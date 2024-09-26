import { Component } from '@angular/core';
import { CoursesComponent } from '../../courses/courses.component';

@Component({
  selector: 'app-courses-preview',
  standalone: true,
  imports: [CoursesComponent],
  templateUrl: './courses-preview.component.html',
  styleUrl: './courses-preview.component.scss',
})
export class CoursesPreviewComponent {}
