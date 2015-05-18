/// <reference path="../_references.ts" />
define(["require", "exports"], function (require, exports) {
    var ControllerBase = (function () {
        function ControllerBase() {
        }
        ControllerBase.prototype.process = function () {
        };
        ControllerBase.prototype.apply = function () {
            var scope = this.scope;
            if (!scope['$$phase'] && !scope['$root']['$$phase']) {
                scope.$apply();
            }
        };
        return ControllerBase;
    })();
    exports.ControllerBase = ControllerBase;
});
//# sourceMappingURL=ControllerBase.js.map