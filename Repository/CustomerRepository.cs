using PhoneContactTracker.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhoneContactTracker.Web.Repository
{
    public class CustomerRepository
    {
        CustomerManagerEntities _Context;
        public CustomerRepository() {
            _Context = new CustomerManagerEntities();
        }
        public IQueryable<CustomerSummary> GetCustomerSummary(out int totalRecords) {
            var query = _Context.Customers
                    .Include("States")
                    .OrderBy(c => c.LastName);

            totalRecords = query.Count();
            return query.Select(x => new CustomerSummary
            {
                Id = x.Id,
                FirstName = x.FirstName,
                LastName = x.LastName,
                City = x.City,
                State = x.State,
                OrderCount = x.Orders.Count(),
                Gender = x.Gender
            }).AsQueryable();
        }

        internal List<State> GetStates()
        {
            var query = _Context.States.ToList();
            return query;
        }
        public Customer GetCustomerById(int id) {
            return _Context.Customers.FirstOrDefault(x => x.Id == id);
        }

        public OperationStatus UpdateCustomer(Customer cust) {
            var opStatus = new OperationStatus {Status =true };
            try
            {
                cust.State.Id = cust.StateId;
                _Context.Customers.Attach(cust);
                _Context.Entry<Customer>(cust).State = System.Data.EntityState.Modified;
                _Context.SaveChanges();
            }
            catch (Exception exp) {
                opStatus.Status = false;
                opStatus.ExceptionMessage = exp.Message;
            }
            return opStatus;
        }
        public OperationStatus CheckUnique(int id, string property, string value)
        {                        
            switch (property.ToLower())
	        {
                case "email":
                    var unique =  !_Context.Customers.Any(x => x.Id != id && x.Email==value);
                    return new OperationStatus { Status = unique };
                case "firstname":
                    return new OperationStatus();
                default:
                    return new OperationStatus();
	        }            
        }
    }
}