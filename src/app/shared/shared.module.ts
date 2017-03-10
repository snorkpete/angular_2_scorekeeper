import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    SpinnerComponent,
    SearchPipe,
  ],
  imports: [
  ],
  exports: [
    SpinnerComponent,
    SearchPipe,
  ],
  providers: [],
})
export class SharedModule { }
