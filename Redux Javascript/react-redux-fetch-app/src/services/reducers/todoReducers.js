import {
  get_todo_request,
  get_todo_success,
  get_todos_failed,
} from '../constant/todosConstant';

const initialState = {
  loading: false,
  todos: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_todo_request:
      return {
        ...state,
        loading: true,
      };
 
    case get_todo_success:
      return {
        loading: false,
        todos: action.payload,
        error: null,
      };

    case get_todos_failed:
      return {
        todos: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
