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

  game = {};



  ngOnInit(): void {
    this.game = this.booksAndRunService.prepareGame();

    // if(localStorage.getItem('game') === null) {
    //   this.game = this.booksAndRunService.prepareGame();
    //   localStorage.setItem('game', JSON.stringify(this.game));
    // } else {
    //   this.game = JSON.parse(localStorage.getItem('game'));
    // };
  }

  calculateStats(game){
    console.log(game);
  }

}
