import React, { useState } from 'react';
import User from './user';

const Users = () => {
  const [userOne, setUserOne] = useState('Person one');
  const [userTwo, setUserTwo] = useState('Person two');

  return (
    <div>
      <User personOne={userOne} personTwo={userTwo} />
    </div>
  );
};

export default Users;
