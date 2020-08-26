import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpened = false;
  title = 'gymClient';

  constructor(
    public authServ: AuthService
    ) {}

  toggleSideMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
