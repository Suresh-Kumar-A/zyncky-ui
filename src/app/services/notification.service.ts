import { Injectable, NgModule } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable()
export class NotificationService {
    constructor(private messageService: MessageService) { }

    showSuccessMessage(message: string, title?: string) {
        this.messageService.add({
            severity: "success", summary: title, detail: message,
        });
    }

    showInfoMessage(message: string, title?: string) {
        this.messageService.add({
            severity: "info", summary: title, detail: message,
        });
    }

    showWarningMessage(message: string, title?: string) {
        this.messageService.add({
            severity: "warn", summary: title, detail: message,
        });
    }

    showErrorMessage(message: string, title?: string) {
        this.messageService.add({
            severity: "error", summary: title, detail: message,
        });
    }

    showAuthSuccessMessage() {
        this.messageService.add({
            severity: "success", summary: 'Sign In Successful...'
        });
    }

    showAuthFailedMessage(message: string) {
        this.messageService.add({
            severity: "error", summary: 'Authentication Failed!!', detail: message
        });
    }
}
