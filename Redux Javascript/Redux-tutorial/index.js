const { createStore } = require('redux');

const increment = 'increment';
const decrement = 'decrement';
const reset = 'reset';
const increment_by_value = 'increment_by_value';

const initialStore = {
  user: ['person'],
  count: 0,
};

const incrementAction = () => {
  return {
    type: increment,
  };
};

const decrementAction = () => {
  return {
    type: decrement,
  };
};

const resetAction = () => {
  return {
    type: reset,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: increment_by_value,
    payload: value,
  };
};

const counterReducer = (state = initialStore, action) => {
  switch (action.type) {
    case increment:
      return {
        count: state.count + 1,
      };
    case decrement:
      return {
        count: state.count - 1,
      };
    case reset:
      return {
        count: 0,
      };
    case increment_by_value:
      return {
        count: state.count + action.payload,
      };
    default:
      state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));
