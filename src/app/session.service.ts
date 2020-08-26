import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { MatDialogRef } from '@angular/material/dialog';
import { TrainingExerciseComponent } from './training/training-exercise/training-exercise.component';
import { TrainingArchiveComponent } from './training/training-archive/training-archive.component';

@Injectable({
    providedIn: 'root',
})
export class SessionService {

    loginSpinnerFlag: boolean;
    homeSpinnerFlag: boolean;
    historySpinnerFlag: boolean;
    trainingSpinnerFlag: boolean;
    dialogSpinnerFlag: boolean;
    bottomSheetSpinnerFlag: boolean;

    editBottomSheetRef: MatBottomSheetRef<ClientEditComponent>;
    exercisesDialogRef: MatDialogRef<TrainingExerciseComponent>;
    archiveTrainingDialogRef: MatDialogRef<TrainingArchiveComponent>;

    ngrok: string = 'https://601cbba787ce.ngrok.io';

    constructor(public snackBar: MatSnackBar) {}

    config: MatSnackBarConfig = {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
    }

    successSnackBar(msg: string) {
        this.snackBar.open(msg, '', this.config);
    }
}