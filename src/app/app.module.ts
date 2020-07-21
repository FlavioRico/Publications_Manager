import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { DataLoginComponent } from './data-login/data-login.component';
import { FooterLoginComponent } from './footer-login/footer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    DataLoginComponent,
    FooterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
