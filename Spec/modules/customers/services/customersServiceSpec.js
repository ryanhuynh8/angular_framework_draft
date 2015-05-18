describe("Customers Service", function () {
    var customersSvc;

    beforeEach(function () {
        // load the module.
        module('customers');
    });

    beforeEach(inject(function (customersService) {
        customersSvc = customersService;
    }));

        
    it('should be defined', function () {
        expect(customersSvc).not.toBeNull();
    });

    //it('should have a getCustomerSummary function', function () {
    //    var fnPrototype = {},
    //        isFn = customersSvc && fnPrototype.toString.call(customersSvc) === '[object Function]';

    //    expect(isFn).toBe(true);
    //});

    it('should have a getCustomerSummary function', function () {
        expect(customersSvc.getCustomerSummary).toBeDefined();
    });
});
 