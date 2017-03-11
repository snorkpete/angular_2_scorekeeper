import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FriendService } from '../friend.service';
import { BooksAndRunCreateComponent } from './books_and_run_create.component';
import { BooksAndRunPlayComponent } from './books_and_run_play.component';
// import { BooksAndRunService } from './books_and_run.service';

import { BooksAndRunRouter } from './books_and_run.router';



@NgModule({
  declarations: [
    BooksAndRunCreateComponent,
    BooksAndRunPlayComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksAndRunRouter,
  ],
  // providers: [  FriendService, BooksAndRunService ],
  providers: [  FriendService ],
})


export class BooksAndRunModule { }
