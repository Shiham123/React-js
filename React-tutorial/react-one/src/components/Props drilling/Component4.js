import React, { useContext } from 'react';
import UserContext from './UserContext';

const ComponentFour = () => {
  const { user, text } = useContext(UserContext);
  console.log(user);
  console.log(text);
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{text.name}</h1>
      <h1>{text.text}</h1>
      <h1>{user.name}</h1>
    </div>
  );
};

export default ComponentFour;
