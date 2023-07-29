import React, { useState } from 'react';
import ComponentTwo from './Component2';
import UserContext from './UserContext';

const ComponentOne = () => {
  const [user, setUser] = useState({ id: 101, name: 'person one' });
  const [text, setText] = useState({
    name: 'person two',
    text: 'this is my text',
  });

  return (
    <UserContext.Provider value={{ user, text }}>
      <ComponentTwo />
    </UserContext.Provider>
  );
};

export default ComponentOne;
