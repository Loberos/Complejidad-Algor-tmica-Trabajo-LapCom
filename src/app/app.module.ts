import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { AboutComponent } from './public/pages/about/about.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginFormComponent } from './lapcom/components/login-form/login-form.component';
import { SingupFormComponent } from './lapcom/components/singup-form/singup-form.component';
import { FooterComponent } from './public/pages/footer/footer.component';
import { HeaderComponent } from './public/pages/header/header.component';
import { RecommedComponent } from './lapcom/pages/recommed/recommed.component';
import { ReviewsComponent } from './lapcom/pages/reviews/reviews.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LaptopsService} from "./lapcom/services/laptops/laptops.service";
import {UsersService} from "./lapcom/services/users/users.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    HomeComponent,
    LoginFormComponent,
    SingupFormComponent,
    FooterComponent,
    HeaderComponent,
    RecommedComponent,
    ReviewsComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [LaptopsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
