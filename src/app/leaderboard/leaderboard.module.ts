import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { LeaderboardComponent } from './leaderboard.component';

import { LeaderboardService } from './leaderboard.service';

import { LeaderboardRouter } from './leaderboard.router';


@NgModule({
  declarations: [
    LeaderboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LeaderboardRouter,
  ],
  providers: [ LeaderboardService, ],
})


export class LeaderboardModule { }
