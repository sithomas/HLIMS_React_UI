import axios from 'axios';
import format from 'string-format';
import { get, isEmpty } from 'lodash';
import * as _ from 'lodash';
const baseCustomerUrl = '/api';
const getCustomerPath = '/customer/GetCustomers';
const getClient = (baseUrl = null) => {
    const options = {
        baseURL: baseUrl
    };

    const client = axios.create(options);
    client.interceptors.request.use(
        config => {
            // const token = new CookieAuth().getCookieValue('jwt');
            // if (token) {
            //     config.headers['Authorization'] = 'Bearer ' + token;
            // }
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            config.headers['Content-Type'] = 'application/json';
            config.headers['Accept'] = 'application/json, text/plain, */*';
            // TODO: check if have any lang saved in localStorage, if not browser lang or default
            config.headers['Accept-Language'] = 'en';
            config.headers['Access-Control-Allow-Origin'] = '*';
            return config;
        },
        error => {
            if (
                get(error,'response.status','') === 401
            ) {
                //TODO: need to see how to get the refresh token and use that to reauthenticate the user
                //1. dispatch refreshtoken (get originalRequest from error.config
                //2. add the jwt token from the refresh token to header
                //3. return the new request
                //Till we figure out refresh token we will just log the user out
                //4.dispatch('logout');
                console.log('token expired');
            }
            return Promise.reject(error);
        }
    );

    return client;
};
let client = getClient(baseCustomerUrl);
const ServiceClient = {
async getCustomers(bankName, loanID) {
    return await client.get(format(getCustomerPath));
}
};
export {ServiceClient};