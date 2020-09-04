import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path:'welcome/:name', component: WelcomeComponent},
  { path: 'todos', component: ListtodosComponent},
  { path:'login' , component: LoginComponent},  
  { path:'logout', component: LogoutComponent},

  { path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
