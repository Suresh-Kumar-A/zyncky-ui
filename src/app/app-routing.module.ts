import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AUTH_GUARD } from "./services/auth.guard";
import { LoginComponent } from "./pages/login/login.component";
import { CreateAccountComponent } from "./pages/create-account/create-account.component";
import { MyFilesComponent } from "./pages/user/my-files/my-files.component";
import { RecentComponent } from "./pages/user/recent/recent.component";
import { SharedComponent } from "./pages/user/shared/shared.component";
import { SettingsComponent } from "./pages/user/settings/settings.component";
import { RecycleBinComponent } from "./pages/user/recycle-bin/recycle-bin.component";
import { UserComponent } from "./pages/user/user.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'user/:child', canActivate: [AUTH_GUARD], component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
