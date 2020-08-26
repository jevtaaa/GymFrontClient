import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Client } from '../models/client.model';
import { SessionService } from '../session.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuth = false;
    loggedClient: Client;
    token: string;
    
    constructor(private http: HttpClient, private router: Router, private session: SessionService) {

    }

    logIn(username: string, password: string) {
        const httpBody = {
            "username": username,
            "password": password
          };
          return this.http.patch(this.session.ngrok + '/clients/login', httpBody);
    }

    logOut() {
        localStorage.clear();
        this.token = '';
        this.loggedClient = null;
        this.isAuth = false;
        this.router.navigateByUrl('/login');
      }
}