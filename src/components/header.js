import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import logo from '../images/logo.png';

const Header = () => {
  const [menu, setMenu] = useState(true);

  const [toggleMenu, setToggleMenu] = useState(false);

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
    if (window.scrollBy) {
      setToggleMenu(false);
      setTimeout(() => {
        setMenu(true);
      }, 500);
    }
  };

  return (
    <header className="flex">
      <NavLink
        smooth
        to="#"
        className="home-link mobile-logo"
        style={rotate ? rotateStyle : { margin: '0.6rem 0.2rem' }}
        onClick={() => {
          setToggleMenu(false);
          setTimeout(() => {
            setMenu(true);
          }, 500);
        }}
      >
        <img src={logo} alt="logo" />
      </NavLink>
      <nav
        className={
          toggleMenu
            ? 'mobile-header overlay'
            : 'mobile-header'
        }
      >
        <i // eslint-disable-line
          className="fa-solid fa-bars fa-2x menu-open"
          style={{
            display: menu ? 'flex' : 'none',
          }}
          onClick={() => {
            setToggleMenu(true);
            setMenu(false);
            localStorage.setItem('scroll', 'hidden');
          }}
        />
        <ul
          className={
            toggleMenu
              ? 'mobile-menu menu-open'
              : 'mobile-menu menu-close'
          }
          style={{
            display: menu ? 'none' : 'flex',
          }}
        >
          <i // eslint-disable-line
            className="fa-solid fa-arrow-right-from-bracket fa-2x"
            onClick={() => {
              setToggleMenu(false);
              setTimeout(() => {
                setMenu(true);
              }, 500);
            }}
          />
          <div className="link-item-container flex">
            <li className="link-item" id="home">
              <NavLink
                smooth
                to="#"
                className="home-link"
                onClick={() => {
                  setToggleMenu(false);
                  setTimeout(() => {
                    setMenu(true);
                  }, 500);
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
                  setToggleMenu(false);
                  setTimeout(() => {
                    setMenu(true);
                  }, 500);
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
                  setToggleMenu(false);
                  setTimeout(() => {
                    setMenu(true);
                  }, 500);
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
                  setToggleMenu(false);
                  setTimeout(() => {
                    setMenu(true);
                  }, 500);
                }}
              >
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <nav
        className="desktop-header"
      >
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
