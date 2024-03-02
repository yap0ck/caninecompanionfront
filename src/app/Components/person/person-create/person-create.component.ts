import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../../services/person.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.css'
})
export class PersonCreateComponent implements OnDestroy{
  personForm: FormGroup;
  $destroyed= new Subject<boolean>()

  constructor(private readonly _personService: PersonService,
              private readonly _formBuilder: FormBuilder,
              private readonly _router: Router) {
    this.personForm = this._formBuilder.group({
      firstName: this._formBuilder.control('', Validators.required),
      lastName: this._formBuilder.control('', Validators.required),
      mail: this._formBuilder.control('', [Validators.required, Validators.email]),
      phoneNumber: this._formBuilder.control('', Validators.required),
      gender: this._formBuilder.control('')
    })
  }

  create(){

  }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }


}
