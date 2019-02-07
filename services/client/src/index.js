import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';

class App extends React.Component {
  constructor() {
    super();
  };

  displayLogin() {
    return (
        <h1>Hello</h1>
    );
  }

  render() {
    return (
      <Router>
        <div>
          <button onClick={this.diplayLogin}>
            <Link to="/login">Login</Link>
          </button>

          <button onClick={this.displaySignup}>
            <Link to="/signup">Signup</Link>
          </button>

          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
        </div>
      </Router>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
