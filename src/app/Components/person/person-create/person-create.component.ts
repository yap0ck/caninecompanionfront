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
  $destroyed= new Subject<boolean>()
  form: FormGroup;

  constructor(private readonly _personService: PersonService,
              private readonly _formBuilder: FormBuilder,
              private readonly _router: Router) {
    this.form = this._formBuilder.group({
      firstName: this._formBuilder.control('', Validators.required),
      lastName: this._formBuilder.control('', Validators.required),
      mail: this._formBuilder.control('', [Validators.required, Validators.email]),
      phoneNumber: this._formBuilder.control('', Validators.required),
      gender: this._formBuilder.control(''),
      street: this._formBuilder.control('', Validators.required),
      number: this._formBuilder.control(null, [Validators.required, Validators.min(0)]),
      box: this._formBuilder.control(''),
      zip: this._formBuilder.control(null,[Validators.required, Validators.min(1000), Validators.max(99999)]),
      city: this._formBuilder.control('', Validators.required),
      country: this._formBuilder.control('', Validators.required)
    })
  }

  create(){
    this._personService.create(this.form.value).subscribe(() => {
      this._router.navigate(['/client']);
    });
  }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }


}
