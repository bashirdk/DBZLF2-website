import { NavLink } from "react-router-dom";
import React from 'react';

import DragonBall from "../Logo/DragonBall";
import LittleFighter2 from "../Logo/LittleFighter2";

import "./Navbar.css";

const linkStyle = "navbar-style text-grey hover:text-white no-underline";

const Navbar = () => {

  const addOpenClass = () =>{
    const hamburger = document.getElementById('hamburger');
    if (hamburger.classList.contains("open")) {
      hamburger.classList.remove("open");
    } else {
      hamburger.classList.add("open");
    }

    const navMenu = document.getElementById('nav_menu');
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
    } else {
      navMenu.classList.add("open");
    }
  }

  const navLinks = [
    {
      "title": "Guide",
      "link": "/guide"
    },
    {
      "title": "Characters",
      "link": "/characters"
    },
    {
      "title": "Backgrounds",
      "link": "/backgrounds"
    },
    {
      "title": "Downloads",
      "link": "/downloads"
    },
    {
      "title": "FAQs",
      "link": "/faqs"
    },
    {
      "title": "Tools",
      "link": "/tools"
    }
  ]

  return (
    <>
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
        <div className="nav-hamburger">
          <div id="hamburger" className="hamburger" onClick={addOpenClass}></div>
        </div>
        <ul className="list-reset flex m-4 lf2-bg-blue" id="nav_menu">
          <li key="/" className="mr-6">
            <NavLink to="/" activeClassName="is-active" exact className={linkStyle} onClick={addOpenClass}>
              Home
            </NavLink>
          </li>
          { navLinks.map((link) => {
              return (
                <li key={link.link} className="mr-6">
                  <NavLink to={link.link} activeClassName="is-active" className={linkStyle} onClick={addOpenClass}>
                    {link.title}
                  </NavLink>
                </li>
              )
            })}
        </ul>
      </nav>
    </div>
  </div>
  </>
)};

export default Navbar;
