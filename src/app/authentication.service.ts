import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //REMOVE THIS



@Injectable()
export class AuthenticationService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }


    getToken(user) {
        return this.http.get('localhost:8000/api/auth/token/')
            .map(
                res => res.json().friends,
            )
    } 


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
     }





}