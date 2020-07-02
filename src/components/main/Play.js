import React, { Component } from 'react';

class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Play</h1>
      </div>
    );
  }
}

export default Play;
