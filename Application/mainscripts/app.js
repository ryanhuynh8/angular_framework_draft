/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
var MainAppController = (function () {
    function MainAppController() {
        this.message = "Welcome!";
    }
    MainAppController.$inject = [];
    return MainAppController;
})();
var MainApp = (function () {
    function MainApp() {
        this.app = angular.module("MainApp", []);
        this.registerController();
        this.registerRoute();
    }
    MainApp.prototype.registerRoute = function () {
        this.app.config([
            '$routeProvider', function ($routeProvider) {
                $routeProvider.when('/test', { templateUrl: "/mainApp.html", controller: MainAppController });
            }
        ]);
        this.app.config(function ($routeProvider) {
            $routeProvider
                .when('/this', { templateUrl: '/mainApp.html' });
        });
    };
    MainApp.prototype.registerController = function () {
        this.app.controller("MainAppController", MainAppController);
    };
    return MainApp;
})();
new MainApp();
//angular.bootstrap(document, ["MainApp"]);
var a = 1 + 1;
//# sourceMappingURL=app.js.map