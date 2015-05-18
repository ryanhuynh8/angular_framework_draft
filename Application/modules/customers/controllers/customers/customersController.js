var PCT;
(function (PCT) {
    var Controllers;
    (function (Controllers) {
        var CustomersController = (function () {
            function CustomersController($scope, $location, $timeout, $filter, authService, dataService) {
                this.init();
            }
            CustomersController.prototype.init = function () {
                this.message = "Foo!";
            };
            return CustomersController;
        })();
        Controllers.CustomersController = CustomersController;
    })(Controllers = PCT.Controllers || (PCT.Controllers = {}));
})(PCT || (PCT = {}));
//# sourceMappingURL=customersController.js.map