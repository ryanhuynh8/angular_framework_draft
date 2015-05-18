'use strict';
define( function () {
    var injectParams = ['$location', '$filter', '$window',
                        '$timeout', 'authService'];
    var homeFactory = function ($location, $filter, $window, $timeout, authService) {

    };

    homeFactory.$inject = injectParams;
    
    angular.module('home').factory('homeService', homeFactory);
});