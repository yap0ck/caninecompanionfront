import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MegaMenuModule} from "primeng/megamenu";
import { FooterComponent } from './shared/footer/footer.component';
import {ImageModule} from "primeng/image";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
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
