import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { AuthService } from '../auth/auth.service';
import { CoachService } from '../coach/coach.service';
import { TrainingService } from '../training/training.service';
import { Coach } from '../models/coach.model';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authServ: AuthService,
    public session: SessionService,
    public coachService: CoachService,
    public trainingService: TrainingService
  ) { }

  ngOnInit(): void {
    this.session.homeSpinnerFlag = true;
    this.coachService.getCoach(this.authServ.loggedClient.getCoach().getId())
    .subscribe((data: any) => {
      const coach = new Coach(data.coach_id, data.username, data.name, data.surname, data.email, data.bio);
      this.authServ.loggedClient.setCoach(coach);
      this.coachService.coach = coach;
      console.log(coach);
      this.session.homeSpinnerFlag = false;
      if(this.authServ.loggedClient.getTraining() != null && this.authServ.loggedClient.getTraining() != undefined){
        this.trainingService.getTrainingById(this.authServ.loggedClient.getTraining().getId())
        .subscribe((data1: any) => {
          const training = new Training(data1.training_id, data1.name, data1.description, data1.date);
          this.authServ.loggedClient.setTraining(training);
          this.trainingService.training = training;
          console.log(training);
          this.session.homeSpinnerFlag = false;
        })
      } else {
        this.authServ.loggedClient.setTraining(null);
        console.log(this.authServ.loggedClient.getTraining());
        this.session.homeSpinnerFlag = false;
      }
    })
  }

}
