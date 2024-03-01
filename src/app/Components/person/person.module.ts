import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonRoutingModule} from "./person-routing.module";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {StyleClassModule} from "primeng/styleclass";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MessagesModule,
    ToastModule,
    TableModule,
    StyleClassModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
