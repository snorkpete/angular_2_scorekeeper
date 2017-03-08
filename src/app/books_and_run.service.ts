import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Game, Player, Score, Round } from './books_and_run/books_and_run.classes'


@Injectable()
export class BooksAndRunService {

    players: Player[];

    getPlayers() {
        return this.players;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    removePlayer(player) {
        for(var i=0; i<this.players.length; i++) {
            if(this.players[i].pk === player.pk) {
                this.players.splice(i, 1);
            }
        }
    }

    resetPlayers() {
        this.players = [];
    }

    prepareGame(){
      // Initialize game variables
      let players: Player[] = this.getPlayers();
      let rounds: Round[] = [
        {
            roundNumber: 1,
            title: "Round 1",
            description: "2 Books",
            winner: undefined,
        },
        {
            roundNumber: 2,
            title: "Round 2",
            description: "1 Book 1 Run",
            winner: undefined,
        },
        {
            roundNumber: 3,
            title: "Round 3",
            description: "2 Runs",
            winner: undefined,
        },
        {
            roundNumber: 4,
            title: "Round 4",
            description: "3 Books",
            winner: undefined,
        },
        {
            roundNumber: 5,
            title: "Round 5",
            description: "2 Books 1 Run",
            winner: undefined,
        },
        {
            roundNumber: 6,
            title: "Round 6",
            description: "2 Runs 1 Book",
            winner: undefined,
         },
        {
            roundNumber: 7,
            title: "Round 7",
            description: "3 Runs",
            winner: undefined,
        },
        {
            roundNumber: 0,
            title: "Total",
            description: "undefined",
            winner: undefined,
        },
      ];
      let game: Game = {
        players: [],
        rounds: [],
      };

      // Attach a 'scores' property to each player in the game
      players.forEach(function(player){
          player['scores'] = new Score(null);
      });

      // Attach the initalized variables to the game.
      game.players = players;
      game.rounds = rounds;

      return game;

    }

    incrementGamesPlayed() {

    }


}



























// prepareGame(){
//     var players = this.getPlayers();
//     var game = {
//
//         players: [],
//         rounds: [
//             {
//                 roundNumber: 1,
//                 title: "Round 1",
//                 description: "2 Books",
//                 winner: undefined,
//             },
//             {
//                 roundNumber: 2,
//                 title: "Round 2",
//                 description: "1 Book 1 Run",
//                 winner: undefined,
//             },
//             {
//                 roundNumber: 3,
//                 title: "Round 3",
//                 description: "2 Runs",
//                 winner: undefined,
//             },
//             {
//                 roundNumber: 4,
//                 title: "Round 4",
//                 description: "3 Books",
//                 winner: undefined,
//             },
//             {
//                 roundNumber: 5,
//                 title: "Round 5",
//                 description: "2 Books 1 Run",
//                 winner: undefined,
//             },
//             {
//                 roundNumber: 6,
//                 title: "Round 6",
//                 description: "2 Runs 1 Book",
//                 winner: undefined,
//              },
//             {
//                 roundNumber: 7,
//                 title: "Round 7",
//                 description: "3 Runs",
//                 winner: undefined,
//             },
//             {
//                 title: "Total",
//             },
//         ],
//     }
//
//     players.forEach(function(player){
//         player['scores'] = {
//             roundOne: undefined,
//             roundTwo: undefined,
//             roundThree: undefined,
//             roundFour: undefined,
//             roundFive: undefined,
//             roundSix: undefined,
//             roundSeven: undefined,
//             getTotal: function(){
//                 var total = 0;
//                 if(!isNaN(parseInt(this.roundOne))) total+=parseInt(this.roundOne);
//                 if(!isNaN(parseInt(this.roundTwo))) total+=parseInt(this.roundTwo);
//                 if(!isNaN(parseInt(this.roundThree))) total+=parseInt(this.roundThree);
//                 if(!isNaN(parseInt(this.roundFour))) total+=parseInt(this.roundFour);
//                 if(!isNaN(parseInt(this.roundFive))) total+=parseInt(this.roundFive);
//                 if(!isNaN(parseInt(this.roundSix))) total+=parseInt(this.roundSix);
//                 if(!isNaN(parseInt(this.roundSeven))) total+=parseInt(this.roundSeven);
//
//                 return total;
//             }
//
//         };
//     });
//     game.players = players;
//
//     return game;
// }
