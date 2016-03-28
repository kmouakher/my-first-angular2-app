System.register(['angular2/core'], function(exports_1, context_1) {
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
    var MyAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyAppComponent = (function () {
                function MyAppComponent() {
                    this.contact = { firstname: "Khalil", lastname: "Mouakher", phone: "0232324345", email: "mouakharkhalil@gmail.com" };
                    this.showDetail = false;
                }
                MyAppComponent.prototype.onSelect = function () {
                    this.showDetail = true;
                };
                MyAppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-first-app',
                        template: "\n        <h1>Angular 2 </h1>\n        <p>Khalil Say: Hello World!</p>\n        <h3 \n        (click)=\"onSelect()\"\n        [class.clicked]=\"showDetail === true\"\n        >{{contact.firstname}} {{contact.lastname}}</h3>\n        <input [(ngModel)]=\"contact.firstname\" type=\"text\">\n        <div *ngIf=\"showDetail=== true\"> Phone Number: {{contact.phone}} <br/>\n                Email: {{contact.email}}\n        </div>\n    ",
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyAppComponent);
                return MyAppComponent;
            }());
            exports_1("MyAppComponent", MyAppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7b0JBQ1csWUFBTyxHQUFHLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFDLDBCQUEwQixFQUFDLENBQUM7b0JBQzNHLGVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBSzlCLENBQUM7Z0JBSEcsaUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkF0Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLG9iQVdUO3dCQUNELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNwQyxDQUFDOztrQ0FBQTtnQkFRRixxQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsMkNBT0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWZpcnN0LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPkFuZ3VsYXIgMiA8L2gxPlxuICAgICAgICA8cD5LaGFsaWwgU2F5OiBIZWxsbyBXb3JsZCE8L3A+XG4gICAgICAgIDxoMyBcbiAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KClcIlxuICAgICAgICBbY2xhc3MuY2xpY2tlZF09XCJzaG93RGV0YWlsID09PSB0cnVlXCJcbiAgICAgICAgPnt7Y29udGFjdC5maXJzdG5hbWV9fSB7e2NvbnRhY3QubGFzdG5hbWV9fTwvaDM+XG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImNvbnRhY3QuZmlyc3RuYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInNob3dEZXRhaWw9PT0gdHJ1ZVwiPiBQaG9uZSBOdW1iZXI6IHt7Y29udGFjdC5waG9uZX19IDxici8+XG4gICAgICAgICAgICAgICAgRW1haWw6IHt7Y29udGFjdC5lbWFpbH19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9zcmMvY3NzL2FwcC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTXlBcHBDb21wb25lbnQge1xuICAgIHB1YmxpYyBjb250YWN0ID0ge2ZpcnN0bmFtZTogXCJLaGFsaWxcIiwgbGFzdG5hbWU6XCJNb3Vha2hlclwiLCBwaG9uZTpcIjAyMzIzMjQzNDVcIiwgZW1haWw6XCJtb3Vha2hhcmtoYWxpbEBnbWFpbC5jb21cIn07XG4gICAgcHVibGljIHNob3dEZXRhaWwgPSBmYWxzZTtcblxuICAgIG9uU2VsZWN0KCl7XG4gICAgICAgIHRoaXMuc2hvd0RldGFpbCA9IHRydWU7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
