import React from 'react';
import Login from './Login';

export default class SignIn extends React.Component {

  loginUser = (data) => {
    this.props.setUser(data)
  }

  render() {
    return (
      <Login login={this.loginUser} />
    )
  }
}
