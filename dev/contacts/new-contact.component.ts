import {Component, OnInit} from "angular2/core"
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";
@Component({
    selector: "newcontact",
    template: `     
       <form #myForm="ngForm" (ngSubmit)="onSubmit()">
                <div> Firstname: <input type="text"  
                    ngControl="firstname" required
                    [(ngModel)]="newContact.firstname"
                />
                <label *ngIf="newContact.firstname.valid"> Not Valid</label>
                </div>
                <div> Lastname: <input type="text"   
                    ngControl="lastname" required
                    [(ngModel)]="newContact.lastname"
                />
                </div>
                <div> Phone: <input type="text"   
                    ngControl="phone" required
                    [(ngModel)]="newContact.phone"
                />
                </div>
                <div> Email: <input type="text"   
                    ngControl="email" required
                    [(ngModel)]="newContact.email"
                />
                </div>
                <div>
                    <button type="submit" [disabled]="!myForm.form.valid">Create Contact</button>
                </div>
       </form>
    `,
    providers: [ContactService],
    styles: [ `
            .ng-invalid {
                border: 1px solid red;
            }
        ` ]



})

export class NewContactComponent implements OnInit{

    ngOnInit():any {
        this.newContact = {firstname: this._routeParams.get('firstname'), lastname: '', phone: '', email:''};
    }
    public newContact : Contact;


    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {}
    insertContact(firstname, lastname, phone, email){

        let contact: Contact = {firstname: firstname, lastname: lastname, phone: phone, email: email};
        this._contactService.addContact(contact);
        this._router.navigate(['Contacts']);

    }

    onSubmit() {
        this._contactService.addContact(this.newContact);
        this._router.navigate(['Contacts']);
    }
}