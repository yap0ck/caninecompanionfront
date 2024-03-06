import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogCreateComponent } from './dog-create/dog-create.component';
import {DogRoutingModule} from "./dog-routing.module";
import { DogSearchComponent } from './dog-search/dog-search.component';
import {MessagesModule} from "primeng/messages";
import {ReactiveFormsModule} from "@angular/forms";
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



@NgModule({
  declarations: [
    DogCreateComponent,
    DogSearchComponent,
    BreedCreateComponent
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
    TableModule
  ],
  exports: [

  ]
})
export class DogModule { }
