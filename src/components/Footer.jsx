import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Dr. Gargi
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dr. Gargi Nandi. All rights reserved.</p>
        </div>
        {/* Large watermark text like in the skeleton */}
        <div className="footer-watermark">Gargi</div>
      </div>
    </footer>
  );
};

export default Footer;
