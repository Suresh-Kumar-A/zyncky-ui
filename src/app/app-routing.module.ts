import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/user/dashboard/dashboard.component";
import { AUTH_GUARD } from "./services/auth.guard";
import { LoginComponent } from "./pages/login/login.component";
import { CreateAccountComponent } from "./pages/create-account/create-account.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'user/dashboard', component: DashboardComponent, canActivate: [AUTH_GUARD] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
