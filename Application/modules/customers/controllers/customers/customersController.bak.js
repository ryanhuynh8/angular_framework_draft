'use strict';

/// <summary>
/// Customer controller which manage customers/customers.html page
/// </summary>
define(function () {
    var injectParams = ['$scope', '$location', '$timeout','$filter', 'authService', 'dataService'];

    // controller's constructor which initialize some required data
    var CustomersController = function ($scope, $location, $timeout,$filter, authService, dataService) {
        var vm = this;

        vm.customers = [];
        vm.filteredCustomers = [];
        vm.filteredCount = 0;
        vm.orderby = 'lastName';
        vm.reverse = false;        
        vm.DisplayModeEnum = {
            Card: 0,
            List: 1
        };        
        dataService.customer = {
            id:1,
            name:'dang tien phuc'
        };
        //paging 
        vm.totalRecords = 0;
        vm.pageSize = 10;
        vm.currentPage = 1;

        vm.searchTextChanged = function () {
            vm.filteredCustomers = $filter('nameCityStateFilter')(vm.customers, vm.searchText);
            vm.filteredCount = vm.filteredCustomers.length;
        }

        vm.pageChanged = function (page) {
            vm.currentPage = page;
            getCustomerSummary();
        };

        vm.changeDisplayMode = function (displayMode) {
            switch (displayMode) {
                case vm.DisplayModeEnum.Card:
                    vm.listDisplayModeEnabled = false;
                    break;
                case vm.DisplayModeEnum.List:
                    vm.listDisplayModeEnabled = true;
                    break;
            }
        };

        vm.navigate = function (url) {
            $location.path(url);
        };

        vm.setOrder = function (orderby) {

        };

        function init() {
            getCustomerSummary();
        };

        function getCustomerSummary() {
            dataService.getCustomerSummary(vm.currentPage - 1, vm.pageSize)
            .then(function (data) {
                vm.totalRecords = data.totalRecords;
                vm.customers = data.results;
                
                filterCustomers('');//trigger initial filter
                $timeout(function () {
                   
                },1000);
            }, function (error) {
                $window.alert('Sorry, an error occurred'+error.data.message);
            });
        }

        function filterCustomers(filterText) {
            vm.filteredCustomers = $filter('nameCityStateFilter')(vm.customers, filterText);
            vm.filteredCount = vm.filteredCustomers.length;
        }
        init();
    }

    CustomersController.$inject = injectParams;

    angular.module('customers').register.controller('CustomersController', CustomersController);
});