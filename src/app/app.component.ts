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
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout(): void {
    this.authenticationService.clearToken();
  }

}
