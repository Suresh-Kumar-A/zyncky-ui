import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {

    private JWT_TOKEN_KEY_NAME = 'token';

    saveJwtToken(response: any) {
        if (!response || !response.token) {
            throw new Error("Invalid/Missing JWT Token in response");
        }
        localStorage.setItem(this.JWT_TOKEN_KEY_NAME, response.token)
    }

    getJwtToken() {
        const token = localStorage.getItem(this.JWT_TOKEN_KEY_NAME);
        if (token === null) {
            throw new Error("Missing JWT Token in Storage. User may not be authenticated.");
        }
        return token;
    }

    clearJwtToken() {
        localStorage.removeItem(this.JWT_TOKEN_KEY_NAME);
    }

    doTokenExists(): boolean {
        const token = localStorage.getItem(this.JWT_TOKEN_KEY_NAME);
        if (token === null) {
            return false;
        } else {
            return true;
        }
    }
}