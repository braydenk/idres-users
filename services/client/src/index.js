import React from 'react';
import ReactDOM from 'react-dom';

import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      isLoggedIn: false
    }
  };

  setUser = (data) => {
    this.setState({ username: data.username, email: data.email, isLoggedIn: true })
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn
          ? <Dashboard />
          : <SignIn setUser={this.setUser} />
        }
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
