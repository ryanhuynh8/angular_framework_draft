module PCT.Controllers {
    export class CustomersController {
        private message: string;

        constructor($scope , $location, $timeout, $filter, authService, dataService) {
            this.init();            
        }

        init(): void {
            this.message = "Foo!";
        }
    }    
}