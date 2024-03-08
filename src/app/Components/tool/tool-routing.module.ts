import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ToolComponent} from "./tool.component";
import {BreedManagementComponent} from "./breed-management/breed-management.component";

const routes:Routes =[
  {path:'',
  component: ToolComponent,
  children:[
    {path: '', redirectTo:'breed', pathMatch:"full"},
    {path:'breed', component: BreedManagementComponent }
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ToolRoutingModule { }
