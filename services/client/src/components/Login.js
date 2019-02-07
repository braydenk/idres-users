import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

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

    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users/2`)
      .then((res) => {
        const data = {
          username: res.data.data.username,
          email: res.data.data.email
        };
        this.props.login(data);
      })
      .catch((err) => { console.log(err); });


  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
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
    )
  }
}
