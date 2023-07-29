import React, { useReducer, useState } from 'react';

const books = [
  { id: 1, book: 'Book one' },
  { id: 2, book: 'Book two' },
  { id: 3, book: 'book three' },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const allBooks = [...state.book, action.payload];
    return {
      ...state,
      book: allBooks,
      modalOpen: true,
      modalText: 'Book is updated',
    };
  }
  if (action.type === 'REMOVE') {
    const filteredBooks = [...state.book].filter(
      (book) => book.id !== action.payload
    );
    return {
      ...state,
      book: filteredBooks,
      modalOpen: true,
      modalText: 'Book is removed',
    };
  }
  return state;
};

const Reducer = () => {
  const [bookName, setBookName] = useState('');

  const [bookState, dispatch] = useReducer(reducer, {
    book: books,
    modalOpen: false,
    modalText: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { id: new Date().getTime().toString(), book: bookName };
    dispatch({
      type: 'ADD',
      payload: newBook,
    });
    setBookName('');
  };

  const removeBook = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  return (
    <div>
      <h1>Book list</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(event) => {
            setBookName(event.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>

      {bookState.modalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.book.map((item) => {
        const { id, book } = item;
        return (
          <li key={id}>
            {book}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Reducer;
