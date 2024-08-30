import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LUser } from './luser.model';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
     
    constructor(private http: HttpClient) {}
      
    myleague(user:LUser) {
        // this is just the HTTP call, 
        return this.http.post<any>('http://zedpea.co.in/api/myleauge.php', user);

        // we still need to handle the reception of the token
        // .shareReplay();
    }

    league() {
        // this is just the HTTP call, 
        return this.http.get<any>('http://zedpea.co.in/api/leauge.php');

        // we still need to handle the reception of the token
        // .shareReplay();
    }
}