import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaderboardComponent } from './leaderboard.component';


const routes: Routes = [
  {path: '', component: LeaderboardComponent},
]


export const LeaderboardRouter: ModuleWithProviders = RouterModule.forChild(routes);
