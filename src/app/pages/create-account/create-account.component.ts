import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  createAccountFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(),
    displayName: new FormControl(),
    password: new FormControl(),
  });
  showPassword = false;


  ngOnInit(): void {
    this.createAccountFormGroup.reset();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  createAccount() {
    const { userName, displayName, password } = this.createAccountFormGroup.value;
    // var newUser: User = {
    //   userName: userName,
    //   displayName: displayName,
    //   password: password,
    //   locked: false,
    // };
    // this.userService.createAccount(newUser);
  }
}
