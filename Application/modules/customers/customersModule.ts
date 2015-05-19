/// <reference path="../../_references.ts" />
/// <reference path="controllers/customers/customersController.ts" />

import c = require('controllers/customers/customersController');
import CustomersController = c.CustomersController;

var path = "abc";

export module Customers {
    
    var a = new requirejs([]);
    a
    export class CustomersModule {        
        private appModule: ng.IModule;
        private name: string;
        private relativePath: string;       

        constructor(name: string, appModule: ng.IModule) {
            this.name = name;
            this.appModule = appModule;
            this.relativePath = `/modules/${name}`;
            var controller = new CustomersController();            
        }

        private registerController(controllerName: string) {
            var consFunc = eval(`${controllerName}`);
            this.appModule.controller(controllerName, consFunc);
            console.log(`${controllerName} registered`);
        }

        private registerRoute(routePath: string, controllerName: string, options: any) {
            this.appModule.config($routeProvider => {
                $routeProvider.when(`${this.relativePath}/${routePath}`, {
                    templateUrl: `${this.relativePath}/${options.templateUrl}`,
                    controller: options.controller,
                    controllerAs: options.controllerAs
                });
            });
        }

        init() {            
            this.registerController('CustomersController');
            this.registerRoute('test', 'customerController', {
                templateUrl: 'customers.html',
                controller: 'customersController',
                controllerAs: 'ctrl'
            });
        }
    }    
}
