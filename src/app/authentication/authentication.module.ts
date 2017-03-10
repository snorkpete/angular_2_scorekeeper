import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';

import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [ AuthenticationService, ],
})


export class AuthenticationModule { }
