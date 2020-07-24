import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { DataLoginComponent } from './data-login/data-login.component';
import { FooterLoginComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { ButtonCreateComponent } from './button-create/button-create.component';
import { PostsUserComponent } from './posts-user/posts-user.component';
import { LayoutComponent } from './layout/layout.component';
import { DataUserComponent } from './data-user/data-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    DataLoginComponent,
    FooterLoginComponent,
    CabeceraComponent,
    MenuComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProfileComponent,
    PostsComponent,
    ButtonCreateComponent,
    PostsUserComponent,
    LayoutComponent,
    DataUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
