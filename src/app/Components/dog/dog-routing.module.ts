import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DogComponent} from "./dog.component";
import {DogCreateComponent} from "./dog-create/dog-create.component";
import {DogSearchComponent} from "./dog-search/dog-search.component";
import {DogOneComponent} from "./dog-one/dog-one.component";

const routes:Routes =[
  {path: '',
  component: DogComponent,
  children:[
    {path: '', redirectTo:'search', pathMatch:"full"},
    {path: 'search', component: DogSearchComponent},
    {path: 'create/:id', component: DogCreateComponent},
    {path: 'one/:id', component: DogOneComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DogRoutingModule { }
