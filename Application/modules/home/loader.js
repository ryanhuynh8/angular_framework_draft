'use strict';

/// <summary>
/// Home bootstrapper which help to config some neccesary starting-up for Home module
/// such as routing resolver, actionagent, localization
/// </summary>
define([       
        'modules/home/configs/dependencies'         
], function () {
    //get home module
    var app = angular.module('home');

    //router configure for home module
    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
    function ($routeProvider, routeResolverProvider, $controllerProvider,
                $compileProvider, $filterProvider, $provide, $httpProvider) {

        
        //Change default views and controllers directory using the following:
        //(viewsDir, controllersDir)
        routeResolverProvider.routeConfig.setBaseDirectories('/Application/modules/home/views/', '/Application/modules/home/controllers/');
        
        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        //define routes - controllers will be loaded dynamically
        var route = routeResolverProvider.route;
        //route.resolve(moduleName,baseName, path, controllerAs, secure, compositeViews) (baseName===ViewName===ControllerName)
        $routeProvider
                //route.resolve() now accepts the convention to use (name of controller & view) as well as the 
                //path where the controller or view lives in the controllers or views folder if it's in a sub folder. 
                //For example, the controllers for customers live in controllers/customers and the views are in views/customers.
                //The controllers for orders live in controllers/orders and the views are in views/orders
                //The second parameter allows for putting related controllers/views into subfolders to better organize large projects
                //Thanks to Ton Yeung for the idea and contribution
                .when('/home/', route.resolve('home','Home', '', 'vm',false,[]))
                .when('/home/contact', route.resolve('home', 'Contact', '', 'vm',false,[]))
                .when('/home/about', route.resolve('home', 'About', '', 'vm', false,[]));
    }]);

    //app.run(['$rootScope', '$location', 'authService',
    //    function ($rootScope, $location, authService) {

    //        //Client-side security. Server-side framework MUST add it's 
    //        //own security as well since client-based security is easily hacked
    //        $rootScope.$on("$routeChangeStart", function (event, next, current) {
    //            if (next && next.$$route && next.$$route.secure) {
    ////                if (!authService.user.isAuthenticated) {
    ////                    $rootScope.$evalAsync(function () {
    ////                        authService.redirectToLogin();
    ////                    });
    ////                }
    //            }
    //        });

    //    }]);

    return app;
});