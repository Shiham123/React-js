import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../Books/booksSlice';

const booksStore = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default booksStore;
