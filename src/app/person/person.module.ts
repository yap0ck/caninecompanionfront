import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import {PersonRoutingModule} from "./person-routing.module";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [
    AllComponent
  ],
  exports: [
    AllComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MessagesModule,
    ToastModule,
    TableModule
  ]
})
export class PersonModule { }
