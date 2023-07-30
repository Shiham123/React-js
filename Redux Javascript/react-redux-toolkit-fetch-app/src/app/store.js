import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/posts/postSlice';

const counterStore = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});

export default counterStore;
