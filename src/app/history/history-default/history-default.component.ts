import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { ClientService } from 'src/app/client/client.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TrainingService } from 'src/app/training/training.service';


@Component({
  selector: 'app-history-default',
  templateUrl: './history-default.component.html',
  styleUrls: ['./history-default.component.css']
})
export class HistoryDefaultComponent implements OnInit {

  history: History[];

  constructor(
    public session: SessionService,
    public clientService: ClientService,
    public authService: AuthService,
    public trainingService: TrainingService
  ) { }

  ngOnInit(): void {
    
  }

}
