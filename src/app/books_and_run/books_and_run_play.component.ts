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
    // this.players = this.booksAndRunService.getPlayers();
    // this.players = this.booksAndRunService.preparePlayers(this.players);
    // this.rounds = this.booksAndRunService.prepareRounds();
  }

  






}