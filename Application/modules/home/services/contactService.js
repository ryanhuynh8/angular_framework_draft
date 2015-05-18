'use strict';
define(function () {
    var injectParams = ['$location', '$filter', '$window',
                        '$timeout', 'authService'];
    var contactFactory = function ($location, $filter, $window, $timeout, authService) {

    };

    contactFactory.$inject = injectParams;    
    angular.module('home').factory('contactService', contactFactory);
});