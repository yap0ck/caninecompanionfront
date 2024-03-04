import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {LoginComponent} from "./login/login.component";
import {CreateComponent} from "./create/create.component";

const routes:Routes =[
  {path: '',
    component: UserComponent,
    children:[
      {path: '', redirectTo:'login', pathMatch:"full"},
      {path: 'login', component: LoginComponent},
      {path: 'create/:token', component: CreateComponent}
    ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
