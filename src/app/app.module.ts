import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BackendService } from "./services/backend.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { ImageModule } from "primeng/image";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./pages/user/dashboard/dashboard.component";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from "./services/notification.service";
import { StorageService } from "./services/storage.service";
import { UserService } from "./services/user.service";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    ImageModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    DividerModule,
    TagModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    BreadcrumbModule,
    MenuModule
  ],
  providers: [BackendService, MessageService, NotificationService, StorageService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
