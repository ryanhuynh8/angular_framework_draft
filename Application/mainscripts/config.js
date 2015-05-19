/// <reference path="app.ts" />
require.config({
    baseUrl: 'Application',
    paths: {
        app: 'mainscripts/app'
    },
    shim: {}
});
require(['app'], function (app) {
    console.log("Loaded");
    new app.MainApp();
    angular.bootstrap(document, ['MainApp']);
});
//# sourceMappingURL=config.js.map