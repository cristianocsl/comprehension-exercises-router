import React, { Component } from 'react';

class StrictAccess extends Component {

  render() {
    const { user } = this.props;
    // if (user === joao) 
    return (
      <main>
        <h2> StrictAccess </h2>
        <p>
        { `${user} ` }
        </p>
      </main>
    );
  }
}

export default StrictAccess;