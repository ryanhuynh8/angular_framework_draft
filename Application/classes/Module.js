/// <reference path="../_references.ts" />
define(["require", "exports"], function (require, exports) {
    var Module = (function () {
        //events: nsEventManager.EventManager;
        function Module(name, path, triggerModuleLoaded) {
            this._resourceUrls = {};
            this._name = name;
            this._path = path;
            this._triggerModuleLoaded = triggerModuleLoaded;
            //this.events = new nsEventManager.EventManager(this, 'Module_' + name + '_');
        }
        Module.prototype.mapPath = function (path) {
            if (path === null || path == '')
                return '';
            return this._path + '/' + path;
        };
        return Module;
    })();
    exports.Module = Module;
});
//# sourceMappingURL=Module.js.map