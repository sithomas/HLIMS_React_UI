using System;
using System.Net;
using System.Threading.Tasks;
using HLIMS_UI_React.HttpClients;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
namespace HLIMS_UI_React.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class CustomerController : Controller
    {
        private readonly ICustomerHttp _customerHttpClient;
        public CustomerController(ICustomerHttp customerHttpClient)
        {
            _customerHttpClient = customerHttpClient;
         
        }

        //GET: api/customer/bank/{bank}/loan/{loan}
        //[HttpGet("api/customer/bank/{bankName}/loan/{loanID}")]
         [HttpGet("[action]")]
        public async Task<IActionResult> GetCustomers()
        {
           
          
            try
            {
                var customers = await _customerHttpClient.GetCustomers("SBI", "SBI_sijuthomasp+1@gmail.com_8848542724_01012019");

                return Ok(customers);
            }
            catch (Exception ex)
            {

                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}