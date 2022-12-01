import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import logo from '../images/logo.png';

const Header = () => {
  const [menu, setMenu] = useState(true);

  const [rotate, setRotate] = useState(false);

  const rotateStyle = {
    transform: 'rotate(-90deg)',
    margin: '1.7rem -1.5rem',
  };

  window.onscroll = () => {
    setRotate(true);
    if (window.scrollY === 0) {
      setRotate(false);
    }
  };

  return (
    <header className="flex">
      <nav className="mobile-header">
        <NavLink
          smooth
          to="#"
          className="home-link"
          style={rotate ? rotateStyle : { margin: '0.6rem 0.2rem' }}
        >
          <img src={logo} alt="logo" />
        </NavLink>
        <i // eslint-disable-line
          className="fa-solid fa-bars fa-2x"
          style={{
            display: menu ? 'flex' : 'none',
          }}
          onClick={() => {
            setMenu(false);
          }}
        />
        <ul
          className="mobile-menu"
          style={{
            display: menu ? 'none' : 'flex',
          }}
        >
          <i // eslint-disable-line
            className="fa-solid fa-arrow-right-from-bracket fa-2x"
            onClick={() => {
              setMenu(true);
            }}
          />
          <li className="link-item" id="home">
            <NavLink
              smooth
              to="#"
              className="home-link"
              onClick={() => {
                setMenu(true);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              smooth
              to="#about"
              className="about-link"
              onClick={() => {
                setMenu(true);
              }}
            >
              About
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              smooth
              to="#projects"
              className="projects-link"
              onClick={() => {
                setMenu(true);
              }}
            >
              Projects
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              smooth
              to="#contact"
              className="contact-link"
              onClick={() => {
                setMenu(true);
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="desktop-header">
        <NavLink
          smooth
          to="#"
          className="home-link"
        >
          <img src={logo} alt="logo" />
        </NavLink>
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
};

export default Header;
