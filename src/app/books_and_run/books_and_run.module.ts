import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { FriendService } from '../friend.service';
import { BooksAndRunCreateComponent } from '../books_and_run/books_and_run_create.component';
import { BooksAndRunPlayComponent } from '../books_and_run/books_and_run_play.component';
import { BooksAndRunService } from '../books_and_run.service';



@NgModule({
  declarations: [
    BooksAndRunCreateComponent,
    BooksAndRunPlayComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // FormsModule,
  ],
  providers: [  FriendService, BooksAndRunService ],
})
export class BooksAndRunModule { }
