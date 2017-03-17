import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { BooksAndRunService } from './books_and_run.service';
import { Score } from './books_and_run.classes';



@Component({
  moduleId: module.id,
  selector: 'books-and-run-play',
  templateUrl: './books_and_run_play.component.html',
  styleUrls: ['./books_and_run_play.component.css'],
})


export class BooksAndRunPlayComponent implements OnInit, AfterViewChecked {
  constructor(public booksAndRunService: BooksAndRunService) { }

  game = { players: []};



  ngOnInit(): void {
    debugger;
    var game: any;

    if(localStorage.getItem('game') === null) {
      this.game = this.booksAndRunService.prepareGame();
      this.booksAndRunService.saveGame(this.game);
    } else {
        this.game = this.booksAndRunService.restoreGame();
    };

  }

  ngAfterViewChecked() {
    this.booksAndRunService.saveGame(this.game);
  }

}
