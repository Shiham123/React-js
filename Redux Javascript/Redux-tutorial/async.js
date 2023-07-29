const { default: axios } = require('axios');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const get_todos_request = 'get_todos_request',
  get_todos_success = 'get_todos_success',
  get_todos_failed = 'get_todos_failed';

const initialTodoState = {
  todos: [],
  loading: false,
  error: null,
};

const getTodosRequest = () => {
  return {
    type: get_todos_request,
  };
};

const getTodosFailed = (error) => {
  return {
    type: get_todos_failed,
    payload: error,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: get_todos_success,
    payload: todos,
  };
};

const todosReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case get_todos_request:
      return {
        ...state,
        loading: true,
      };

    case get_todos_success:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };

    case get_todos_failed:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest);
    axios
      .get(API_URL)
      .then((response) => {
        const todos = response.data;
        const title = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(title));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getTodosFailed(errorMsg));
      });
  };
};

const todosStore = createStore(todosReducer, applyMiddleware(thunk));

todosStore.subscribe(() => {
  console.log(todosStore.getState());
});

todosStore.dispatch(fetchData());
