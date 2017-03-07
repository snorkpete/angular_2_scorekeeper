import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent {
  user = {}

  name: string = 'Aaron';
  games: any[] = [
    {
      title: "Book and Run",
      start_game_url: "http://localhost:4200/books_and_run/create",
      view_stats_url: "#",
      img_url: "../assets/images/books_and_run.jpg",
    },
    {
      title: "Oh Crap",
      start_game_url: "#",
      view_stats_url: "#",
      img_url: "../assets/images/oh_crap.jpg",
    },
    {
      title: "Scum",
      start_game_url: "#",
      view_stats_url: "#",
      img_url: "http://placehold.it/236x180",
    },
  ];

}
