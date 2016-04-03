import {Component, OnInit} from "angular2/core"
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
@Component({
    selector: "newcontact",
    template: `     
       <form [ngFormModel]="myForm" (ngSubmit)=onSubmit(myForm.value)>
                <div> Firstname: <input type="text"  
                    [ngFormControl]="myForm.controls['firstname']"
                />
                <label *ngIf="!myForm.controls['firstname'].valid"> Not Valid</label>
                </div>
                <div> Lastname: <input type="text"   
                    [ngFormControl]="myForm.controls['lastname']"
                />
                </div>
                <div> Phone: <input type="text"   
                    [ngFormControl]="myForm.controls['phone']"
                />
                </div>
                <div> Email: <input type="text"   
                    [ngFormControl]="myForm.controls['email']"
                />
                </div>
                <div>
                    <button type="submit" [disabled]="!myForm.valid">Create Contact</button>
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


    myForm : ControlGroup;
    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams, private _formBuilder : FormBuilder) {}

    onSubmit(value) {

        this._contactService.addContact(value);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
        this.myForm = this._formBuilder.group({
                'firstname':[this._routeParams.get('firstname'), Validators.required],
                'lastname': ['', Validators.required],
                'phone': ['', Validators.required],
                'email': ['', Validators.required]

            }
        );
    }
}