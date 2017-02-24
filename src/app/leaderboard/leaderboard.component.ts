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
  categories: String[] = ["User", "Wins", "Low", "High"];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
     this.statisticsService.getStatistics()
      .subscribe(
                data => this.statistics = data
            )
  }


  sort(category): void {
    console.log(category);
  }


  sortByHighScore(): void {
    this.statistics.sort(function(item1, item2) {
       if ( item1.high_score < item2.high_score ){
	    	return -1;
	    }else if( item1.high_score > item2.high_score ){
	        return 1;
	    }else{
	    	return 0;	
	    }
     });
  }

  sortByLowScore(): void {
    this.statistics.sort(function(item1, item2) {
       if ( item1.low_score < item2.low_score ){
	    	return -1;
	    }else if( item1.low_score > item2.low_score ){
	        return 1;
	    }else{
	    	return 0;	
	    }
     });
  }


  sortByWins(): void {
    this.statistics.sort(function(item1, item2) {
       if ( item1.games_won > item2.games_won ){
	    	return -1;
	    }else if( item1.games_won < item2.games_won ){
	        return 1;
	    }else{
	    	return 0;	
	    }
     });
  }





}





// ngOnInit(): void {
//     this.statisticsService.getStatistics()
//       .then(statistics => this.statistics = statistics);
//   }
