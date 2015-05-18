/// <summary>
/// Home controller which manage home.html page
/// </summary>
define(function (){
    
    var injectParams = ['$scope', '$routeParams', '$timeout'];

    // controller's constructor which initialize some required data
    var HomeController = function($scope, $routeParams, $timeout) {
        var vm = this;
        
        function init(){            
        };

        init();
    };

    HomeController.$inject = injectParams;
    
    angular.module('home').register.controller('HomeController', HomeController);    
});