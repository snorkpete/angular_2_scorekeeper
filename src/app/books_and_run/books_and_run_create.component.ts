import { Component, OnInit } from '@angular/core';

import { FriendList } from '../friendlist';
import { FriendService } from '../friend.service';


@Component({
  moduleId: module.id,
  selector: 'books_and_run',
  templateUrl: './books_and_run_create.component.html',
  styleUrls: ['./books_and_run_create.component.css'],
})


export class BooksAndRunCreateComponent implements OnInit {
  constructor(private friendService: FriendService) { }

  name: string = 'Aaron';
  friendList: FriendList[] = [];
  players: any[] = [];


  ngOnInit(): void {
    this.friendService
      .getFriendList()
        .subscribe(
          data => this.friendList = data,
        )
  }


  addPlayer(player): void {
    this.players.push(player);

    for(var i=0; i<this.friendList.length; i++) {
      if(this.friendList[i].pk === player.pk) {
        this.friendList.splice(i, 1);
      }
    }
  }


  removePlayer(player): void {
    this.friendList.push(player);

    for(var i=0; i<this.players.length; i++) {
      if(this.players[i].pk === player.pk) {
        this.players.splice(i, 1);
      }
    }

  }




}