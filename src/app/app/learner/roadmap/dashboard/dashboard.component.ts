import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Roadmap } from '../../../../services/interfaces/roadmap.interface';
import {
  PLACEHOLDER_COURSES,
  PLACEHOLDER_ROADMAPS,
} from '../../../../services/placeholder';
import { MatExpansionModule } from '@angular/material/expansion';
import { Course } from '../../../../services/interfaces/course.interface';
import { CourseCardComponent } from '../../../components/course/card/card.component';
import { RoadmapVisualizerComponent } from '../../../components/roadmap/visualizer/visualizer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    CourseCardComponent,
    RoadmapVisualizerComponent,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class RoadmapDashboardComponent {
  public readonly roadmaps: Roadmap[] = PLACEHOLDER_ROADMAPS;

  public getCourseSuggestions(roadmap: Roadmap): Course[] {
    return PLACEHOLDER_COURSES;
  }
  public getCourseProgress(roadmap: Roadmap): number {
    let completedSteps = 0;
    roadmap.steps.forEach((step) => {
      if (step.isCompleted) {
        completedSteps++;
      }
    });
    return (completedSteps / roadmap.steps.length) * 100;
  }
}
