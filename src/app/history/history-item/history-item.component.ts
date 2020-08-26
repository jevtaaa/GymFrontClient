import { Component, OnInit, Input } from '@angular/core';
import { History } from 'src/app/models/history.model';
import { MatDialog } from '@angular/material/dialog';
import { TrainingExerciseComponent } from 'src/app/training/training-exercise/training-exercise.component';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  @Input() history: History;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openExerciseDialog() {
    const dialogRef = this.dialog.open(TrainingExerciseComponent, {
      width: '1000px',
      data: { training: this.history.getTraining() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
