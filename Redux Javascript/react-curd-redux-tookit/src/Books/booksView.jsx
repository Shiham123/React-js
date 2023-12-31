import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooks } from './booksSlice';
import { Link } from 'react-router-dom';

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <div>
      <h2>List of books</h2>
      <table>
        <thead>
          <tr>
            <th>Title </th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
