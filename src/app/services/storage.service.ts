import { Injectable } from "@angular/core";
import { NotificationService } from "./notification.service";

@Injectable()
export class StorageService {

    private JWT_TOKEN_KEY_NAME = 'token';

    constructor(private notificationService: NotificationService) { }

    saveJwtToken(response: any) {
        if (!response || !response.token) {
            const message = 'Invalid/Missing JWT Token in response';
            this.notificationService.showErrorMessage(message)
            throw new Error(message);
        }
        localStorage.setItem(this.JWT_TOKEN_KEY_NAME, response.token)
    }

    getJwtToken() {
        const token = localStorage.getItem(this.JWT_TOKEN_KEY_NAME);
        if (token === null) {
            const message = 'Missing JWT Token in Session Storage. User may not be authenticated.';
            this.notificationService.showErrorMessage(message)
            throw new Error(message);
        }
        return token;
    }

    clearJwtToken() {
        localStorage.removeItem(this.JWT_TOKEN_KEY_NAME);
    }

    doTokenExists(): boolean {
        const token = localStorage.getItem(this.JWT_TOKEN_KEY_NAME);
        if (token == null) {
            return false;
        } else {
            return true;
        }
    }
}