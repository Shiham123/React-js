import { createSlice } from '@reduxjs/toolkit';

const dummyBook = [
  { id: 1, title: 'books one', author: 'person one' },
  { id: 2, title: 'books Two', author: 'person two' },
  { id: 3, title: 'books three', author: 'person three' },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: dummyBook,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { showBooks, addBooks } = booksSlice.actions;
export default booksSlice.reducer;
