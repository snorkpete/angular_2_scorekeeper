import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { LeaderboardComponent } from './leaderboard.component';

import { LeaderboardService } from './leaderboard.service';


@NgModule({
  declarations: [
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
  ],
  providers: [ LeaderboardService, ],
})


export class LeaderboardModule { }
