import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  createAccountFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(),
    displayName: new FormControl(),
    password: new FormControl(),
  });
  showPassword = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.createAccountFormGroup.reset();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
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
