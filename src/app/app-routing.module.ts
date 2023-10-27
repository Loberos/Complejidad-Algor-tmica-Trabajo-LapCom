import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {RecommedComponent} from "./lapcom/pages/recommed/recommed.component";
import {ReviewsComponent} from "./lapcom/pages/reviews/reviews.component";
import {LoginFormComponent} from "./lapcom/components/login-form/login-form.component";
import {SingupFormComponent} from "./lapcom/components/singup-form/singup-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'recommed', component: RecommedComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'singup', component: SingupFormComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
