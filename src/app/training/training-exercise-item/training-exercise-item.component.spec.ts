import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingExerciseItemComponent } from './training-exercise-item.component';

describe('TrainingExerciseItemComponent', () => {
  let component: TrainingExerciseItemComponent;
  let fixture: ComponentFixture<TrainingExerciseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingExerciseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingExerciseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
