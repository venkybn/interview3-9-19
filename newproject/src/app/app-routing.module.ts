import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';


const routes: Routes = [{ path: 'login' , component:LoginComponent , children: [
  {path: 'pss' , component:PasswordComponent}
] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
