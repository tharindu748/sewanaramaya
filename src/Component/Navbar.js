import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <Link to="/" className="logo">
          සෙවනාරාමයට
          <span className="logo-dot"></span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="nav-links">
          <NavLink to="/" text="මුල් පිටුව" />
          <NavLink to="/about" text="අප ගැන" />
          <NavLink to="/events" text="සෙවනාරාම කලාකෘති" />
          <NavLink to="/members" text="සමාජිකයින්" />
          <NavLink to="/contact" text="සම්බන්ධ වන්න" />
        </div>
        
        <div className="nav-actions">
          <button className="nav-button">
            <span>පිවිසෙන්න</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.5 1L14 7.5L7.5 14M1 7.5H14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          <NavLink to="/" text="මුල් පිටුව" mobile />
          <NavLink to="/about" text="අප ගැන" mobile />
          <NavLink to="/events" text="සෙවනාරාම කලාකෘති" mobile />
          <NavLink to="/members" text="සමාජිකයින්" mobile />
          <NavLink to="/contact" text="සම්බන්ධ වන්න" mobile />
        </div>
        
        <div className="mobile-nav-actions">
          <button className="nav-button">
            <span>පිවිසෙන්න</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.5 1L14 7.5L7.5 14M1 7.5H14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink component
function NavLink({ to, text, mobile = false }) {
  return (
    <Link 
      to={to} 
      className={`nav-link ${mobile ? 'mobile' : ''}`}
    >
      {text}
      <span className="nav-link-underline"></span>
    </Link>
  );
}

export default Navbar;