import { Injectable } from '@angular/core';
import { SessionService } from '../session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class ClientService {

    constructor(private http: HttpClient, private router: Router, private session: SessionService, public authServ: AuthService) {

    }

    updateClient(name:string, surname:string, username: string, email: string, password: string, bio: string, height: number, weight: number) {
        if(this.authServ.token === undefined || this.authServ.token === null){
          this.router.navigateByUrl('/login');
        }
        const httpOptions = {
          headers: new HttpHeaders({
            Authorization: this.authServ.token,
          })
        };
        const httpBody = {
          "name": name,
          "surname": surname,
          "username": username,
          "email": email,
          "password": password,
          "bio": bio,
          "weight": weight,
          "height": height
        };
        return this.http.put(this.session.ngrok+'/clients/edit',httpBody, httpOptions);
      }

      getHistory() {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
        }
        const httpOptions = {
            headers: new HttpHeaders({
            Authorization: this.authServ.token,
        })};
        return this.http.get(this.session.ngrok+'/history', httpOptions);
    }
}