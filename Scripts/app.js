define(["require", "exports"], function (require, exports) {
    var Main;
    (function (Main) {
        var MainApp = (function () {
            function MainApp($routeProvider) {
                this.$routeProvider = $routeProvider;
                this.app = angular.module('MainApp', []);
                this.app.controller('MainAppController', MainApp);
                $routeProvider.when('/', { templateUrl: 'mainApp.html', controller: MainApp });
            }
            MainApp.prototype.loadModule = function (path, name, moduleType) {
                // TODO : modify for generic use case later - Huy
                angular.module(path, [name + 'Controller']);
            };
            MainApp.prototype.loadRoute = function (path, name) {
            };
            return MainApp;
        })();
        Main.MainApp = MainApp;
        var MainAppController = (function () {
            function MainAppController() {
                this.message = "Welcome!";
            }
            return MainAppController;
        })();
        angular.bootstrap(document, ['MainApp']);
    })(Main || (Main = {}));
    return Main;
});
//# sourceMappingURL=app.js.map