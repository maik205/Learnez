import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { RoadmapVisualizerComponent } from '../../../components/roadmap/visualizer/visualizer.component';
import { RoadmapStep } from '../../../../services/interfaces/roadmap.interface';
import { doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RoadmapVisualizerComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewRoadmapComponent implements OnInit {
  public roadmapSteps: RoadmapStep[] = [];
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);
  async ngOnInit(): Promise<void> {
    try {
      const userId = (await firstValueFrom(this.authService.user))?.uid;
      const roadmapId = (await firstValueFrom(this.activatedRoute.params))[
        'id'
      ];
      this.roadmapSteps = (
        await getDoc(
          doc(getFirestore(), `roadmaps/users/${userId}/${roadmapId}`)
        )
      ).data()!['roadmap'];
    } catch (e) {
      this.router.navigate(['/learner/roadmap/new']);
    }
  }
}
