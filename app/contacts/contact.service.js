System.register(["angular2/core", "./mock-contact"], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContacts = function () {
                    return Promise.resolve(mock_contact_1.CONTACTS);
                };
                ContactService.prototype.addContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACTS).then(function (contacts) { return contacts.push(contact); });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQVFBLENBQUM7Z0JBUEcsb0NBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBUSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsbUNBQVUsR0FBVixVQUFXLE9BQWU7b0JBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQVEsQ0FBQyxDQUFDLElBQUksQ0FBRSxVQUFDLFFBQW1CLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBQ3JGLENBQUM7Z0JBUkw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBU2IscUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELDJDQVFDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT05UQUNUU30gZnJvbSBcIi4vbW9jay1jb250YWN0XCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRhY3RTZXJ2aWNlIHtcbiAgICBnZXRDb250YWN0cygpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShDT05UQUNUUyk7XG4gICAgfVxuXG4gICAgYWRkQ29udGFjdChjb250YWN0OkNvbnRhY3QpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKS50aGVuKCAoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gY29udGFjdHMucHVzaChjb250YWN0KSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
