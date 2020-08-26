import { Component, OnInit, Inject } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-training-exercise',
  templateUrl: './training-exercise.component.html',
  styleUrls: ['./training-exercise.component.css']
})
export class TrainingExerciseComponent implements OnInit {

  exercises: Exercise[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public session: SessionService,
    public dialogRef: MatDialogRef<TrainingExerciseComponent>
  ) { 
    this.session.exercisesDialogRef = this.dialogRef;
    this.exercises = data.training.getExercises();
  }

  ngOnInit(): void {
  }

  close() {
    this.session.exercisesDialogRef.close();
  }

}
