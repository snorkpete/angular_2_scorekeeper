import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Scorekeeper';
  user = {};

  ngOnInit(): void{
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
