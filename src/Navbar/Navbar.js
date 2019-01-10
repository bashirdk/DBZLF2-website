import { NavLink } from "react-router-dom";
import React from "react";

const linkStyle = "text-grey hover:text-white no-underline";

const Navbar = () => (
  <div className="pin-t sticky z-50 mb-4 shadow bg-blue-darker">
    <div class="container mx-auto">
      <nav className="py-4 h-16 md:h-24  flex items-center justify-between mx-3">
        <div className="h-full">
          <NavLink to="/">
          <img 
            src={require('../images/dbzlf2-logo.png')}
            className="h-full"
          />
          </NavLink>
        </div>
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
    </div>
  </div>
);

export default Navbar;
