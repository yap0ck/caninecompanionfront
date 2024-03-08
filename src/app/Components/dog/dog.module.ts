import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogCreateComponent } from './dog-create/dog-create.component';
import {DogRoutingModule} from "./dog-routing.module";
import { DogSearchComponent } from './dog-search/dog-search.component';
import {MessagesModule} from "primeng/messages";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {RadioButtonModule} from "primeng/radiobutton";
import {CheckboxModule} from "primeng/checkbox";
import {ListboxModule} from "primeng/listbox";
import {DropdownModule} from "primeng/dropdown";
import { BreedCreateComponent } from './breed-create/breed-create.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {EnumRacePipe} from "../../pipes/enum-race.pipe";
import {EnumSizePipe} from "../../pipes/enum-size.pipe";
import {TableModule} from "primeng/table";
import { DogOneComponent } from './dog-one/dog-one.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { DogUpdateComponent } from './dog-update/dog-update.component';
import {ChartModule} from "primeng/chart";
import { WeightAllComponent } from './dog-one/weight-all/weight-all.component';
import {InputNumberModule} from "primeng/inputnumber";
import { VaccineComponent } from './dog-one/vaccine/vaccine.component';
import {AppModule} from "../../app.module";
import {EnumDiseasePipe} from "../../pipes/enum-disease.pipe";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [
    DogCreateComponent,
    DogSearchComponent,
    BreedCreateComponent,
    DogOneComponent,
    DogUpdateComponent,
    WeightAllComponent,
    VaccineComponent,
    EnumDiseasePipe
  ],
  imports: [
    CommonModule,
    DogRoutingModule,
    MessagesModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    CheckboxModule,
    ListboxModule,
    DropdownModule,
    InputTextareaModule,
    EnumRacePipe,
    EnumSizePipe,
    TableModule,
    ConfirmDialogModule,
    ChartModule,
    InputNumberModule,
    FormsModule,
    RippleModule
  ],
  exports: [

  ]
})
export class DogModule { }
