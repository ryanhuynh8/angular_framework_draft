/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
var MainAppController = (function () {
    function MainAppController() {
        this.message = "Ryan!";
    }
    MainAppController.$inject = [];
    return MainAppController;
})();
var MainApp = (function () {
    function MainApp() {
        this.app = angular.module("MainApp", ["ngRoute"]);
        this.loadModule("MainApp");
    }
    MainApp.prototype.loadModule = function (name) {
        this.registerController(name);
        this.registerRoute(name);
    };
    MainApp.prototype.registerRoute = function (name) {
        this.app.config(function ($routeProvider) {
            $routeProvider.when("/" + name, { templateUrl: "/" + name + ".html", controller: name + "Controller", controllerAs: "ctrl" });
        });
    };
    MainApp.prototype.registerController = function (name) {
        var consFunc = eval(name + "Controller");
        this.app.controller(name + "Controller", consFunc);
    };
    MainApp.moduleList = ['MainApp'];
    return MainApp;
})();
new MainApp();
//angular.bootstrap(document, ["MainApp"]); 
//# sourceMappingURL=app.js.map