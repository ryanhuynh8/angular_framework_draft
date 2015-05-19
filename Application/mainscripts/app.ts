/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../modules/customers/customersmodule.ts" />
import IRouteProvider = angular.route.IRouteProvider;
import c = require('modules/customers/customersModule');
import CustomersModule = c.Customers.CustomersModule;

export class MainApp {
    public app: ng.IModule;

    constructor() {
        this.app = angular.module("MainApp", ["ngRoute"]);
        var a = new CustomersModule("customers", this.app);
        //var customerModule = new CustomersModule("customers", this.app);
        a.init();
    }

}


//angular.bootstrap(document, ["MainApp"]);
//# sourceMappingURL=app.js.map