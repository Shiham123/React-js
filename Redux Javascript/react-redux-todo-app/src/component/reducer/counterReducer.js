import {
  decrement_counter,
  increment_counter,
  reset_counter,
} from '../constant/counterConstant';

const initialCounter = {
  count: 0,
};

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case increment_counter:
      return {
        ...state,
        count: state.count + 1,
      };

    case decrement_counter:
      return {
        ...state,
        count: state.count - 1,
      };

    case reset_counter:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
