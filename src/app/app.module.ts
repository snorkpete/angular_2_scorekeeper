import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighScoreComponent } from './high_score/high-score.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsService } from './leaderboard.service';
import { SearchPipe } from "./search.pipe";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighScoreComponent,
    LeaderboardComponent,
    ProfileComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ StatisticsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
