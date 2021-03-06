import {Component} from "angular2/core"
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: "contact-list",
    template: `
        <ul>
            <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)"
            [class.clicked]="contact === selectedContact"
            >
            {{contact.firstname}} {{contact.lastname}}
            </li>
        </ul>
        <contact *ngIf="selectedContact !== null" [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    providers: [ContactService],
    styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent implements OnInit {
    public contacts: Contact[];
    public selectedContact = null;

    constructor(private _contactService: ContactService){}

    onSelect(contact){
        this.selectedContact = contact;
    }

    getContacts() {
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
    }

    ngOnInit():any {
        this.getContacts();
    }
}