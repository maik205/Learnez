import { PLACEHOLDER_ROADMAPS } from './../../../../services/placeholder';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Roadmap } from '../../../../services/interfaces/roadmap.interface';
import {
  PLACEHOLDER_COURSES,
} from '../../../../services/placeholder';
import { MatExpansionModule } from '@angular/material/expansion';
import { Course } from '../../../../services/interfaces/course.interface';
import { CourseCardComponent } from '../../../components/course/card/card.component';
import { RoadmapVisualizerComponent } from '../../../components/roadmap/visualizer/visualizer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  collectionData,
  collection,
  getFirestore,
  getDocs,
} from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';
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
  public roadmaps: Roadmap[] = PLACEHOLDER_ROADMAPS;
  async ngOnInit(): Promise<void> {
    (
      await getDocs(
        collection(
          getFirestore(),
          `roadmaps/users/${(await firstValueFrom(this.auth.user))?.uid}`
        )
      )
    ).forEach((doc: any) => {
      this.roadmaps.push(doc);
    });
  }
  private auth = inject(AuthService);
  public getCourseSuggestions(roadmap: Roadmap): Course[] {
    return PLACEHOLDER_COURSES;
  }
  public getCourseProgress(roadmap: Roadmap): number {
    let completedSteps = 0;
    try {
      roadmap.steps.forEach((step) => {
        if (step.isCompleted) {
          completedSteps++;
        }
      });
      return (completedSteps / roadmap.steps.length) * 100;
    } catch {
      return 0;
    }
  }
}
