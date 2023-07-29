import React, { useState } from 'react';

function SignUpTwo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
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
    const userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>this is form validation</h2>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="email">email : </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label htmlFor="password">password : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUpTwo;
