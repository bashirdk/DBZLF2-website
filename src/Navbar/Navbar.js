import { NavLink } from "react-router-dom";
import React from "react";

const linkStyle = "text-blue hover:text-blue-darker no-underline hover:underline";

const Navbar = () => (
  <nav>
    <ul className="list-reset flex m-4">
      <li className="mr-6">
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/characters/" className={linkStyle}>
          Characters
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
