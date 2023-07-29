import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reactForm.css';

function FromWithReact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let userInfo = {
      name: name,
      email: email,
      password: password,
    };

    console.log(userInfo);
  };

  return (
    <div>
      <h1>Registration</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleNameChange}
          value={name}
        />

        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="name"
          required
          onChange={handleEmailChange}
          value={email}
        />

        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          required
          onChange={handlePasswordChange}
          value={password}
        />

        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FromWithReact;
