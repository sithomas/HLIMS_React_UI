using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace HLIMS_UI_React.HttpClients
{
    public interface ICustomerHttp
    {
        Task<object> GetCustomers(string bankName, string customerNumber);
    }
}
