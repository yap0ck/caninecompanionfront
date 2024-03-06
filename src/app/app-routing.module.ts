import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {Page404Component} from "./shared/page404/page404.component";
import {LoginComponent} from "./Components/User/login/login.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'client', loadChildren: () => import('./Components/person/person.module').then(m => m.PersonModule)},
  {path: 'user', loadChildren: ()=> import('./Components/User/user.module').then(m=> m.UserModule)},
  {path: 'chien', loadChildren: ()=> import('./Components/dog/dog.module').then(m=>m.DogModule)},
  {path: '404', component:Page404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
