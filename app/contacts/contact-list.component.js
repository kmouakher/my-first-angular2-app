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
                    this.selectedContact = {};
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
                        template: "\n        <ul>\n            <li *ngFor=\"#contact of contacts\"\n            (click)=\"onSelect(contact)\"\n            [class.clicked]=\"contact === selectedContact\"\n            >\n            {{contact.firstname}} {{contact.lastname}}\n            </li>\n        </ul>\n        <contact [contact]=\"selectedContact\"></contact>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBSUksOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBRjVDLG9CQUFlLEdBQUcsRUFBRSxDQUFDO2dCQUV5QixDQUFDO2dCQUV0RCx1Q0FBUSxHQUFSLFVBQVMsT0FBTztvQkFDWixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCwwQ0FBVyxHQUFYO29CQUFBLGlCQUVDO29CQURHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBbUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7Z0JBQy9GLENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBakNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxtVkFVVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ3BDLENBQUM7O3dDQUFBO2dCQWtCRiwyQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsdURBaUJDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNvbnRhY3QtbGlzdFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjY29udGFjdCBvZiBjb250YWN0c1wiXG4gICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoY29udGFjdClcIlxuICAgICAgICAgICAgW2NsYXNzLmNsaWNrZWRdPVwiY29udGFjdCA9PT0gc2VsZWN0ZWRDb250YWN0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHt7Y29udGFjdC5maXJzdG5hbWV9fSB7e2NvbnRhY3QubGFzdG5hbWV9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGNvbnRhY3QgW2NvbnRhY3RdPVwic2VsZWN0ZWRDb250YWN0XCI+PC9jb250YWN0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0NvbnRhY3RDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFtcIi4uL3NyYy9jc3MvYXBwLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGNvbnRhY3RzOiBDb250YWN0W107XG4gICAgcHVibGljIHNlbGVjdGVkQ29udGFjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlKXt9XG5cbiAgICBvblNlbGVjdChjb250YWN0KXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xuICAgIH1cblxuICAgIGdldENvbnRhY3RzKCkge1xuICAgICAgICB0aGlzLl9jb250YWN0U2VydmljZS5nZXRDb250YWN0cygpLnRoZW4oKGNvbnRhY3RzOiBDb250YWN0W10pID0+IHRoaXMuY29udGFjdHMgPSBjb250YWN0cyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLmdldENvbnRhY3RzKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
