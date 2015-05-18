'use strict';
define(function () {
    
    var injectParams = ['$scope', '$location', 'authService'];

    var NavbarController = function ($scope, $location, authService) {
        var vm = this;
    };

    NavbarController.$inject = injectParams;

    //Loaded normally since the script is loaded upfront 
    //Dynamically loaded controller use app.register.controller
    angular.module('home').controller('NavbarController', NavbarController);
});