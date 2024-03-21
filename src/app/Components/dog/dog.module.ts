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
import {EnumDiseasePipe} from "../../pipes/enum-disease.pipe";
import {RippleModule} from "primeng/ripple";
import { MorphologyCreateComponent } from './morphology-create/morphology-create.component';
import {MultiSelectModule} from "primeng/multiselect";
import { DiagnosticCreateComponent } from './diagnostic-create/diagnostic-create.component';
import { DiagnosticComponent } from './dog-one/diagnostic/diagnostic.component';
import {AccordionModule} from "primeng/accordion";
import { ActionPlanCreateComponent } from './action-plan-create/action-plan-create.component';
import { ActionPlanGetComponent } from './dog-one/action-plan-get/action-plan-get.component';
import {ToggleButtonModule} from "primeng/togglebutton";
import {TabMenuModule} from "primeng/tabmenu";
import {TabViewModule} from "primeng/tabview";



@NgModule({
  declarations: [
    DogCreateComponent,
    DogSearchComponent,
    BreedCreateComponent,
    DogOneComponent,
    DogUpdateComponent,
    WeightAllComponent,
    VaccineComponent,
    EnumDiseasePipe,
    MorphologyCreateComponent,
    DiagnosticCreateComponent,
    DiagnosticComponent,
    ActionPlanCreateComponent,
    ActionPlanGetComponent
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
    RippleModule,
    MultiSelectModule,
    AccordionModule,
    ToggleButtonModule,
    TabMenuModule,
    TabViewModule
  ],
  exports: [

  ]
})
export class DogModule { }
