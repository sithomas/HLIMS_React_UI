import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, This is Sample POC application for Home Loan Insurance Management System (HLIMS)</h1>
        <p>This is built in using the tech stack:-</p>
        <ul>
          <li>React JS - .Net Core React Template UI</li>
          <li>.Net Core Web API with Docker Container</li>
          <li>AWS DynamoDB as NOSQL Database</li>
        </ul>
        <p>Additionaly unit tests created for UI and API</p>
        <ul>
          <li>React JEST/Enzyme Unit Tests framework</li>
          <li>Visual Studio Testing framework</li>
          <li>Deployed in AWS ECS</li>
        </ul>
        <p>Note: Please click on FetchData tab to see the customer data loaded</p>
      </div>
    );
  }
}
