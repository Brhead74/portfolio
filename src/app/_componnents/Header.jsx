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
            <h1>Main Links</h1>
            <ul>
              <li><a href="#home">Acueil</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="social-links">
            <h1>Mes réseaux sociaux</h1>
            <ul>
              <li><a href="www.instagram.com/half_alive_artist/">Instagram</a></li>
              <li><a href="www.linkedin.com/in/max-const">Linkedin</a></li>
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
