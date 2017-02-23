import { Component, OnInit } from '@angular/core';

import { Statistics } from '../statistics';
import { StatisticsService } from '../leaderboard.service';

@Component({
  moduleId: module.id,
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})


export class LeaderboardComponent implements OnInit {

  statistics: Statistics[] = [];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
     this.statisticsService.getStatistics()
      .subscribe(
                data => this.statistics = data
            )
  }





}





// ngOnInit(): void {
//     this.statisticsService.getStatistics()
//       .then(statistics => this.statistics = statistics);
//   }
