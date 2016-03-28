System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent() {
                    this.contact = {};
                }
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: "contact",
                        template: "     \n        <input [(ngModel)]=\"contact.firstname\" type=\"text\">\n        <div> Phone Number: {{contact.phone}} <br/>\n                    Email: {{contact.email}}\n        </div>\n    ",
                        inputs: ["contact"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQUE7b0JBQ1UsWUFBTyxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsaU1BS1Q7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUV0QixDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjb250YWN0XCIsXG4gICAgdGVtcGxhdGU6IGAgICAgIFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJjb250YWN0LmZpcnN0bmFtZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxkaXY+IFBob25lIE51bWJlcjoge3tjb250YWN0LnBob25lfX0gPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgRW1haWw6IHt7Y29udGFjdC5lbWFpbH19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgaW5wdXRzOiBbXCJjb250YWN0XCJdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcbiAgIHB1YmxpYyBjb250YWN0ID0ge307XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
