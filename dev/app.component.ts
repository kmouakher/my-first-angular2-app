///<reference path="../node_modules/angular2/src/router/route_config/route_config_decorator.d.ts"/>
import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {NewContactComponent} from "./contacts/new-contact.component";

@Component({
    selector: 'my-first-app',
    template: `
        <header>
            <nav>
                <a [routerLink] = "['Contacts']"> Contacts</a>
                <a [routerLink] = "['New Contact']"> New Contact</a>
            </nav>
        </header>
        <div>
            <router-outlet></router-outlet>
        </div>

       
        
    `,
    directives: [ContactListComponent, ROUTER_DIRECTIVES]

})

@RouteConfig(
    [
        {
            path: '/contacts', name: 'Contacts', component: ContactListComponent
        },
        {
            path: '/newcontact', name: 'New Contact', component: NewContactComponent
        },
        {
            path: '/newcontact/:firstname', name: 'NewContactFrom', component: NewContactComponent
        }
    ]
)

export class MyAppComponent {
   
}
