import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //REMOVE THIS



@Injectable()
export class AuthenticationService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private router: Router) { }


    getToken(username, password) {console.log('getting token');
        var creds = {
          username: username,
          password: password,
        }

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('https://django-scorekeeper-api.herokuapp.com/api/auth/get_token/', JSON.stringify(creds), {headers: headers})

    }

    clearToken() {
      localStorage.removeItem('jwt_token');
      localStorage.removeItem('user');
    }

    verifyToken() {
      var token = localStorage.getItem('jwt_token');

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('https://django-scorekeeper-api.herokuapp.com/api/auth/verifyToken/', token, {headers: headers})
        .subscribe(
          response => {
            
          }
        )
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
     }

}







// getToken(username, password) {console.log('getting token');
//     var creds = {
//       username: username,
//       password: password,
//     }
//
//     var headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//
//     this.http.post('https://django-scorekeeper-api.herokuapp.com/api/auth/get_token/', JSON.stringify(creds), {headers: headers})
//       .subscribe(
//         response => {
//           localStorage.setItem('jwt_token', response.json().token);
//           localStorage.setItem('user', JSON.stringify(response.json().user));
//           // this.router.navigate(['/dashboard']);
//         }
//       )
// }
