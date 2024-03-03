import { Component } from '@angular/core';
import {PersonService} from "../../../services/person.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  personForm: FormGroup;
  constructor(private readonly _personService:PersonService,
              public ref: DynamicDialogRef,
              public config: DynamicDialogConfig,
              private readonly _formBuilder: FormBuilder) {
    this.personForm= this._formBuilder.group({
      firstName: this.config.data.firstName,
      lastName: this.config.data.lastName,
      mail: this.config.data.email,
      phoneNumber: this.config.data.phoneNumber,
      gender: this.config.data.gender,
      street: this.config.data.street,
      number: this.config.data.number,
      box: this.config.data.box,
      zip: this.config.data.zip,
      city: this.config.data.city,
      country: this.config.data.country
    })
  }

  update(){
    this._personService.update(this.config.data.id, this.personForm.value).subscribe(() => {
      this.ref.close();
    });
  }
}
