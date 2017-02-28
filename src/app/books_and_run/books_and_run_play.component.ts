import { Component } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'books-and-run-play',
  templateUrl: './books_and_run_play.component.html',
  styleUrls: ['./books_and_run_play.component.css'],
})


export class BooksAndRunPlayComponent {

  isRequesting: boolean;
  

  private stopRefreshing() {
    this.isRequesting = false;
  }


}