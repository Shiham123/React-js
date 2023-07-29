import React, { useState } from 'react';
import ChildStateLifting from './childStateLifting';

function StateLifting() {
  const [data, setData] = useState('');

  const childData = (data) => {
    setData(data);
  };

  return (
    <div>
      <ChildStateLifting title="I am from parent" childData={childData} />
      <h2>{data}</h2>
    </div>
  );
}

export default StateLifting;
