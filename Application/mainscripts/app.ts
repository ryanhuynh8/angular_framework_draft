/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

import IRouteProvider = angular.route.IRouteProvider;

class MainAppController {
    message: string;

    static $inject = [
        '$scope'
    ];

    constructor($scope) {
        this.message = "Ryan!";
    }
}

class MainApp {
    public app: ng.IModule;
    private mainController: MainAppController;

    static moduleList = ['MainApp'];

    constructor() {
        this.app = angular.module("MainApp", ["ngRoute"]);
        this.registerController();
        this.registerRoute();
    }

    private registerRoute() {
        this.app.config($routeProvider => {
            $routeProvider.when('/test', { templateUrl: "/mainApp.html", controller: 'MainAppController', controllerAs: "ctrl" });
        });
    }
    private registerController() {
        this.app.controller("MainAppController", MainAppController);
    }

}

new MainApp();
//angular.bootstrap(document, ["MainApp"]);
var a = 1 + 1;