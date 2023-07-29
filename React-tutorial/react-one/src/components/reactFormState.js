import React, { useState } from 'react';
import './css/reactForm.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReactFormWithState() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = user;

  const handleAllChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    console.log('form has been submitted');
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
          onChange={handleAllChange}
          value={name}
        />

        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          required
          onChange={handleAllChange}
          value={email}
        />

        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          required
          onChange={handleAllChange}
          value={password}
        />

        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ReactFormWithState;
