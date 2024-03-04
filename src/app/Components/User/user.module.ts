import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterOutlet} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {UserRoutingModule} from "./user-routing.module";
import {MessagesModule} from "primeng/messages";
import {ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    CreateComponent
  ],
  exports:[
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    UserRoutingModule,
    MessagesModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    RippleModule
  ]
})
export class UserModule { }
