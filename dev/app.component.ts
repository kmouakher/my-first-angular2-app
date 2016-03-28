import {Component} from 'angular2/core';

@Component({
    selector: 'my-first-app',
    template: `
        <h1>Angular 2 </h1>
        <p>Khalil Say: Hello World!</p>
        <h3 
        (click)="onSelect()"
        [class.clicked]="showDetail === true"
        >{{contact.firstname}} {{contact.lastname}}</h3>
        <input [(ngModel)]="contact.firstname" type="text">
        <div *ngIf="showDetail=== true"> Phone Number: {{contact.phone}} <br/>
                Email: {{contact.email}}
        </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class MyAppComponent {
    public contact = {firstname: "Khalil", lastname:"Mouakher", phone:"0232324345", email:"mouakharkhalil@gmail.com"};
    public showDetail = false;

    onSelect(){
        this.showDetail = true;
    }
}
