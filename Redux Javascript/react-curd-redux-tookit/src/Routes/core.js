import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/error';
import Navbar from '../Layouts/navbar';
import BooksView from '../Books/booksView';
import AddBook from '../Books/addBook';

const Core = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="/add-books" element={<AddBook />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Core;
