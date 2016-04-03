System.register(['angular2/core', "./contacts/contact-list.component", "angular2/router", "./contacts/new-contact.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_list_component_1, router_1, new_contact_component_1;
    var MyAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            }],
        execute: function() {
            MyAppComponent = (function () {
                function MyAppComponent() {
                }
                MyAppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-first-app',
                        template: "\n        <header>\n            <nav>\n                <a [routerLink] = \"['Contacts']\"> Contacts</a>\n                <a [routerLink] = \"['New Contact']\"> New Contact</a>\n            </nav>\n        </header>\n        <div>\n            <router-outlet></router-outlet>\n        </div>\n\n       \n        \n    ",
                        directives: [contact_list_component_1.ContactListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent
                        },
                        {
                            path: '/newcontact', name: 'New Contact', component: new_contact_component_1.NewContactComponent
                        },
                        {
                            path: '/newcontact/:firstname', name: 'NewContactFrom', component: new_contact_component_1.NewContactComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MyAppComponent);
                return MyAppComponent;
            }());
            exports_1("MyAppComponent", MyAppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFwQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLCtUQWFUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLDBCQUFpQixDQUFDO3FCQUV4RCxDQUFDO29CQUVELG9CQUFXLENBQ1I7d0JBQ0k7NEJBQ0ksSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0I7eUJBQ3ZFO3dCQUNEOzRCQUNJLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsMkNBQW1CO3lCQUMzRTt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSwyQ0FBbUI7eUJBQ3pGO3FCQUNKLENBQ0o7O2tDQUFBO2dCQUlELHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZV9jb25maWcvcm91dGVfY29uZmlnX2RlY29yYXRvci5kLnRzXCIvPlxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250YWN0TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdC1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7TmV3Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvbmV3LWNvbnRhY3QuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZmlyc3QtYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua10gPSBcIlsnQ29udGFjdHMnXVwiPiBDb250YWN0czwvYT5cbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua10gPSBcIlsnTmV3IENvbnRhY3QnXVwiPiBOZXcgQ29udGFjdDwvYT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ29udGFjdExpc3RDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxuXG59KVxuXG5AUm91dGVDb25maWcoXG4gICAgW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL2NvbnRhY3RzJywgbmFtZTogJ0NvbnRhY3RzJywgY29tcG9uZW50OiBDb250YWN0TGlzdENvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL25ld2NvbnRhY3QnLCBuYW1lOiAnTmV3IENvbnRhY3QnLCBjb21wb25lbnQ6IE5ld0NvbnRhY3RDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9uZXdjb250YWN0LzpmaXJzdG5hbWUnLCBuYW1lOiAnTmV3Q29udGFjdEZyb20nLCBjb21wb25lbnQ6IE5ld0NvbnRhY3RDb21wb25lbnRcbiAgICAgICAgfVxuICAgIF1cbilcblxuZXhwb3J0IGNsYXNzIE15QXBwQ29tcG9uZW50IHtcbiAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
