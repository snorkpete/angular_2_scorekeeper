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

  game = {
  
    roundOne: {
      title: "2 Books",
      players: [
        {
          pk: 1,
          username: "Aaron",
          score: 5,
        },
        {
          pk: 2,
          username: "Bethany",
          score: 54,
        },
        {
          pk: 3,
          username: "Jared",
          score: 22,
        },
      ],
      winner: undefined,
    },
    roundTwo: {
      title: "1 Book 1 Run",
      players: [
        {
          pk: 1,
          username: "Aaron",
          score: 54,
        },
        {
          pk: 2,
          username: "Bethany",
          score: 32,
        },
        {
          pk: 3,
          username: "Jared",
          score: 76,
        },
      ],
      winner: undefined,
    },
    roundThree: {
      title: "2 Runs",
      players: [
        {
          pk: 1,
          username: "Aaron",
          score: 23,
        },
        {
          pk: 2,
          username: "Bethany",
          score: 76,
        },
        {
          pk: 3,
          username: "Jared",
          score: 75,
        },
      ],
      winner: undefined,
    },
    roundFour: {
      title: "3 Books",
      players: [
        {
          pk: 1,
          username: "Aaron",
          score: 34,
        },
        {
          pk: 2,
          username: "Bethany",
          score: 43,
        },
        {
          pk: 3,
          username: "Jared",
          score: 65,
        },
      ],
      winner: undefined,
    },
    roundFive: {
      title: "2 Books 1 Run",
      players: [
        {
          pk: 1,
          username: "Aaron",
          score: 94,
        },
        {
          pk: 2,
          username: "Bethany",
          score: 26,
        },
        {
          pk: 3,
          username: "Jared",
          score: 34,
        },
      ],
      winner: undefined,
    },
    roundSix: {
      title: "2 Runs 1 Book",
      players: [
        {
          pk: 1,
          username: "Aaron",
          score: 23,
        },
        {
          pk: 2,
          username: "Bethany",
          score: 76,
        },
        {
          pk: 3,
          username: "Jared",
          score: 43,
        },
      ],
      winner: undefined,
    },
    roundSeven: {
      title: "3 Runs",
      players: [
        {
          pk: 1,
          username: "Aaron",
          score: 34,
        },
        {
          pk: 2,
          username: "Bethany",
          score: 43,
        },
        {
          pk: 3,
          username: "Jared",
          score: 36,
        },
      ],
      winner: undefined,
    },
  
};



  ngOnInit(): void {
    // this.game = this.booksAndRunService.prepareGame();
    // console.log(this.game);
    // this.roundTitles = this.booksAndRunService.getRoundTitles();
  }

  






}