import React, { Component } from 'react';

class Login extends Component {
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
        <h1>Login</h1>
      </div>
    );
  }
}

export default Login;
