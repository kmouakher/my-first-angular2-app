import {Component} from "angular2/core"
import {Router, ROUTER_PROVIDERS} from "angular2/router";
import {Contact} from "./contact";
import {ContactService} from "./contact.service";
@Component({
    selector: "contact",
    template: `     
        <input [(ngModel)]="contact.firstname" type="text"/>
        <div> LastName: {{contact.lastname}} <br/> </div>
        <div> Phone Number: {{contact.phone}} <br/> </div>
        <div>           Email: {{contact.email}}
        </div>
        <button (click)="copyContact()">Create new contact from this contact</button>
    `,
    inputs: ["contact"],
    providers: [ContactService]

})

export class ContactComponent {

    public contact: Contact = null;
    
    constructor(private _router: Router){}
    
    copyContact() {
        this._router.navigate(['NewContactFrom', {firstname: this.contact.firstname}]);
    }
}