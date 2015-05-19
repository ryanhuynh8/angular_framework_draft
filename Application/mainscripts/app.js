define(["require", "exports", 'modules/customers/customersModule'], function (require, exports, c) {
    var CustomersModule = c.Customers.CustomersModule;
    var MainApp = (function () {
        function MainApp() {
            this.app = angular.module("MainApp", ["ngRoute"]);
            var a = new CustomersModule("customers", this.app);
            //var customerModule = new CustomersModule("customers", this.app);
            a.init();
        }
        return MainApp;
    })();
    exports.MainApp = MainApp;
});
//angular.bootstrap(document, ["MainApp"]);
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map