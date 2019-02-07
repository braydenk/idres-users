import React from 'react';

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

  addUser(event) {
    event.preventDefault();
    console.log(this.state)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
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
