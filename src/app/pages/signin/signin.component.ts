import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  showPassword = false;

  constructor(private userService: UserService, private storageSvc: StorageService) { }

  ngOnInit(): void {
    this.loginFormGroup.reset();
    this.storageSvc.clearJwtToken();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  signIn() {
    const { userName, password } = this.loginFormGroup.value;
    var user: User = { userName: userName, password: password };
    this.userService.signIn(user);
  }
}
