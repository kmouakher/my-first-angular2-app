System.register(["angular2/core", "./contact.component", "./contact.service"], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: "contact-list",
                        template: "\n        <ul>\n            <li *ngFor=\"#contact of contacts\"\n            (click)=\"onSelect(contact)\"\n            [class.clicked]=\"contact === selectedContact\"\n            >\n            {{contact.firstname}} {{contact.lastname}}\n            </li>\n        </ul>\n        <contact *ngIf=\"selectedContact !== null\" [contact]=\"selectedContact\"></contact>\n    ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBSUksOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBRjVDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUV1QixDQUFDO2dCQUV0RCx1Q0FBUSxHQUFSLFVBQVMsT0FBTztvQkFDWixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCwwQ0FBVyxHQUFYO29CQUFBLGlCQUVDO29CQURHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBbUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7Z0JBQy9GLENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBakNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxzWEFVVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ3BDLENBQUM7O3dDQUFBO2dCQWtCRiwyQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsdURBaUJDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNvbnRhY3QtbGlzdFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjY29udGFjdCBvZiBjb250YWN0c1wiXG4gICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoY29udGFjdClcIlxuICAgICAgICAgICAgW2NsYXNzLmNsaWNrZWRdPVwiY29udGFjdCA9PT0gc2VsZWN0ZWRDb250YWN0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHt7Y29udGFjdC5maXJzdG5hbWV9fSB7e2NvbnRhY3QubGFzdG5hbWV9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGNvbnRhY3QgKm5nSWY9XCJzZWxlY3RlZENvbnRhY3QgIT09IG51bGxcIiBbY29udGFjdF09XCJzZWxlY3RlZENvbnRhY3RcIj48L2NvbnRhY3Q+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ29udGFjdENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wiLi4vc3JjL2Nzcy9hcHAuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY29udGFjdHM6IENvbnRhY3RbXTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRDb250YWN0ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZSl7fVxuXG4gICAgb25TZWxlY3QoY29udGFjdCl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gY29udGFjdDtcbiAgICB9XG5cbiAgICBnZXRDb250YWN0cygpIHtcbiAgICAgICAgdGhpcy5fY29udGFjdFNlcnZpY2UuZ2V0Q29udGFjdHMoKS50aGVuKChjb250YWN0czogQ29udGFjdFtdKSA9PiB0aGlzLmNvbnRhY3RzID0gY29udGFjdHMpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5nZXRDb250YWN0cygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
