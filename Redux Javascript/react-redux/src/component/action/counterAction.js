import {
  increment_counter,
  decrement_counter,
  reset_counter,
} from '../constant/counterConstant';

export const incrementCounter = () => {
  return {
    type: increment_counter,
  };
};

export const decrementCounter = () => {
  return {
    type: decrement_counter,
  };
};

export const resetCounter = () => {
  return {
    type: reset_counter,
  };
};
