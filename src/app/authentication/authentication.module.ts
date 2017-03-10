import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';

import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [ AuthenticationService, ],
})


export class AuthenticationModule { }
