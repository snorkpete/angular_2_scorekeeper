import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})


export class LeaderboardComponent {

  name: string = 'Aaron';
  names: any[] = [];

}
