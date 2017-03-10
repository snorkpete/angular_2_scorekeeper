import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { LeaderboardComponent } from './leaderboard.component';
// import { SearchPipe } from "../search.pipe";



@NgModule({
  declarations: [
    LeaderboardComponent,
    // SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
})
export class LeaderboardModule { }
