import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/characters/">Characters</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
