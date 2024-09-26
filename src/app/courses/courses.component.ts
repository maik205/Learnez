import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses = [
    {
      title: 'Angular',
      description:
        'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      instructor: 'John Doe',
    },
    {
      title: 'React',
      description:
        'React is a JavaScript library for building user interfaces.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      instructor: 'John Doe',
    },
    {
      title: 'Vue',
      description:
        'Vue is a progressive framework for building user interfaces.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      instructor: 'John Doe',
    },
  ];
}
