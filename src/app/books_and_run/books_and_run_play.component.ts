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

  players = [];
  rounds = [];
  roundOneWinner = {};
  roundTwoWinner = {};
  roundThreeWinner = {};
  roundFourWinner = {};
  roundFiveWinner = {};
  roundSixWinner = {};
  roundSevenWinner = {};
  gameWinner = {};



  ngOnInit(): void {
    this.players = this.booksAndRunService.getPlayers();
    this.players = this.booksAndRunService.preparePlayers(this.players);
    this.rounds = this.booksAndRunService.prepareRounds();
  }

  calculateStats(): void {
    var roundOneWinner = null;
    var roundTwoWinner = null;
    var roundThreeWinner = null;
    var roundFourWinner = null;
    var roundFiveWinner = null;
    var roundSixWinner = null;
    var roundSevenWinner = null;
    var gameWinner = null;

    var winner = this.players[0];
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].round1 < winner.round1){
        winner = this.players[i]
      }
    }
    this.roundOneWinner = winner;

    winner = this.players[0];
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].round2 < winner.round2){
        winner = this.players[i]
      }
    }
    this.roundTwoWinner = winner;

    winner = this.players[0];
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].round3 < winner.round3){
        winner = this.players[i]
      }
    }
    this.roundThreeWinner = winner;

    winner = this.players[0];
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].round4 < winner.round4){
        winner = this.players[i]
      }
    }
    this.roundFourWinner = winner;

    winner = this.players[0];
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].round5 < winner.round5){
        winner = this.players[i]
      }
    }
    this.roundFiveWinner = winner;

    winner = this.players[0];
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].round6 < winner.round6){
        winner = this.players[i]
      }
    }
    this.roundSixWinner = winner;

    winner = this.players[0];
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].round7 < winner.round7){
        winner = this.players[i]
      }
    }
    this.roundSevenWinner = winner;

    winner = this.players[0];
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].total < winner.total){
        winner = this.players[i]
      }
    }
    this.gameWinner = winner;

    
  }






}