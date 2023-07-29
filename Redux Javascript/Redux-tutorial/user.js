const { createStore } = require('redux');

const add_user = 'add_user';

const initialState = {
  users: ['person one'],
  count: 1,
};

const addUser = (value) => {
  return {
    type: add_user,
    payload: value,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_user:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
};

const storeUser = createStore(userReducer);

storeUser.subscribe(() => {
  console.log(storeUser.getState());
});

storeUser.dispatch(addUser('shiham'));
storeUser.dispatch(addUser('fahima'));
storeUser.dispatch(addUser('last person'));
