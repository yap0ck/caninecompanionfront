import { Component } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {mustMatch} from "../../../validators/ValidatorsCustoms";
import {Message} from "primeng/api";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form: FormGroup
  messages: Message[]=[]
  constructor(private readonly _userService: UserService,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _formBuilder: FormBuilder,
              private readonly _router: Router) {
    this.form = this._formBuilder.group({
      password: this._formBuilder.control('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")]),
      confirmedPassword: this._formBuilder.control('', [Validators.required])
    },
      {validator: mustMatch('password', 'confirmedPassword')
  })
  }

  register(){
    this._userService.register(this._activatedRoute.snapshot.params['token'], this.form.value).subscribe({
      next:()=> this._router.navigate(["user/login"]),
      error: (err) => this.messages=[{severity:"error", summary: err.error.status, detail: err.error.message}]
    })
  }

}
