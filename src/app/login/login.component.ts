import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(private readonly _loginService: LoginService,
              private readonly _formBuilder: FormBuilder,
              private readonly _router: Router) {
    this.loginForm = this._formBuilder.group({
      username: this._formBuilder.control('',Validators.required),
      password: this._formBuilder.control('', Validators.required)
    });
  }

  ngOnInit() {
    this._loginService.logout()
  }

  login(){

    this._loginService.login(this.loginForm.value)
      .subscribe({
        next: (response) => {
          this._router.navigate(['home'])
        },
        error: (err) => {
          if (err.error.status === 403) alert(err.error.message)
        }
      });
  }
}
