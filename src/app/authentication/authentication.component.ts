import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

import { AuthenticationService } from '../authentication.service';


@Component({
  moduleId: module.id,
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})


export class AuthenticationComponent{
  constructor(public http: Http, private router: Router) { }


  user = {};


  login(event, username, password) {
      event.preventDefault();

      var creds = {
          username: username,
          password: password
      }

      var contentHeaders = new Headers();
      contentHeaders.append('Content-Type', 'application/json');

      
      this.http.post('https://django-scorekeeper-api.herokuapp.com/api/auth/token/', JSON.stringify(creds), {headers: contentHeaders})
        .subscribe(
            response => {
                console.log(response.json());
                localStorage.setItem('jwt_token', response.json().token);
                localStorage.setItem('user', JSON.stringify(response.json().user));
                this.router.navigate(['/dashboard'])
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
        )
  }


}














// login(event, username, password) {
//       event.preventDefault();

//       var creds = 'username=' + username + '&password=' + password;

//       var contentHeaders = new Headers();
//       contentHeaders.append('Content-Type', 'application/json');

      
//       this.http.post('http://localhost:8000/api/auth/token/', creds, {headers: contentHeaders})
//         .subscribe(
//             response => {
//                 console.log(response)
//                 localStorage.setItem('id_token', response.json().id_token);
//             },
//             error => {
//                 alert(error.text());
//                 console.log(error.text());
//             }
//         )
//   }