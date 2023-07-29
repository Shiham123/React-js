import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from './action/counterAction';

const CounterApp = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  return (
    <div>
      <h1>Counter app</h1>
      <h3>count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterApp;
