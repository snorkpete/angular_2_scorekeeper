import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    SpinnerComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerComponent,
    SearchPipe,
  ],
  providers: [],
})
export class SharedModule { }
