import React, { useState } from 'react';
import './navbar.css';
import { HashLink as Link } from 'react-router-hash-link'; // 👈 important change

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>HIRO</h2>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link smooth to="/#home" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="/#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
          <li>
          <Link smooth to="/#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link smooth to="/#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li className="mobile-contact">
          <Link smooth to="/#contact" onClick={() => setMenuOpen(false)}>
            Contact Me
          </Link>
        </li>
      </ul>

      <div className="contacts">
        <li><Link smooth to="/#contact">Contact Me</Link></li>
      </div>

      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
