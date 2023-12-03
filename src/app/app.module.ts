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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotificationService } from "./services/notification.service";
import { StorageService } from "./services/storage.service";
import { UserService } from "./services/user.service";

import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './pages/user/user.component';
import { MyFilesComponent } from './pages/user/my-files/my-files.component';
import { RecentComponent } from './pages/user/recent/recent.component';
import { SharedComponent } from './pages/user/shared/shared.component';
import { SettingsComponent } from './pages/user/settings/settings.component';
import { RecycleBinComponent } from './pages/user/recycle-bin/recycle-bin.component';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';

import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RippleModule } from "primeng/ripple";
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    CreateAccountComponent,
    UserComponent,
    MyFilesComponent,
    RecentComponent,
    SharedComponent,
    SettingsComponent,
    RecycleBinComponent,
    UploadDialogComponent,
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
    DividerModule,
    TagModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    BreadcrumbModule,
    MenuModule,
    RippleModule,
    ProgressBarModule,
    DynamicDialogModule,
    TableModule,
    ProgressSpinnerModule,
    ChipModule
  ],
  providers: [BackendService, NotificationService, StorageService, UserService, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule { }
