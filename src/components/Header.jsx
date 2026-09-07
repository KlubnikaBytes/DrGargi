import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <Stethoscope className="logo-icon" />
          <span>Dr. Gargi</span>
        </a>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className="btn btn-primary nav-btn" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
          }}>
            Book a Visit
          </button>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
