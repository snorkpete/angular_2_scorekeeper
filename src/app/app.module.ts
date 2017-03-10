import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BooksAndRunModule } from './books_and_run/books_and_run.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FriendService } from './friend.service';
import { AuthenticationService } from './authentication.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BooksAndRunModule,
    LeaderboardModule,
    SharedModule,
  ],
  providers: [ FriendService, AuthenticationService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
