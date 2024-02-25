import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonComponent} from "./person.component";
import {AllComponent} from "./all/all.component";

const routes:Routes =[
  {path: '',
  component: PersonComponent,
  children:[
    {path: '', redirectTo:'all', pathMatch:"full"},
    {path: 'all', component: AllComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PersonRoutingModule { }
