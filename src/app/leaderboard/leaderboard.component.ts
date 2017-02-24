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
  categories: any[] = [
    {
      title: "User",
      order: null,
    },
    {
      title: "Wins",
      order: null,
    },
    {
      title: "Low",
      order: null,
    },
    {
      title: "High",
      order: null,
    }
  ];



  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
     this.statisticsService.getStatistics()
      .subscribe(
                data => this.statistics = data
            )
  }



  sort(category, stats): void {
    switch(category.title) {
      case "User":
      if(category.order === "asc" || category.order === null) {
        stats.sort(function(item1, item2) {
          if ( item1.user.username < item2.user.username ){
            return -1;
          }else if( item1.user.username > item2.user.username ){
              return 1;
          }else{
            return 0;	
          }
        });
        category.order = "desc";
      } 
      else if(category.order ==="desc") {
        stats.sort(function(item1, item2) {
          if ( item1.user.username > item2.user.username ){
            return -1;
          }else if( item1.user.username < item2.user.username ){
              return 1;
          }else{
            return 0;	
          }
        });
        category.order = "asc";
      }
      break;

      case "Wins":
        if(category.order === "asc" || category.order === null) {
          stats.sort(function(item1, item2) {
            if ( item1.games_won < item2.games_won ){
              return -1;
            }else if( item1.games_won > item2.games_won ){
                return 1;
            }else{
              return 0;	
            }
          });
          category.order = "desc";
        } 
        else if(category.order ==="desc") {
          stats.sort(function(item1, item2) {
            if ( item1.games_won > item2.games_won ){
              return -1;
            }else if( item1.games_won < item2.games_won ){
                return 1;
            }else{
              return 0;	
            }
          });
          category.order = "asc";
        }
        break;
      case "Low":
        if(category.order === "asc" || category.order === null) {
          stats.sort(function(item1, item2) {
            if ( item1.low_score < item2.low_score ){
              return -1;
            }else if( item1.low_score > item2.low_score ){
                return 1;
            }else{
              return 0;	
            }
          });
          category.order = "desc";
        } 
        else if(category.order ==="desc") {
          stats.sort(function(item1, item2) {
            if ( item1.low_score > item2.low_score ){
              return -1;
            }else if( item1.low_score < item2.low_score ){
                return 1;
            }else{
              return 0;	
            }
          });
          category.order = "asc";
        }
        break;
    
      case "High":
        if(category.order === "asc" || category.order === null) {
          stats.sort(function(item1, item2) {
            if ( item1.high_score < item2.high_score ){
              return -1;
            }else if( item1.high_score > item2.high_score ){
                return 1;
            }else{
              return 0;	
            }
          });
          category.order = "desc";
        } 
        else if(category.order ==="desc") {
          stats.sort(function(item1, item2) {
            if ( item1.high_score > item2.high_score ){
              return -1;
            }else if( item1.high_score < item2.high_score ){
                return 1;
            }else{
              return 0;	
            }
          });
          category.order = "asc";
        }
        break;

    default:
      confirm("Sorry, somethings went wrong.");   
    }
  }

}