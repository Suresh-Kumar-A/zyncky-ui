import { HttpClient, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { User } from "src/app/model/user.model";
import { BackendService } from "src/app/services/backend.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"],
})
export class CreateAccountComponent implements OnInit {
  createAccountFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(),
    displayName: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private http: HttpClient,
    private backendSvc: BackendService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createAccountFormGroup.reset();
  }

  loadImgFrombackend() {
    const url = "http://localhost:8080/api/test?option=3";
    this.http.get(url, { responseType: "blob" }).subscribe((rawData) => {
      console.log("Raw Data", rawData);
      URL.createObjectURL(rawData);
    });
  }

  createAccount() {
    console.log(this.createAccountFormGroup.value);
    const { userName, displayName, password } =
      this.createAccountFormGroup.value;
    var newUser: User = {
      userName: userName,
      displayName: displayName,
      password: password,
      locked: false,
    };
    this.backendSvc.createUser(newUser).subscribe((resp) => {
      if (resp != null) {
        console.log(resp);
        this.router.navigateByUrl("/login");
      }
    });
  }
}
