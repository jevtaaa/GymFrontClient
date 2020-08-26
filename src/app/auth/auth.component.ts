import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../session.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { Client } from '../models/client.model';
import { Training } from '../models/training.model';
import { Coach } from '../models/coach.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(public session: SessionService, public authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = new FormGroup({
      userName: new FormControl('nikf97', [Validators.required]),
      password: new FormControl('nikf1997', [Validators.required]),
    });
  }

  logIn() {
    this.session.loginSpinnerFlag = true;
    this.authServ.logIn(this.authForm.controls.userName.value, this.authForm.controls.password.value)
    .subscribe((data:any) => {
      if(data==null){
        return;
      }
      this.authServ.isAuth = true;
      this.authServ.token = 'Bearer ' + data.token;
      const client = plainToClass(Client, data);
      if(data.training_id){
        let training = new Training(data.training_id);
        client.setTraining(training);
      }
      let coach = new Coach(data.coach_id);
      if(client.getBio() === null || client.getBio() === undefined || client.getBio().trim().length == 0){
        client.setBio("No biography");
      }
      client.setCoach(coach);
      this.authServ.loggedClient = client;
      this.session.loginSpinnerFlag = false;
      console.log("ULOGOVAN");
      console.log(this.authServ.loggedClient);
      this.router.navigateByUrl('/home');
    }, (err) => {
      if(err.status === 404) {
        this.session.loginSpinnerFlag = false;
        this.session.successSnackBar("Wrong username or password!");
      }
    });
  }

}
