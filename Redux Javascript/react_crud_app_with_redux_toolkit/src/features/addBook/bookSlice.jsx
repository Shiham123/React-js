const { createSlice } = require('@reduxjs/toolkit');

const initialBooks = {
  books: [
    { id: 1, title: 'property one', author: 'Person one' },
    { id: 2, title: 'property two', author: 'Person two' },
    { id: 1, title: 'property three', author: 'Person three' },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;
