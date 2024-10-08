import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: RoadmapDashboardComponent;
  let fixture: ComponentFixture<RoadmapDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
