import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonComponent} from "./person.component";
import {SearchComponent} from "./search/search.component";

const routes:Routes =[
  {path: '',
  component: PersonComponent,
  children:[
    {path: '', redirectTo:'search', pathMatch:"full"},
    {path: 'search', component: SearchComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PersonRoutingModule { }
