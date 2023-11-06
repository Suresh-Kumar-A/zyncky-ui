import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { User } from "src/app/model/user.model";
import { BackendService } from "src/app/services/backend.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private http: HttpClient,
    private backendSvc: BackendService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loginFormGroup.reset();
  }

  signIn() {
    console.log(this.loginFormGroup.value);
    const { userName, displayName, password } = this.loginFormGroup.value;
    var newUser: User = {
      userName: userName,
      password: password,
    };
    this.backendSvc.loginUser(newUser).subscribe((resp) => {
      if (resp != null) {
        console.log(resp);
        this.messageService.add({ severity: 'success', summary: 'Authenticated'});
        this.router.navigateByUrl("/login");
      }else{
        this.messageService.add({ severity: 'error', summary: 'Sign In Failed!', detail: 'Invalid Credentials' });
      }
    });
  }
}
