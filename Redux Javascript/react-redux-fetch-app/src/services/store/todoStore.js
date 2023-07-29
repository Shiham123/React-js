import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from '../reducers/todoReducers';

const todoStore = createStore(todoReducer, applyMiddleware(thunk));

export default todoStore;
