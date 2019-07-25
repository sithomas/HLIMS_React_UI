using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using HLIMS_UI_React.HttpClients;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace HLIMS_UI_React.HttpClients
{
    public class CustomerHttp : ICustomerHttp
    {
        private readonly HttpClient _client;
      
        private readonly string __apiRootUrl;
        private readonly IConfiguration _config;
        public CustomerHttp(HttpClient httpClient, IConfiguration config)
        {
            __apiRootUrl = config.GetValue<string>("Services:CustomerService:CustomerServiceRoot");
             _client = httpClient;
            _client.BaseAddress = new Uri(config.GetValue<string>("Services:CustomerService:Base"));
            _client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            _config = config;
            SetHttpCustomHeader();
        }
          private void SetHttpCustomHeader()
        {
            
            _client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
        public async Task<object> GetCustomers(string bankName, string loanID)
        {
            var route = string.Format(__apiRootUrl, bankName, loanID);
            var response = _client.GetAsync(route).Result;
            return await response.Content.ReadAsAsync<object>();
            
        }
    }
}
