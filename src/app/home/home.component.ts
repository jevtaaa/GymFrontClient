import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authServ: AuthService,
    public session: SessionService 
  ) { }

  ngOnInit(): void {
  }

}
