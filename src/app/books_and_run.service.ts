import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //REMOVE THIS

export class FriendList {
    pk: number;
    user: any;
    players: any;
}


@Injectable()
export class BooksAndRunService {

    constructor(private http: Http) { }

    private headers = new Headers({'Content-Type': 'application/json'});

    players = [];

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
        var players = this.getPlayers();
        var game = {

            players: [],
            rounds: [
                {
                    roundNumber: undefined,
                    title: undefined,
                    winner: undefined,
                },
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
            ],
        }

        players.forEach(function(player){
            player['scores'] = {
                roundOne: undefined,
                roundTwo: undefined,
                roundThree: undefined,
                roundFour: undefined,
                roundFive: undefined,
                roundSix: undefined,
                roundSeven: undefined,
                getTotal: function(){
                    var total = 0;
                    if(!isNaN(parseInt(this.roundOne))) total+=parseInt(this.roundOne);
                    if(!isNaN(parseInt(this.roundTwo))) total+=parseInt(this.roundTwo);
                    if(!isNaN(parseInt(this.roundThree))) total+=parseInt(this.roundThree);
                    if(!isNaN(parseInt(this.roundFour))) total+=parseInt(this.roundFour);
                    if(!isNaN(parseInt(this.roundFive))) total+=parseInt(this.roundFive);
                    if(!isNaN(parseInt(this.roundSix))) total+=parseInt(this.roundSix);
                    if(!isNaN(parseInt(this.roundSeven))) total+=parseInt(this.roundSeven);

                    return total;
                }

            };
        });
        game.players = players;

        return game;
    }


}































// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import { FriendList } from './friendlist';

// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map'; //REMOVE THIS



// @Injectable()
// export class BooksAndRunService {

//     private headers = new Headers({'Content-Type': 'application/json'});
//     //private statisticsUrl = 'asdf/asdf';


//     constructor(private http: Http) { }



//     getFriendList() {
//         return this.http.get('https://django-scorekeeper-api.herokuapp.com/api/users/friendlist/1/')
//             .map(
//                 res => res.json().friends as FriendList[],
//             )
//     } 


//     private handleError(error: any): Promise<any> {
//         console.error('An error occurred', error); // for demo purposes only
//         return Promise.reject(error.message || error);
//      }





// }