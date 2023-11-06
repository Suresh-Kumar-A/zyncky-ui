import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BackendService } from "./services/backend.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateAccountComponent } from "./pages/create-account/create-account.component";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { ImageModule } from "primeng/image";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { LoginComponent } from "./pages/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./pages/user/dashboard/dashboard.component";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    ImageModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [BackendService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
