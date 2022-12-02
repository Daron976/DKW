import React from 'react';

const Footer = () => (
  <footer>
    <ul className="footer-links flex">
      <li className="footer-list">
        <h3 className="footer-links-header">Contact</h3>
        <li className="footer-list-item">daronkwiafe@gmail.com</li>
        <li className="footer-list-item">+27 65 747 8746</li>
        <li className="footer-list-item">Sandton, South Africa</li>
      </li>
      <li className="footer-list social flex">
        <h3 className="footer-links-header">Social</h3>
        <div className="flex social-div">
          <li className="footer-list-item">
            <a href="https://www.linkedin.com/in/daronkwiafe/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li className="footer-list-item">
            <a href="https://github.com/Daron976">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li className="footer-list-item">
            <a href="https://angel.co/u/daronkwiafe">
              <i className="fa-brands fa-angellist" />
            </a>
          </li>
          <li className="footer-list-item">
            <a href="https://www.facebook.com/daron.wiafe">
              <i className="fa-brands fa-meta" />
            </a>
          </li>
          <li className="footer-list-item">
            <a href="https://twitter.com/WiafeDaron">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li className="footer-list-item">
            <a href="https://www.instagram.com/sagineer976/">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
        </div>
      </li>
    </ul>
    <div className="copyright flex">
      <p>
        © Daron Wiafe. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
