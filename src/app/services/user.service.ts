import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "src/app/services/backend.service";
import { NotificationService } from "src/app/services/notification.service";
import { StorageService } from "src/app/services/storage.service";
import { User } from "../model/user.model";
import { ApiError } from "../model/apierror.model";
import * as jose from 'jose';

@Injectable()
export class UserService {

    constructor(private backendService: BackendService, private storageService: StorageService,
        private notificationService: NotificationService, private router: Router) { }

    createAccount(user: User) {
        this.backendService.createUser(user).subscribe((user) => {
            this.notificationService.showAccountCreationSuccessMessage(user.userName);
            this.router.navigateByUrl("/login");
        }, (httpErrResp: HttpErrorResponse) => {
            const apiError: ApiError = httpErrResp.error;
            this.notificationService.showAccountCreationFailedMessage(apiError.mesaage);
        });
    }

    LogIn(user: User) {
        this.backendService.loginUser(user).subscribe((response) => {
            this.notificationService.showAuthSuccessMessage();
            this.storageService.saveJwtToken(response);
            this.router.navigateByUrl("/user/dashboard");
        }, (httpErrResp: HttpErrorResponse) => {
            const apiError: ApiError = httpErrResp.error;
            this.notificationService.showAuthFailedMessage(apiError.mesaage);
        });
    }

    getUsername() {
        const token = this.storageService.getJwtToken();
        const username = jose.decodeJwt(token)["username"];
        return username;
    }

    isUserLoggenIn() {
        return this.storageService.doTokenExists();
    }

    getUserUid() {
        const token = this.storageService.getJwtToken();
        const uid = jose.decodeJwt(token)["uid"];
        return uid;
    }

    getUserRole() {
        const token = this.storageService.getJwtToken();
        const role = jose.decodeJwt(token)["role"];
        return role;
    }

    checkUserSessionAndRedirect() {
        if (this.isUserLoggenIn()) {
            this.notificationService.showInfoMessage('User Session Exists!! Redirecting...');
            this.router.navigateByUrl("/user/dashboard");
        }
    }
}