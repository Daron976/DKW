import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import logo from '../images/logo.png';

const Header = () => (
  <header className="flex">
    <img src={logo} alt="logo" />
    <nav>
      <ul className="nav-link flex">
        <li className="link-item" id="home">
          <NavLink
            smooth
            to="#"
            className="home-link"
          >
            Home
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            smooth
            to="#about"
            className="about-link"
          >
            About
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            smooth
            to="#projects"
            className="projects-link"
          >
            Projects
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            smooth
            to="#contact"
            className="contact-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
