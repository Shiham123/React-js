import React, { Component } from 'react';
import HomePage from './homePage';
import LoginPage from './logIn';

class SingInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  render() {
    const { loggedIn } = this.state;
    return <div>{loggedIn ? <HomePage /> : <LoginPage />}</div>;
  }
}

export default SingInPage;
