import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {Page404Component} from "./shared/page404/page404.component";
import {LoginComponent} from "./Components/login/login.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'client', loadChildren: () => import('./Components/person/person.module').then(m => m.PersonModule)},
  {path: 'login', component:LoginComponent},
  {path: '404', component:Page404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
