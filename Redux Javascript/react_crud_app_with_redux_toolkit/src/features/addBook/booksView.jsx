import React from 'react';
import { useSelector } from 'react-redux';

const BookViews = () => {
  const books = useSelector((state) => state.booksSlice.books);

  return (
    <div>
      <h1>List of books</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default BookViews;
