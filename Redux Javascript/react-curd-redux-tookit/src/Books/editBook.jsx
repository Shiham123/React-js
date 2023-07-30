import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './booksSlice';

const EditBook = () => {
  const location = useLocation();

  const [id, setId] = useState(location.state.id),
    [title, setTitle] = useState(location.state.title),
    [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate('/show-books', { replace: true });
  };

  return (
    <div>
      <h1>Edit book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="author">Author : </label>
          <input
            type="text"
            name="title"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            required
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
