'use strict';

/// <summary>
/// Contact controller which manage contact.html page
/// </summary>
define(function () {
    var injectParams = ['$scope', '$location'];

    // controller's constructor which initialize some required data
    var WelcomeController = function ($scope, $location) {
        var vm = this;
        
        function init() {            
        };

        init();
    }

    WelcomeController.$inject = injectParams;

    angular.module('shell').register.controller('WelcomeController', WelcomeController);
});