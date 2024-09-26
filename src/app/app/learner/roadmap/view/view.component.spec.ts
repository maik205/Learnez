import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoadmapComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewRoadmapComponent;
  let fixture: ComponentFixture<ViewRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRoadmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
