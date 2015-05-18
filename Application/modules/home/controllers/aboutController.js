'use strict';

/// <summary>
/// Contact controller which manage contact.html page
/// </summary>
define(function () {
    var injectParams = ['$scope', '$location','authService'];

    // controller's constructor which initialize some required data
    var AboutController = function ($scope, $location, config, authService) {
        var vm = this;
        vm.home = [];
        function init() {            
        };

        init();
    }

    AboutController.$inject = injectParams;

    angular.module('home').register.controller('AboutController', AboutController);    
});