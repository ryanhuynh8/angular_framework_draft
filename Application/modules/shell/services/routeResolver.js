'use strict';

define([], function () {

    var routeResolver = function () {

        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
            var viewsDirectory = '',
                controllersDirectory = '',

            setBaseDirectories = function (viewsDir, controllersDir) {
                viewsDirectory = viewsDir;
                controllersDirectory = controllersDir;
            },

            getViewsDirectory = function () {
                return viewsDirectory;
            },

            getControllersDirectory = function () {
                return controllersDirectory;
            };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();
        /// <summary>
        // route method to make sure controller will be loaded together with the view
        /// </summary>
        this.route = function (routeConfig) {

            var resolve = function (moduleName, baseName, path, controllerAs, secure, compositeViews) {
                if (!path) path = '';

                var routeDef = {},
                    baseFileName = baseName.charAt(0).toLowerCase() + baseName.substr(1),
                    viewPath = 'modules/'+moduleName+'/views/'+path,
                    controllerPath = 'modules/'+moduleName+'/controllers/'+path,
                    compositePath = 'modules/'+moduleName+'/compositeViews/'+path;

                // as all the views aren't added on the build script, so we shoud add the baseUrl 
                // to make sure requirejs know what exactly path
                //routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseFileName + '.html';
                
                routeDef.templateUrl = appConfigs.baseUrl + '/' + viewPath + baseFileName + '.html';
                routeDef.controller = baseName + 'Controller';
                
                if (controllerAs) routeDef.controllerAs = controllerAs;
                routeDef.secure = (secure) ? secure : false;
                routeDef.resolve = {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        //var dependencies = [routeConfig.getControllersDirectory() + path + baseFileName + 'Controller.js'];
                        var dependencies = [appConfigs.baseUrl + '/'+controllerPath + baseFileName + 'Controller.js'], i;
                        if (compositeViews) {
                            _.each(compositeViews, function (compositeView) {
                                dependencies.unshift(compositePath + compositeView);
                            });
                        }
                        return resolveDependencies($q, $rootScope, dependencies);
                    }]
                };

                return routeDef;
            },

            // resolver method , this will call rootScope.appy which make effection if you are binding to DOM
            // we need to feed all resource files first before controller is rendered
            resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply()
                });

                return defer.promise;
            };

            return {
                resolve: resolve
            }
        }(this.routeConfig);

    };

    var shellModule = angular.module('shell');

    //Must be a provider since it will be injected into module.config()    
    shellModule.provider('routeResolver', routeResolver);
});
