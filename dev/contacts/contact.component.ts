import {Component} from "angular2/core"
@Component({
    selector: "contact-list",
    template: `
        <ul>
            <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)"
            [class.clicked]="showDetail === true"
            >{{contact.firstname}} {{contact.lastname}}
            
            </li>
        </ul>
                <input [(ngModel)]="selectedContact.firstname" type="text">
        <div> Phone Number: {{selectedContact.phone}} <br/>
                    Email: {{selectedContact.email}}
        </div>
    `

})

export class ContactListComponent {
    public contacts = [
        {firstname: "Khalil", lastname:"Mouakher", phone:"0232324345", email:"mouakharkhalil@gmail.com"},
        {firstname: "Hanen", lastname:"Mouakher", phone:"02323242323", email:"mouakharhanen@gmail.com"},
        {firstname: "Rayyan", lastname:"Mouakher", phone:"0232324422", email:"mouakharRayyan@gmail.com"}

    ];
    public selectedContact = {};

    onSelect(contact){
        this.selectedContact = contact;
    }
}