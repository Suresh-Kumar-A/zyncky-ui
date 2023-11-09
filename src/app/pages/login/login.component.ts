import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { ApiError } from "src/app/model/apierror.model";
import { User } from "src/app/model/user.model";
import { BackendService } from "src/app/services/backend.service";
import { NotificationService } from "src/app/services/notification.service";
import { StorageService } from "src/app/services/storage.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService, private storageSvc: StorageService) { }

  ngOnInit(): void {
    this.loginFormGroup.reset();
    this.storageSvc.clearJwtToken();
  }

  signIn() {
    const { userName, password } = this.loginFormGroup.value;
    var user: User = { userName: userName, password: password };
    this.userService.signIn(user);
  }
}