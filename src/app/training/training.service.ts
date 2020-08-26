import { Injectable } from '@angular/core';
import { SessionService } from '../session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Training } from '../models/training.model';

@Injectable({
    providedIn: 'root',
})
export class TrainingService {

    training: Training;

    constructor(private http: HttpClient, private router: Router, private session: SessionService, public authServ: AuthService) {

    }

    getTrainingById(id: number) {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
          }
          const httpOptions = {
            headers: new HttpHeaders({
              Authorization: this.authServ.token,
            })
        };
        return this.http.get(this.session.ngrok+'/trainings/'+id, httpOptions);
    }

    getTrainingDetails(id: number) {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
          }
          const httpOptions = {
            headers: new HttpHeaders({
              Authorization: this.authServ.token,
            })
        };
        return this.http.get(this.session.ngrok+'/trainings/details/'+id, httpOptions);
    }

    saveToHistory(training_id: number, comment: string) {
      if(this.authServ.token === undefined || this.authServ.token === null){
        this.router.navigateByUrl('/login');
      }
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: this.authServ.token,
        })
      };
      const httpBody = {
        "training_id": training_id,
        "comment": comment
      };
      return this.http.put(this.session.ngrok+'/history/add-history',httpBody, httpOptions);
    }
}
