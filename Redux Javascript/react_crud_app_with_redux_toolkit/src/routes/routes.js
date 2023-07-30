import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '../pages/error';
import Navbar from '../layout/navbar';
import BookViews from '../features/addBook/booksView';
import AddBook from '../features/addBook/addBook';

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BookViews />} />
          <Route path="/add-books" element={<AddBook />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RoutesMain;
