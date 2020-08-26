import { Component, OnInit, Inject } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/auth/auth.service';
import { ClientService } from '../client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  editClientForm: FormGroup;
  
  constructor(
    public session: SessionService, 
    public bottomSheetRef: MatBottomSheetRef<ClientEditComponent>, 
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public clientService: ClientService,
    public authServ: AuthService,
  ) {
    this.session.editBottomSheetRef = this.bottomSheetRef;
   }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.editClientForm = new FormGroup({
      Username: new FormControl(this.data.contract.getUsername().trim(), [
        Validators.required,
      ]),
      Name: new FormControl(this.data.contract.getName().trim(), [
        Validators.required,
      ]),
      Surname: new FormControl(this.data.contract.getSurname().trim(), [
        Validators.required,
      ]),
      Email: new FormControl(this.data.contract.getEmail().trim(), [
        Validators.required,
      ]),
      Biography: new FormControl(this.data.contract.getBio().trim(), [
        Validators.maxLength(255)
      ]),
      Height: new FormControl(this.data.contract.getHeight(), [
        Validators.required
      ]),
      Weight: new FormControl(this.data.contract.getWeight(), [
        Validators.required
      ]),
      Password: new FormControl(this.data.contract.getPassword().trim(), [
        Validators.required,
      ]),
    });
  }

  editClient() {
    this.session.bottomSheetSpinnerFlag = true;
    let name = this.editClientForm.controls.Name.value;
    let surname = this.editClientForm.controls.Surname.value;
    let email = this.editClientForm.controls.Email.value;
    let username = this.editClientForm.controls.Username.value;
    let password = this.editClientForm.controls.Password.value;
    let bio = this.editClientForm.controls.Biography.value;
    let height = this.editClientForm.controls.Height.value;
    let weight = this.editClientForm.controls.Weight.value;

    this.clientService.updateClient(name, surname, username, email, password, bio, height, weight)
    .subscribe((data: any) => {
      this.session.bottomSheetSpinnerFlag = false;
      this.authServ.loggedClient.setName(data.name);
      this.authServ.loggedClient.setSurname(data.surname);
      this.authServ.loggedClient.setHeight(data.height);
      this.authServ.loggedClient.setEmail(data.email);
      this.authServ.loggedClient.setUsername(data.username);
      if(this.authServ.loggedClient.getBio().trim().length == 0 || this.authServ.loggedClient.getBio() === null || this.authServ.loggedClient.getBio() === undefined){
        this.authServ.loggedClient.setBio("No biography");
      }
      this.authServ.loggedClient.setBio(data.bio);
      this.authServ.loggedClient.setPassword(data.password);
      this.authServ.loggedClient.setWeight(data.weight);
      this.session.editBottomSheetRef.dismiss();
      this.session.successSnackBar("Successfully saved!");
    }, (err) => {
      console.log(err.error.msg);
      this.session.bottomSheetSpinnerFlag = false;
      this.session.successSnackBar(err.error.msg);
      this.session.editBottomSheetRef.dismiss();
    })
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

}
