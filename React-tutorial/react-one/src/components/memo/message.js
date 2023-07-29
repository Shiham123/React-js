import React, { memo, useMemo } from 'react';

const Message = ({ value, onHandleIncrement }) => {
  console.log('message rendering');

  const calculationNumber = useMemo(() => {
    let number = 0;
    for (let i = 0; i < 10; i++) {
      number++;
    }
    return number;
  }, []);

  return (
    <div>
      <div>Calculation number : {calculationNumber}</div>
      <div>Msg : {value}</div>
      <button onClick={onHandleIncrement}>Increment message number</button>
    </div>
  );
};

export default memo(Message);
