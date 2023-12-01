import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  showPassword = false;

  constructor() {
    // this.userService.checkUserSessionAndRedirect();
  }

  ngOnInit(): void {
    // this.userService.checkUserSessionAndRedirect();
    this.loginFormGroup.reset();
    // this.storageSvc.clearJwtToken();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  LogIn() {
    // const { userName, password } = this.loginFormGroup.value;
    // var user: User = { userName: userName, password: password };
    // this.userService.signIn(user);
  }
}
