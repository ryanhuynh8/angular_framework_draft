define(["require", "exports"], function (require, exports) {
    var CustomersController = (function () {
        function CustomersController() {
            this.message = "Hello from CustomersController";
        }
        CustomersController.prototype.init = function () {
            return "AA";
        };
        return CustomersController;
    })();
    exports.CustomersController = CustomersController;
});
//# sourceMappingURL=customersController.js.map