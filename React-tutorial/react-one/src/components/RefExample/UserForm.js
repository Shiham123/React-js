import React, { Component, createRef } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.passwordRef = createRef();
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.userNameRef.current.style.backgroundColor = 'green';
    this.passwordRef.current.style.backgroundColor = 'black';
    console.log(this.userNameRef.current);
    console.log(this.passwordRef.current);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="Name">Name : </label>
          <input
            type="text"
            placeholder="Text"
            id="UserName"
            ref={this.userNameRef}
          />
        </div>
        <div>
          <label htmlFor="password">password : </label>
          <input
            type="password"
            placeholder="password"
            id="password"
            ref={this.passwordRef}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default UserForm;
