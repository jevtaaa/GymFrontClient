import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training.model';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { TrainingService } from '../training/training.service';
import { SessionService } from '../session.service';
import { map } from 'rxjs/operators';
import { Exercise } from '../models/exercise.model';
import { plainToClass } from 'class-transformer';
import { TrainingExerciseComponent } from './training-exercise/training-exercise.component';
import { TrainingArchiveComponent } from './training-archive/training-archive.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  training: Training;

  constructor(
    public authServ: AuthService,
    public session: SessionService,
    public trainingService: TrainingService,
    public dialog: MatDialog
    ) {
    this.training = this.authServ.loggedClient.getTraining();
  }

  ngOnInit(): void {
    if(this.training!=null){
      this.session.trainingSpinnerFlag = true;
      this.trainingService.getTrainingDetails(this.training.getId())
     .pipe(map((response1 => {
      const exerciseTraining: Exercise[] = [];
      for(const key in response1){
        if(response1.hasOwnProperty(key)) {
          const exercise = plainToClass(Exercise, response1[key]);
          exerciseTraining.push(exercise);
        }
      }
      return exerciseTraining;
     }))).subscribe(response2 => {
      this.training.setExercises(response2);
      this.trainingService.training.setExercises(response2);
      this.session.trainingSpinnerFlag = false;
      console.log(this.training);
    })
    }else {
      console.log(this.training);
    }
    
  }

  openExerciseDialog() {
    const dialogRef = this.dialog.open(TrainingExerciseComponent, {
      width: '1000px',
      data: { training: this.training },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openArchiveDialog() {
    const dialogRef = this.dialog.open(TrainingArchiveComponent, {
      width: '600px',
      data: { training: this.training },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
