import axios from 'axios';
import {
  get_todo_request,
  get_todo_success,
  get_todos_failed,
} from '../constant/todosConstant';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getAllTodo = () => async (dispatch) => {
  dispatch({ type: get_todo_request });
  try {
    const response = await axios.get(apiUrl);
    dispatch({ type: get_todo_success, payload: response.data });
  } catch (error) {
    dispatch({ type: get_todos_failed, payload: error.message });
  }
};
