import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage = 'Olá mundo' } = this.props;
      return (
        <div>
          <h2>Users</h2>
          <p> { greetingsMessage }, My awesome Users component </p>
        </div>
    );
  }
};

export default Users;
