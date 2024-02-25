import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MegaMenuModule} from "primeng/megamenu";
import { FooterComponent } from './shared/footer/footer.component';
import {ImageModule} from "primeng/image";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './shared/page404/page404.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {authInterceptor} from "./interceptor/auth.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessagesModule} from "primeng/messages";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PersonComponent } from './person/person.component';
import {PersonModule} from "./person/person.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    ImageModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RippleModule,
    MessagesModule,
    BrowserAnimationsModule,
    PersonModule
  ],
  providers: [
    {provide: 'apiUrl', useValue: "http://localhost:8081"},
    {provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
