import { Component, OnInit } from '@angular/core';
import { Coach } from '../models/coach.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  coach: Coach;
  constructor(public authServ: AuthService) { 
    this.coach = authServ.loggedClient.getCoach();
  }

  ngOnInit(): void {
  }

}
