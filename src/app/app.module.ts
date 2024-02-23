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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    Page404Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MegaMenuModule,
        ImageModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
