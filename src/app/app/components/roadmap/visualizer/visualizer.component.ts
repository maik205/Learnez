import { Component, input, InputSignal } from '@angular/core';
import { RoadmapStep } from '../../../../services/interfaces/roadmap.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'roadmap-visualizer',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './visualizer.component.html',
  styleUrl: './visualizer.component.scss',
})
export class RoadmapVisualizerComponent {
  public roadmapSteps: InputSignal<RoadmapStep[]> = input.required();
  public orientation: InputSignal<'horizontal' | 'vertical'> = input<
    'horizontal' | 'vertical'
  >('horizontal');
}
