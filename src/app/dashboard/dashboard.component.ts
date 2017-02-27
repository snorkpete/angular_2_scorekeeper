import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent {

  name: string = 'Aaron';
  games: any[] = [
    {
      title: "Book and Run",
      start_game_url: "#",
      view_stats_url: "#",
      img_url: "http://placehold.it/236x180",
    },
    {
      title: "Oh Crap",
      start_game_url: "#",
      view_stats_url: "#",
      img_url: "http://placehold.it/236x180",
    },
    {
      title: "Scum",
      start_game_url: "#",
      view_stats_url: "#",
      img_url: "http://placehold.it/236x180",
    },
  ];

}
