import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonComponent} from "./person.component";
import {SearchComponent} from "./search/search.component";
import {PersonCreateComponent} from "./person-create/person-create.component";

const routes:Routes =[
  {path: '',
  component: PersonComponent,
  children:[
    {path: '', redirectTo:'search', pathMatch:"full"},
    {path: 'search', component: SearchComponent},
    {path: 'create', component: PersonCreateComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PersonRoutingModule { }
