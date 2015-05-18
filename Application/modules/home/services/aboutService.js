'use strict';
define(function () {   

    var injectParams = ['$location', '$filter', '$window',
                        '$timeout', 'authService'];
    var aboutFactory = function ($location, $filter, $window, $timeout, authService) {

    };

    aboutFactory.$inject = injectParams;
    angular.module('home').factory('aboutService', aboutFactory);
    
});