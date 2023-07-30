import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from './booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState(''),
    [author, setAuthor] = useState('');

  const numberOfBooks = useSelector((state) => state.booksReducer.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const book = { id: numberOfBooks + 1, title, author };
    dispatch(addBooks(book));
    navigate('/show-books', { replace: false });
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form className="form-field" onSubmit={handleSubmit}>
        <label htmlFor="title">Title : </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="author">Author : </label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleAuthor}
          required
        />
        <button type="submit">Submit Book</button>
      </form>
    </div>
  );
};

export default AddBook;
