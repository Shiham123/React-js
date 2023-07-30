import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/show-books" className="nav-link">
          Show-Books
        </Link>
        <Link to="/Add-Books" className="nav-link">
          Add-Books
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navbar;
