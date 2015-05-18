/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

import IRouteProvider = angular.route.IRouteProvider;

class MainAppController {
    message: string;

    static $inject = [             
    ];

    constructor() {        
        this.message = "Welcome!";
    }
}

class MainApp {
    public app: ng.IModule;
    private mainController: MainAppController;

    constructor() {
        this.app = angular.module("MainApp", []);
        this.registerController();        
        this.registerRoute();
    }

    private registerRoute() {
        this.app.config([
            '$routeProvider', $routeProvider => {
                $routeProvider.when('/test', { templateUrl: "/mainApp.html", controller: MainAppController });
            }
        ]);

        this.app.config(function ($routeProvider) {
            $routeProvider
                .when('/this', { templateUrl: '/mainApp.html' });
        });
    }
    private registerController() {
        this.app.controller("MainAppController", MainAppController);        
    }

}

new MainApp();
//angular.bootstrap(document, ["MainApp"]);
var a = 1 + 1;