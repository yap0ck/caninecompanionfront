import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DogService} from "../../../services/dog.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-dog-update',
  templateUrl: './dog-update.component.html',
  styleUrl: './dog-update.component.css'
})
export class DogUpdateComponent {
  dogForm: FormGroup;

  constructor(private readonly _dogService: DogService,
              public ref: DynamicDialogRef,
              public config: DynamicDialogConfig,
              private readonly _formBuilder: FormBuilder) {
    this.dogForm= this._formBuilder.group({
      firstName: this.config.data.firstName,
      lastName: this.config.data.lastName,
      dateOfBirth: this.config.data.dateOfBirth,
      sex: this.config.data.sex,
      isSterilized: this.config.data.isSterilized
    })
  }

  update(){
    this._dogService.updateDog(this.dogForm.value, this.config.data.id).subscribe(()=>
      this.ref.close()
    )}

}
