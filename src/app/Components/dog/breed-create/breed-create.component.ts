import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DogService} from "../../../services/dog.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {DogSize, raceEnum, RaceGroup} from "../../../models/Breed";

@Component({
  selector: 'app-breed-create',
  templateUrl: './breed-create.component.html',
  styleUrl: './breed-create.component.css'
})
export class BreedCreateComponent implements OnInit {
  breedForm!: FormGroup;
  raceGroups: raceEnum[] = [];
  dogSizes: raceEnum[] = [];


  constructor(private readonly _dogService: DogService,
              public ref: DynamicDialogRef,
              public config: DynamicDialogConfig,
              private readonly _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    Object.entries(RaceGroup).map(e => {
      this.raceGroups.push({
        key: e[0],
        value: e[1]
      })
    });
    Object.entries(DogSize).map(e => {
      this.dogSizes.push({
        key: e[0],
        value: e[1]
      })
    });
    this.breedForm = this._formBuilder.group({
      name: this._formBuilder.control('', Validators.required),
      raceGroup: this._formBuilder.control('', Validators.required),
      size: this._formBuilder.control('', Validators.required),
      temperament: this._formBuilder.control('')
    })
  }

  create(){
    this._dogService.createBreed(this.breedForm.value).subscribe(()=>{
      this.ref.close();
    })
  }
}
