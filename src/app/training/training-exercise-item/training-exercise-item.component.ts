import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';
import { SessionService } from 'src/app/session.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-training-exercise-item',
  templateUrl: './training-exercise-item.component.html',
  styleUrls: ['./training-exercise-item.component.css']
})
export class TrainingExerciseItemComponent implements OnInit {

  @Input() exercise: Exercise;
  rb: number;
  constructor(
    public session: SessionService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.rb = this.exercise.getId();
  }

}
