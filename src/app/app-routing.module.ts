import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateAccountComponent } from "./pages/create-account/create-account.component";
import { DashboardComponent } from "./pages/user/dashboard/dashboard.component";
import { AUTH_GUARD } from "./services/auth.guard";
import { SigninComponent } from "./pages/signin/signin.component";
import { SignupComponent } from "./pages/signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'user/dashboard', component: DashboardComponent, canActivate: [AUTH_GUARD] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
