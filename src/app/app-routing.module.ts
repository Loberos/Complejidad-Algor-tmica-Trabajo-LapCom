import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {ReviewsComponent} from "./lapcom/pages/reviews/reviews.component";
import {LoginFormComponent} from "./lapcom/components/login-form/login-form.component";
import {SingupFormComponent} from "./lapcom/components/singup-form/singup-form.component";
import {LaptopDetailsComponent} from "./lapcom/components/laptop-details/laptop-details.component";
import {LaptopFilterComponent} from "./lapcom/components/laptop-filter/laptop-filter.component";

const routes: Routes = [
  {path: '', redirectTo: 'singup', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'singup', component: SingupFormComponent},
  {path: 'laptops', component: LaptopFilterComponent},
  {path: 'laptops/:id', component: LaptopDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
