import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapVisualizerComponent } from './visualizer.component';

describe('VisualizerComponent', () => {
  let component: RoadmapVisualizerComponent;
  let fixture: ComponentFixture<RoadmapVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapVisualizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
