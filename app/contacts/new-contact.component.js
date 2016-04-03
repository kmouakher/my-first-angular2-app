System.register(["angular2/core", "./contact.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                NewContactComponent.prototype.ngOnInit = function () {
                    this.newContact = { firstname: this._routeParams.get('firstname'), lastname: '', phone: '', email: '' };
                };
                NewContactComponent.prototype.insertContact = function (firstname, lastname, phone, email) {
                    var contact = { firstname: firstname, lastname: lastname, phone: phone, email: email };
                    this._contactService.addContact(contact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.onSubmit = function () {
                    this._contactService.addContact(this.newContact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        selector: "newcontact",
                        template: "     \n       <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <div> Firstname: <input type=\"text\"  \n                    ngControl=\"firstname\" required\n                    [(ngModel)]=\"newContact.firstname\"\n                />\n                <label *ngIf=\"newContact.firstname.valid\"> Not Valid</label>\n                </div>\n                <div> Lastname: <input type=\"text\"   \n                    ngControl=\"lastname\" required\n                    [(ngModel)]=\"newContact.lastname\"\n                />\n                </div>\n                <div> Phone: <input type=\"text\"   \n                    ngControl=\"phone\" required\n                    [(ngModel)]=\"newContact.phone\"\n                />\n                </div>\n                <div> Email: <input type=\"text\"   \n                    ngControl=\"email\" required\n                    [(ngModel)]=\"newContact.email\"\n                />\n                </div>\n                <div>\n                    <button type=\"submit\" [disabled]=\"!myForm.form.valid\">Create Contact</button>\n                </div>\n       </form>\n    ",
                        providers: [contact_service_1.ContactService],
                        styles: ["\n            .ng-invalid {\n                border: 1px solid red;\n            }\n        "]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZDQTtnQkFRSSw2QkFBb0IsZUFBK0IsRUFBVSxPQUFlLEVBQVUsWUFBeUI7b0JBQTNGLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBTm5ILHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUN6RyxDQUFDO2dCQUtELDJDQUFhLEdBQWIsVUFBYyxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLO29CQUUzQyxJQUFJLE9BQU8sR0FBWSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDOUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFFeEMsQ0FBQztnQkFFRCxzQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQTdETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsMm5DQTJCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixNQUFNLEVBQUUsQ0FBRSw4RkFJTCxDQUFFO3FCQUlWLENBQUM7O3VDQUFBO2dCQXVCRiwwQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQscURBcUJDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvbmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSBcIi4vY29udGFjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7Um91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibmV3Y29udGFjdFwiLFxuICAgIHRlbXBsYXRlOiBgICAgICBcbiAgICAgICA8Zm9ybSAjbXlGb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PiBGaXJzdG5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiICBcbiAgICAgICAgICAgICAgICAgICAgbmdDb250cm9sPVwiZmlyc3RuYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdDb250YWN0LmZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJuZXdDb250YWN0LmZpcnN0bmFtZS52YWxpZFwiPiBOb3QgVmFsaWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+IExhc3RuYW1lOiA8aW5wdXQgdHlwZT1cInRleHRcIiAgIFxuICAgICAgICAgICAgICAgICAgICBuZ0NvbnRyb2w9XCJsYXN0bmFtZVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5sYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PiBQaG9uZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICBcbiAgICAgICAgICAgICAgICAgICAgbmdDb250cm9sPVwicGhvbmVcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld0NvbnRhY3QucGhvbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4gRW1haWw6IDxpbnB1dCB0eXBlPVwidGV4dFwiICAgXG4gICAgICAgICAgICAgICAgICAgIG5nQ29udHJvbD1cImVtYWlsXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdDb250YWN0LmVtYWlsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLmZvcm0udmFsaWRcIj5DcmVhdGUgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZm9ybT5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXSxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICAgICAgLm5nLWludmFsaWQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYCBdXG5cblxuXG59KVxuXG5leHBvcnQgY2xhc3MgTmV3Q29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5uZXdDb250YWN0ID0ge2ZpcnN0bmFtZTogdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdmaXJzdG5hbWUnKSwgbGFzdG5hbWU6ICcnLCBwaG9uZTogJycsIGVtYWlsOicnfTtcbiAgICB9XG4gICAgcHVibGljIG5ld0NvbnRhY3QgOiBDb250YWN0O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHt9XG4gICAgaW5zZXJ0Q29udGFjdChmaXJzdG5hbWUsIGxhc3RuYW1lLCBwaG9uZSwgZW1haWwpe1xuXG4gICAgICAgIGxldCBjb250YWN0OiBDb250YWN0ID0ge2ZpcnN0bmFtZTogZmlyc3RuYW1lLCBsYXN0bmFtZTogbGFzdG5hbWUsIHBob25lOiBwaG9uZSwgZW1haWw6IGVtYWlsfTtcbiAgICAgICAgdGhpcy5fY29udGFjdFNlcnZpY2UuYWRkQ29udGFjdChjb250YWN0KTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ29udGFjdHMnXSk7XG5cbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5fY29udGFjdFNlcnZpY2UuYWRkQ29udGFjdCh0aGlzLm5ld0NvbnRhY3QpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb250YWN0cyddKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
