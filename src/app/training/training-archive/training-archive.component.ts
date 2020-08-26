import { Component, OnInit, Inject } from '@angular/core';
import { Training } from 'src/app/models/training.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SessionService } from 'src/app/session.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training-archive',
  templateUrl: './training-archive.component.html',
  styleUrls: ['./training-archive.component.css']
})
export class TrainingArchiveComponent implements OnInit {

  training: Training;
  addToHistory: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public session: SessionService,
    public dialogRef: MatDialogRef<TrainingArchiveComponent>,
    public trainingService: TrainingService
  ) { 
    this.training = data.training;
    this.session.archiveTrainingDialogRef = dialogRef;
  }

  initForm() {
    this.addToHistory = new FormGroup({
      comment: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  addHistory() {
    this.session.dialogSpinnerFlag = true;
    let comment = this.addToHistory.controls.comment.value;
    let training_id = this.training.getId();
    this.trainingService.saveToHistory(training_id, comment)
    .subscribe(data => {
      console.log(data);
      this.session.dialogSpinnerFlag = false;
      this.dialogRef.close();
    })
  }

  close() {
    this.session.archiveTrainingDialogRef.close();
  }
}
