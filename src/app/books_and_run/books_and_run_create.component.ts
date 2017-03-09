import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FriendList } from '../friendlist';
import { FriendService } from '../friend.service';
import { BooksAndRunService } from '../books_and_run.service';


@Component({
  moduleId: module.id,
  selector: 'books-and-run-create',
  templateUrl: './books_and_run_create.component.html',
  styleUrls: ['./books_and_run_create.component.css'],
})


export class BooksAndRunCreateComponent implements OnInit {
  constructor(private friendService: FriendService, private booksAndRunService: BooksAndRunService, private router: Router) { }

  isRequesting: boolean;
  name: string = 'Aaron';
  friendList: FriendList[] = [];
  players: any[] = [];

  private stopRefreshing() {
    this.isRequesting = false;
  }


  ngOnInit(): void {
    this.booksAndRunService.resetPlayers();
    this.isRequesting = true;
    this.friendService
      .getFriendList()
        .subscribe(
          data => this.friendList = data,
          () => this.stopRefreshing(),
          () => this.stopRefreshing(),
        )
  }

  addPlayer(player): void {
    this.booksAndRunService.addPlayer(player);
    for(var i=0; i<this.friendList.length; i++) {
            if(this.friendList[i].pk === player.pk) {
                this.friendList.splice(i, 1);
            }
        }
    this.players = this.booksAndRunService.getPlayers();
  }

  removePlayer(player): void {
    this.booksAndRunService.removePlayer(player);
    this.friendList.push(player);
    this.players = this.booksAndRunService.getPlayers();
  }

  goToGame(): void {
    console.log("Going to game")
    this.router.navigate(['/books_and_run/play'])
  }





}






// ngOnInit(): void {
//     this.isRequesting = true;
//     this.booksAndRunService
//       .getFriendsFromDb()
//         .subscribe(
//           data => this.friendList = data,
//           () => this.stopRefreshing(),
//           () => this.stopRefreshing(),
//         )
//   }
















// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// import { FriendList } from '../friendlist';
// import { FriendService } from '../friend.service';
// import { BooksAndRunService } from '../books_and_run.service';


// @Component({
//   moduleId: module.id,
//   selector: 'books-and-run-create',
//   templateUrl: './books_and_run_create.component.html',
//   styleUrls: ['./books_and_run_create.component.css'],
// })


// export class BooksAndRunCreateComponent implements OnInit {
//   constructor(private friendService: FriendService, private booksAndRunService: BooksAndRunService, private router: Router) { }

//   isRequesting: boolean;
//   name: string = 'Aaron';
//   friendList: FriendList[] = [];
//   players: any[] = [];

//   private stopRefreshing() {
//     this.isRequesting = false;
//   }


//   ngOnInit(): void {
//     this.isRequesting = true;
//     this.friendService
//       .getFriendList()
//         .subscribe(
//           data => this.friendList = data,
//           () => this.stopRefreshing(),
//           () => this.stopRefreshing(),
//         )
//   }


//   addPlayer(player): void {
//     this.players.push(player);

//     for(var i=0; i<this.friendList.length; i++) {
//       if(this.friendList[i].pk === player.pk) {
//         this.friendList.splice(i, 1);
//       }
//     }
//   }


//   removePlayer(player): void {
//     this.friendList.push(player);

//     for(var i=0; i<this.players.length; i++) {
//       if(this.players[i].pk === player.pk) {
//         this.players.splice(i, 1);
//       }
//     }

//   }

//   goToGame(): void {
//     console.log("Going to game")
//     this.router.navigate(['/books_and_run/play'])
//   }




// }
