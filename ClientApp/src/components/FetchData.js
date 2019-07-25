import React, { Component } from 'react';
import { get, isUndefined, isNull } from 'lodash';
import { ServiceClient } from '../ServiceClient';
export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor (props) {
    super(props);
    this.state = { customers: [], loading: true };
 
  }
  async getCustomersClient() {
    const response = await ServiceClient.getCustomers('SBI', 'SBI_sijuthomasp+1@gmail.com_8848542724_01012019');
    try {
      this.setState({
        customers: response.data.messageBody,
        isLoading: false
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }
  static renderCustomersTable (customers) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer =>
            <tr >
              <td>{customer.banName}</td>
              <td>{customer.messageBody.banName}</td>
              <td>{customer.me.loanID}</td>
              <td>{customer.loanID}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
componentDidMount()
{
    try {
        this.getCustomersClient();
    }
    catch (error) {
        this.setState({ error, isLoading: false });
    }

}
  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderCustomersTable(this.state.customers);

    return (
      <div>
        <h1>Borrowers</h1>
        <p>This component demonstrates borrowers from DynamoDB AWS</p>
        {contents}
      </div>
    );
  }
}
