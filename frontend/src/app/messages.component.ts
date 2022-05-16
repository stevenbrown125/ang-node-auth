import { Component } from "@angular/core";
import { WebService } from "./web.service";

import { Message } from './message';
@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
        <mat-card style="margin:8px">
            <mat-card-title>
            {{message.name}}
            </mat-card-title>
            <mat-card-content>
                {{message.text}}
            </mat-card-content>
            <button mat-raised-button color="primary">Primary</button>
        </mat-card>
    </div>`

})
export class MessagesComponent {
    messages: Message[] = [];

    constructor(private webService : WebService) {
       
    }
    ngOnInit() {
        this.getMessages()
    }
    getMessages(): void {
        this.webService.getMessages()
          .subscribe(messages => (this.messages = messages));
    }
   
}