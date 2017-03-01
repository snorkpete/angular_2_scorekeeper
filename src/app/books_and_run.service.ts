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