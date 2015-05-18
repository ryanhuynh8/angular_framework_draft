using PhoneContactTracker.Web.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace PhoneContactTracker.Web.Controllers
{
    public class DataServiceController : ApiController
    {
        CustomerRepository _repository;

        public DataServiceController() {
            _repository = new CustomerRepository();
        }

        [HttpGet]
        [Queryable]
        public HttpResponseMessage CustomerSummary() {
            int totalRecords;
            var custSummary = _repository.GetCustomerSummary(out totalRecords);
            HttpContext.Current.Response.Headers.Add("X-InlineCount", totalRecords.ToString());
            return Request.CreateResponse(HttpStatusCode.OK, custSummary);
        }

        [HttpGet]
        public HttpResponseMessage States() {
            var states = _repository.GetStates();
            return Request.CreateResponse(HttpStatusCode.OK, states);
        }

        [HttpGet]
        public HttpResponseMessage CustomerById(int id) {
            var customer = _repository.GetCustomerById(id);
            return Request.CreateResponse(HttpStatusCode.OK, customer);
        }

        [HttpGet]
        public HttpResponseMessage CheckUnique(int id, string property, string value) {
            var opStatus = _repository.CheckUnique(id, property, value);
            return Request.CreateResponse(HttpStatusCode.OK, opStatus);
        }
        // PUT api/<controller>/5
        [HttpPut]
        public HttpResponseMessage PutCustomer(int id,Customer customer) {
            var opStatus = _repository.UpdateCustomer(customer);
            //update success
            if (opStatus.Status) {
                return Request.CreateResponse<Customer>(HttpStatusCode.Accepted, customer);
            }
            return Request.CreateErrorResponse(HttpStatusCode.NotModified, opStatus.ExceptionMessage);
        }
    }
}