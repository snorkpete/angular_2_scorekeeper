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

    preparePlayers(players) {

        for(var i=0; i<this.players.length; i++){
            players[i]['total'] = null;
            players[i]['round1'] = null;
            players[i]['round2'] = null;
            players[i]['round3'] = null;
            players[i]['round4'] = null;
            players[i]['round5'] = null;
            players[i]['round6'] = null;
            players[i]['round7'] = null;
            players[i]['getTotal'] = function(){
                this.total = null;
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
        return players;
    }

    prepareRounds() {
        var rounds = [
            {title: ""},
            {title: "Round 1"},
            {title: "Round 2"},
            {title: "Round 3"},
            {title: "Round 4"},
            {title: "Round 5"},
            {title: "Round 6"},
            {title: "Round 7"},
        ]

        return rounds;
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