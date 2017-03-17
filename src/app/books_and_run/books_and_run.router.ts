import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksAndRunCreateComponent } from './books_and_run_create.component';
import { BooksAndRunPlayComponent } from './books_and_run_play.component';


const routes: Routes = [
  {path: 'books_and_run/create', component: BooksAndRunCreateComponent},
  {path: 'books_and_run/play', component: BooksAndRunPlayComponent},
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [ RouterModule ]
})
export class BooksAndRunRouter {};
