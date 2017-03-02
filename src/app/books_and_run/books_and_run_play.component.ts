import { Component, OnInit } from '@angular/core';
import { BooksAndRunService } from '../books_and_run.service';



@Component({
  moduleId: module.id,
  selector: 'books-and-run-play',
  templateUrl: './books_and_run_play.component.html',
  styleUrls: ['./books_and_run_play.component.css'],
})


export class BooksAndRunPlayComponent implements OnInit {
  constructor(private booksAndRunService: BooksAndRunService) { }
  currentRound = 1;

  rounds = [
    {title: ""},
    {title: "Round 1"},
    {title: "Round 2"},
    {title: "Round 3"},
    {title: "Round 4"},
    {title: "Round 5"},
    {title: "Round 6"},
    {title: "Round 7"},
  ]

  players = [];



  ngOnInit(): void {
    this.players = this.booksAndRunService.getPlayers();

    for(var i=0; i<this.players.length; i++){
      this.players[i]['total'] = 0;
      this.players[i]['round1'] = null;
      this.players[i]['round2'] = null;
      this.players[i]['round3'] = null;
      this.players[i]['round4'] = null;
      this.players[i]['round5'] = null;
      this.players[i]['round6'] = null;
      this.players[i]['round7'] = null;
      this.players[i]['getTotal'] = function(){
        this.total = 0;
        if(!isNaN(parseInt(this.round1))) this.total+=parseInt(this.round1);
        if(!isNaN(parseInt(this.round2))) this.total+=parseInt(this.round2);
        if(!isNaN(parseInt(this.round3))) this.total+=parseInt(this.round3);
        if(!isNaN(parseInt(this.round4))) this.total+=parseInt(this.round4);
        if(!isNaN(parseInt(this.round5))) this.total+=parseInt(this.round5);
        if(!isNaN(parseInt(this.round6))) this.total+=parseInt(this.round6);
        if(!isNaN(parseInt(this.round7))) this.total+=parseInt(this.round7);
        return this.total;
      }
    }

  }



  saveData(players): void {
    console.log(this.calculateRoundWinner('round1'));
  }

  calculateRoundWinner(round): number {
    var lowscore = this.players[0].round1;
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].round1 < lowscore){
        lowscore = this.players[i].round1
      }
    }
    return lowscore
  }
  


}















































// import { Component, OnInit } from '@angular/core';
// import { BooksAndRunService } from '../books_and_run.service';



// @Component({
//   moduleId: module.id,
//   selector: 'books-and-run-play',
//   templateUrl: './books_and_run_play.component.html',
//   styleUrls: ['./books_and_run_play.component.css'],
// })


// export class BooksAndRunPlayComponent implements OnInit {
//   constructor(private booksAndRunService: BooksAndRunService) { }
//   currentRound = 1;

//   rounds = [
//     {title: "Name"},
//     {title: "Round 1"},
//     {title: "Round 2"},
//     {title: "Round 3"},
//     {title: "Round 4"},
//     {title: "Round 5"},
//     {title: "Round 6"},
//     {title: "Round 7"},
//   ]

//   players = [
//     {
//       name: "Aaron",
//       round1: 34,
//       round2: 53,
//       round3: 65,
//       round4: 65,
//       round5: 32,
//       round6: 37,
//       round7: 63,
//     },
//     {
//       name: "Bethany",
//       round1: 76,
//       round2: 34,
//       round3: 97,
//       round4: 54,
//       round5: 23,
//       round6: 37,
//       round7: 63,
//     },
//     {
//       name: "Jared",
//       round1: 93,
//       round2: 16,
//       round3: 96,
//       round4: 45,
//       round5: 28,
//       round6: 53,
//       round7: 75,
//     },
//     {
//       name: "Bryon",
//       round1: 23,
//       round2: 46,
//       round3: 84,
//       round4: 234,
//       round5: 362,
//       round6: 23,
//       round7: 753,
//     },
//     {
//       name: "Amanda",
//       round1: 43,
//       round2: 456,
//       round3: 675,
//       round4: 34,
//       round5: 84,
//       round6: 39,
//       round7: 62,
//     },
//     {
//       name: "Deborah",
//       round1: 74,
//       round2: 23,
//       round3: 75,
//       round4: 34,
//       round5: 86,
//       round6: 96,
//       round7: 54,
//     },
//   ];



//   ngOnInit(): void {
//     // this.players = this.booksAndRunService.getPlayers();

//   }

// }
