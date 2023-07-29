import React, { useRef } from 'react';

const UserForm = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: userNameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(userInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name : </label>
        <input type="text" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password">password : </label>
        <input type="password" ref={passwordRef} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default UserForm;
