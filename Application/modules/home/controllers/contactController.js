/// <summary>
/// Contact controller which manage contact.html page
/// </summary>
define(function () {
    var injectParams = ['$scope', '$routeParams', '$timeout'];

    // controller's constructor which initialize some required data
    var ContactController = function($scope, $routeParams, $timeout) {
        var vm = this;
        function init() {            
        }

        init();        
    };

    ContactController.$inject = injectParams;

    angular.module('home').register.controller('ContactController', ContactController);
});