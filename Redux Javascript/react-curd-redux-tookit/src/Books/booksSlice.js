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
    deleteBooks: (state, action) => {
      const id = action.payload;
      return (state = state.filter((book) => book.id !== id));
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const editingBook = state.find((book) => book.id === id);
      if (editingBook) {
        editingBook.title = title;
        editingBook.author = author;
      }
    },
  },
});

export const { showBooks, addBooks, deleteBooks, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
