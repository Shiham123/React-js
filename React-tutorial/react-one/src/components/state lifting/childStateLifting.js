import React from 'react';

function ChildStateLifting(props) {
  const { title, childData } = props;

  const data = 'I am from child state lifting file';

  childData(data);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default ChildStateLifting;
