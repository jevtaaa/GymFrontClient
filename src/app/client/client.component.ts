import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from '../auth/auth.service';
import { ClientEditComponent } from '../client/client-edit/client-edit.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public authServ: AuthService, private bottomSheet: MatBottomSheet) { }

  openEditBottomSheet(): void {
    this.bottomSheet.open(ClientEditComponent, {
      data: { contract: this.authServ.loggedClient },
    });
  }

  ngOnInit(): void {
  }

}
