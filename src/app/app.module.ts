import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BooksAndRunModule } from './books_and_run/books_and_run.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { StatisticsService } from './leaderboard.service';
import { FriendService } from './friend.service';
import { AuthenticationService } from './authentication.service';
import { SearchPipe } from "./search.pipe";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeaderboardComponent,
    AuthenticationComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BooksAndRunModule,
    SharedModule,
  ],
  providers: [ StatisticsService, FriendService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
