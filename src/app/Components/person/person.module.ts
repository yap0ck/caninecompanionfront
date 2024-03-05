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
import {InputNumberModule} from "primeng/inputnumber";
import { GetOneComponent } from './get-one/get-one.component';
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import { UpdateComponent } from './update/update.component';
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {CarouselModule} from "primeng/carousel";
import {DialogModule} from "primeng/dialog";
import {EnumRacePipe} from "../../pipes/enum-race.pipe";
import {AppModule} from "../../app.module";
import {EnumSizePipe} from "../../pipes/enum-size.pipe";



@NgModule({
  declarations: [
    SearchComponent,
    PersonCreateComponent,
    GetOneComponent,
    UpdateComponent,
    EnumRacePipe,
    EnumSizePipe
  ],
  exports: [
    SearchComponent,
    EnumRacePipe,
    EnumSizePipe
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
    RadioButtonModule,
    InputNumberModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    CarouselModule,
    DialogModule,

  ],
  providers:[
    DialogService,
    ConfirmationService
  ]
})
export class PersonModule { }
