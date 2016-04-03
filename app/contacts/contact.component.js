System.register(["angular2/core", "angular2/router", "./contact.service"], function(exports_1, context_1) {
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
    var core_1, router_1, contact_service_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.copyContact = function () {
                    this._router.navigate(['NewContactFrom', { firstname: this.contact.firstname }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: "contact",
                        template: "     \n        <input [(ngModel)]=\"contact.firstname\" type=\"text\"/>\n        <div> LastName: {{contact.lastname}} <br/> </div>\n        <div> Phone Number: {{contact.phone}} <br/> </div>\n        <div>           Email: {{contact.email}}\n        </div>\n        <button (click)=\"copyContact()\">Create new contact from this contact</button>\n    ",
                        inputs: ["contact"],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUlJLDBCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRjVCLFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBRU0sQ0FBQztnQkFFdEMsc0NBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsaVdBT1Q7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNuQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUU5QixDQUFDOztvQ0FBQTtnQkFXRix1QkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsK0NBU0MsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0LnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNvbnRhY3RcIixcbiAgICB0ZW1wbGF0ZTogYCAgICAgXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImNvbnRhY3QuZmlyc3RuYW1lXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgIDxkaXY+IExhc3ROYW1lOiB7e2NvbnRhY3QubGFzdG5hbWV9fSA8YnIvPiA8L2Rpdj5cbiAgICAgICAgPGRpdj4gUGhvbmUgTnVtYmVyOiB7e2NvbnRhY3QucGhvbmV9fSA8YnIvPiA8L2Rpdj5cbiAgICAgICAgPGRpdj4gICAgICAgICAgIEVtYWlsOiB7e2NvbnRhY3QuZW1haWx9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY29weUNvbnRhY3QoKVwiPkNyZWF0ZSBuZXcgY29udGFjdCBmcm9tIHRoaXMgY29udGFjdDwvYnV0dG9uPlxuICAgIGAsXG4gICAgaW5wdXRzOiBbXCJjb250YWN0XCJdLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgY29udGFjdDogQ29udGFjdCA9IG51bGw7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe31cbiAgICBcbiAgICBjb3B5Q29udGFjdCgpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTmV3Q29udGFjdEZyb20nLCB7Zmlyc3RuYW1lOiB0aGlzLmNvbnRhY3QuZmlyc3RuYW1lfV0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
