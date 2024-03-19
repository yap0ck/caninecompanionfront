import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MegaMenuModule} from "primeng/megamenu";
import { FooterComponent } from './shared/footer/footer.component';
import {ImageModule} from "primeng/image";
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/User/login/login.component';
import { Page404Component } from './shared/page404/page404.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {authInterceptor} from "./interceptor/auth.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessagesModule} from "primeng/messages";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PersonComponent } from './Components/person/person.component';
import {PersonModule} from "./Components/person/person.module";
import { DogComponent } from './Components/dog/dog.component';
import { EnumDiseasePipe } from './pipes/enum-disease.pipe';
import { ToolComponent } from './Components/tool/tool.component';
import { AppointmentComponent } from './Components/home/appointment/appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    PersonComponent,
    DogComponent,
    ToolComponent,
    AppointmentComponent,
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
    PersonModule,
    FormsModule
  ],
  providers: [
    //{provide: 'apiUrl', useValue: "http://54.36.100.119:8080"},
    {provide: 'apiUrl', useValue: "http://localhost:8081"},
    {provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true}
  ],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
