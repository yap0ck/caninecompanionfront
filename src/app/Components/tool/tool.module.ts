import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedManagementComponent } from './breed-management/breed-management.component';
import {ToolRoutingModule} from "./tool-routing.module";



@NgModule({
  declarations: [
    BreedManagementComponent
  ],
  imports: [
    CommonModule,
    ToolRoutingModule
  ]
})
export class ToolModule { }
