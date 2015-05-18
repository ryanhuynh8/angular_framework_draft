/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

import IRouteProvider = angular.route.IRouteProvider;

class MainAppController {
    message: string;

    static $inject = [            
    ];

    constructor() {
        this.message = "Ryan!";
    }
}

class MainApp {
    public app: ng.IModule;

    static moduleList = ['MainApp'];

    constructor() {
        this.app = angular.module("MainApp", ["ngRoute"]);
        this.loadModule("MainApp");
    }

    public loadModule(name: string) {
        this.registerController(name);
        this.registerRoute(name);
    }
    
    private registerRoute(name: string) {
        this.app.config($routeProvider => {
            $routeProvider.when(`/${name}`, { templateUrl: `/${name}.html`, controller: `${name}Controller`, controllerAs: "ctrl" });
        });
    }

    private registerController(name: string) {
        var consFunc = eval(`${name }Controller`);
        this.app.controller(`${name}Controller`, consFunc);
    }

}

new MainApp();
//angular.bootstrap(document, ["MainApp"]);