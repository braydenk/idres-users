import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email
    }

    axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
        .then((res) => { console.log(res); })
        .catch((err) => { console.log(err); });
  }

  render() {
    return (
      <form onSubmit={(event) => this.addUser(event)}>
        <input
          name="username"
          type="text"
          placeholder="Enter a username"
          required
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Enter an email"
          required
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  };
}
