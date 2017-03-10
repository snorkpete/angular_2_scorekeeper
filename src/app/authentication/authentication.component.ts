import { Component } from '@angular/core';

import { AuthenticationService } from './authentication.service';


@Component({
  moduleId: module.id,
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})


export class AuthenticationComponent{
  constructor(private authenticationService: AuthenticationService) { }

  // login(event, username, password) {
  //     event.preventDefault();
  //     this.authenticationService.getToken(username, password)
  // }

  // logout() {
  //   this.authenticationService.clearToken();
  // }


}
