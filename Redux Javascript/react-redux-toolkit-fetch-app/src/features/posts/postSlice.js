import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchPosts = createAsyncThunk('POSTS/fetchPosts', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
