import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ClientComponent } from './client/client.component';
import { CoachComponent } from './coach/coach.component';
import { TrainingComponent } from './training/training.component';


const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ClientComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'coach',
    component: CoachComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'training',
    component: TrainingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
