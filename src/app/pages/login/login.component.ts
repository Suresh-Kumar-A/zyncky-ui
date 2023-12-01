import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) {
    this.userService.checkUserSessionAndRedirect();
  }

  ngOnInit(): void {
    this.userService.checkUserSessionAndRedirect();
    this.loginFormGroup.reset();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  LogIn() {
    const { userName, password } = this.loginFormGroup.value;
    var user: User = { userName: userName, password: password };
    this.userService.logIn(user);
  }
}
