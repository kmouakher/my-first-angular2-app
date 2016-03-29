import {Component} from "angular2/core"
@Component({
    selector: "contact",
    template: `     
        <input [(ngModel)]="contact.firstname" type="text">
        <div> Phone Number: {{contact.phone}} <br/>
                    Email: {{contact.email}}
        </div>
    `,
    inputs: ["contact"]

})

export class ContactComponent {
   public contact = {};
}