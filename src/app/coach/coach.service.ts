import { Injectable } from '@angular/core';
import { SessionService } from '../session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Coach } from '../models/coach.model';

@Injectable({
    providedIn: 'root',
})
export class CoachService {

    coach: Coach;

    constructor(private http: HttpClient, private router: Router, private session: SessionService, public authServ: AuthService) {

    }

    getCoach(id: number) {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
          }
          const httpOptions = {
            headers: new HttpHeaders({
              Authorization: this.authServ.token,
            })
        };
        return this.http.get(this.session.ngrok+'/coaches/'+id, httpOptions);
    }
}