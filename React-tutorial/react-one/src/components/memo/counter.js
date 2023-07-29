import React, { useCallback, useState } from 'react';
import Message from './message';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState('false');

  console.log('app rendering');

  const handleCounts = () => {
    setCount((count) => count + 1);
  };

  const handleIncrementMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {toggle ? 'on' : 'off'}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
      <h1>Count : {count}</h1>
      <button onClick={handleCounts}>Increment</button>
      <Message value={count} onHandleIncrement={handleIncrementMessage} />
    </div>
  );
};

export default Counter;
