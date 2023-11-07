import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { User } from "src/app/model/user.model";
import { UserService } from "src/app/services/user.service";

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.createAccountFormGroup.reset();
  }

  // loadImgFrombackend() {
  //   const url = "http://localhost:8080/api/test?option=3";
  //   this.http.get(url, { responseType: "blob" }).subscribe((rawData) => {
  //     console.log("Raw Data", rawData);
  //     URL.createObjectURL(rawData);
  //   });
  // }

  createAccount() {
    const { userName, displayName, password } = this.createAccountFormGroup.value;
    var newUser: User = {
      userName: userName,
      displayName: displayName,
      password: password,
      locked: false,
    };
    this.userService.createAccount(newUser);
  }
}
