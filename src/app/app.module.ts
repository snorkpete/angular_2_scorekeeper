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
import { BooksAndRunCreateComponent } from './books_and_run/books_and_run_create.component';
import { BooksAndRunPlayComponent } from './books_and_run/books_and_run_play.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { StatisticsService } from './leaderboard.service';
import { FriendService } from './friend.service';
import { BooksAndRunService } from './books_and_run.service';
import { AuthenticationService } from './authentication.service';
import { SearchPipe } from "./search.pipe";
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighScoreComponent,
    LeaderboardComponent,
    ProfileComponent,
    BooksAndRunCreateComponent,
    BooksAndRunPlayComponent,
    AuthenticationComponent,
    SearchPipe,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ StatisticsService, FriendService, BooksAndRunService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }