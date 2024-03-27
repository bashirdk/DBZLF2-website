import { NavLink } from "react-router-dom";
import React from "react";

import DragonBall from "../Logo/DragonBall";
import LittleFighter2 from "../Logo/LittleFighter2";

import "./Navbar.css";

const linkStyle = "navbar-style text-grey hover:text-white no-underline";

const Navbar = () => (
  <div className="pin-t sticky z-50 mb-4 shadow lf2-bg-blue border-b-2 lf2-border-blue">
    <div className="container mx-auto">
      <nav className="py-4 h-16 md:h-24 flex items-center justify-between mx-3">
        <div className="h-full">
          <NavLink to="/" className="nav-logo">
          <DragonBall
            strokeWidth="5"
            width="132"
            height="35"
          /> <br/>
          <LittleFighter2
            strokeWidth="3"
            stroke="rgba(0,0,0,1)"
            width="132"
            height="35"
          />
          </NavLink>
        </div>
        <ul className="list-reset flex m-4">
          <li className="mr-6">
            <NavLink to="/" exact className={linkStyle}  activeClassName='is-active'>
              Home
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink exact to="/characters/" className={linkStyle} activeClassName='is-active'>
              Characters
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink exact to="/downloads/" className={linkStyle} activeClassName='is-active'>
              Downloads
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/faqs/" className={linkStyle} activeClassName='is-active'>
              FAQs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;
