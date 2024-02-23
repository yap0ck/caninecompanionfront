import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Message} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  resetForm: FormGroup;
  passwordForget = false;
  messages: Message[];
  constructor(private readonly _loginService: LoginService,
              private readonly _formBuilder: FormBuilder,
              private readonly _router: Router) {
    this.loginForm = this._formBuilder.group({
      username: this._formBuilder.control('',Validators.required),
      password: this._formBuilder.control('', Validators.required)
    });
    this.resetForm = this._formBuilder.group({
      login: this._formBuilder.control('', Validators.required),
      email: this._formBuilder.control('', [Validators.email, Validators.required])
    });
    this.messages = []
  }

  ngOnInit() {
    this._loginService.logout()
    this.passwordForget=false
  }

  showPasswordReset(){
    this.passwordForget = true
  }

  showLogin(){
    this.passwordForget =false;
  }

  login(){
    this._loginService.login(this.loginForm.value)
      .subscribe({
        next: (response) => {
          this._router.navigate(['home'])
        },
        error: (err) => {
          if (err.error.status === 403) this.messages=[{
            severity: "error",
            summary: err.error.status,
            detail: "Identifiants incorrects"
          }]
        }
      });
  }

  resetRequest(){
    this._loginService.resetRequest(this.resetForm.value)
      .subscribe({
        error:(err) => {
          this.messages=[{
            severity: "error",
            summary: err.error.status,
            detail: err.error.message
          }]
        },
        complete:()=> {
          this.messages=[{
            severity: "success",
            summary: "Complet",
            detail: "Demande de réinitialisation envoyée avec succès"
          }]
        }
      })
  }
}
