/// <reference path="../../_references.ts" />
/// <reference path="controllers/customers/customersController.ts" />
define(["require", "exports", 'controllers/customers/customersController'], function (require, exports, c) {
    var CustomersController = c.CustomersController;
    var path = "abc";
    var Customers;
    (function (Customers) {
        var a = new requirejs([]);
        a;
        var CustomersModule = (function () {
            function CustomersModule(name, appModule) {
                this.name = name;
                this.appModule = appModule;
                this.relativePath = "/modules/" + name;
                var controller = new CustomersController();
            }
            CustomersModule.prototype.registerController = function (controllerName) {
                var consFunc = eval("" + controllerName);
                this.appModule.controller(controllerName, consFunc);
                console.log(controllerName + " registered");
            };
            CustomersModule.prototype.registerRoute = function (routePath, controllerName, options) {
                var _this = this;
                this.appModule.config(function ($routeProvider) {
                    $routeProvider.when(_this.relativePath + "/" + routePath, {
                        templateUrl: _this.relativePath + "/" + options.templateUrl,
                        controller: options.controller,
                        controllerAs: options.controllerAs
                    });
                });
            };
            CustomersModule.prototype.init = function () {
                this.registerController('CustomersController');
                this.registerRoute('test', 'customerController', {
                    templateUrl: 'customers.html',
                    controller: 'customersController',
                    controllerAs: 'ctrl'
                });
            };
            return CustomersModule;
        })();
        Customers.CustomersModule = CustomersModule;
    })(Customers = exports.Customers || (exports.Customers = {}));
});
//# sourceMappingURL=customersmodule.js.map