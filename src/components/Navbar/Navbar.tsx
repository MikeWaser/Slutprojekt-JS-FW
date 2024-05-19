import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Open Libary</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/read-books">Read Books</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
