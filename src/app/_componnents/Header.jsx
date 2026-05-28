"use client";
import React, { useState } from "react";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const headerTitle = "Maxime Constantineau";

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="brand-block">
          <a className="site-title" href="#home">
            {headerTitle}
          </a>
          <span className="site-kicker">portfolio créatif</span>
        </div>

        <nav className="desktop-nav" aria-label="Primary">
          <a href="#home"><span>01</span>Accueil</a>
          <a href="#work"><span>02</span>Work</a>
          <a href="#contact"><span>03</span>Contact</a>
        </nav>

        <button
          type="button"
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div id="site-menu" className={`menu-container ${menuOpen ? "open" : ""}`}>
        <div className="menu-shell">
          <div className="menu-header">
            <p className="menu-kicker">Navigation</p>
            <h2 className="screen-title">{headerTitle}</h2>
          </div>

          <button className="close-button" onClick={toggleMenu} aria-label="Close menu">
            &times;
          </button>

          <nav className="menu-content" aria-label="Site navigation">
            <div className="menu-column">
              <h3>Pages</h3>
              <ul>
                <li><a href="#home" onClick={toggleMenu}>Accueil</a></li>
                <li><a href="#work" onClick={toggleMenu}>Work</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
              </ul>
            </div>
            <div className="menu-column">
              <h3>Réseaux</h3>
              <ul>
                <li><a href="https://www.instagram.com/half_alive_artist/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/max-const" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </nav>

          <footer className="menu-footer">
            <p>Portfolio créatif et multimédia.</p>
            <p>Navigation simple, contenu direct.</p>
          </footer>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
