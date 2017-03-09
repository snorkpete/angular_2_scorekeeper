import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';


import { SpinnerComponent } from './spinner/spinner.component'


@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
  ],
  exports: [
    SpinnerComponent,
  ],
  providers: [],
})
export class SharedModule { }
