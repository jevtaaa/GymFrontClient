import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ClientEditComponent } from './client/client-edit/client-edit.component';

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

    ngrok: string = 'https://6a9e29721346.ngrok.io';

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