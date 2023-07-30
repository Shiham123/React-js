import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from '../features/addBook/bookSlice';

const booksStore = configureStore({
  reducer: {
    booksReducer: booksSlice,
  },
});

export default booksStore;
