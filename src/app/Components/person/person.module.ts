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
import { PersonCreateComponent } from './person-create/person-create.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {RadioButtonModule} from "primeng/radiobutton";



@NgModule({
  declarations: [
    SearchComponent,
    PersonCreateComponent
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
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    RadioButtonModule
  ]
})
export class PersonModule { }
