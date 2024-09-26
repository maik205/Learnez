import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoadmapComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewRoadmapComponent;
  let fixture: ComponentFixture<NewRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRoadmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
