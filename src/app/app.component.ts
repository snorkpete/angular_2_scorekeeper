import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService ) { }

  title = 'Scorekeeper';
  user = {};

  ngOnInit(): void{
    console.log('Executing ngOnInit of app.component...')
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  login(event, username, password) {
      event.preventDefault();
      this.authenticationService.getToken(username, password)
  }

  logout(): void {
    this.authenticationService.clearToken();
  }

}
