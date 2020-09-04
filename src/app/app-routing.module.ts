import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service'

const routes: Routes = [
  { path: '', component: LoginComponent}, //canActivate, RouteGuardService
  { path:'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  { path: 'todos', component: ListtodosComponent, canActivate: [RouteGuardService]},
  { path:'login' , component: LoginComponent},  
  { path:'logout', component: LogoutComponent},

  { path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
