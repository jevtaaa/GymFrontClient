import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingArchiveComponent } from './training-archive.component';

describe('TrainingArchiveComponent', () => {
  let component: TrainingArchiveComponent;
  let fixture: ComponentFixture<TrainingArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
