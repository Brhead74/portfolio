"use client";
import React, { useState } from "react";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const headerTitle = "Maxime Constantineau"; // Rename the variable to clarify its purpose

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <h1 className="site-title ">{headerTitle}</h1>
        <div className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div className={`menu-container ${menuOpen ? "open" : ""}`}>
        <h1 className="screen-title">{headerTitle}</h1>
        <button className="close-button" onClick={toggleMenu} aria-label="Close Menu">
          &times;
        </button>

        <nav className="menu-content">
          <div className="main-links">
            <h3>Main Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#contact" className="highlight">Contact</a></li>
            </ul>
          </div>
          <div className="social-links">
            <h3>View My Other Socials</h3>
            <ul>
              <li><a href="#stuff-i-use">Stuff I Use</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://artstation.com" target="_blank" rel="noopener noreferrer">Art Station</a></li>
            </ul>
          </div>
        </nav>

        <footer className="menu-footer">
          <p>© 2024 Maxime Constantineau. All rights reserved.</p>
          <p>No unauthorized use or reproduction without consent.</p>
        </footer>
      </div>
    </header>
  );
};

export default HeaderMenu;
