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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEcsb0NBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBUSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBSkw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBS2IscUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELDJDQUlDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT05UQUNUU30gZnJvbSBcIi4vbW9jay1jb250YWN0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XG4gICAgZ2V0Q29udGFjdHMoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQ09OVEFDVFMpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
