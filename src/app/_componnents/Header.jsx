"use client";
import { useState } from "react";
import "./HeaderMenu.css";
import { useLocale } from "../i18n/LocaleContext";
import LanguageToggle from "./LanguageToggle";

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const headerTitle = "Maxime Constantineau";

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="brand-block">
          <a className="site-title" href="/">
            <span className="site-title-text">{headerTitle}</span>
          </a>
          <span className="site-kicker">{t("header.kicker")}</span>
        </div>

        <nav className="desktop-nav" aria-label="Primary">
          <a href="/">{t("header.nav.accueil")}</a>
          <a href="/#work">{t("header.nav.work")}</a>
          <a href="/projects">{t("header.nav.projets")}</a>
          <a href="/#contact" className="nav-cta">{t("header.nav.contact")}</a>
          <LanguageToggle />
        </nav>

        <div className="mobile-controls">
          <LanguageToggle />
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
      </div>

      <div id="site-menu" className={`menu-container ${menuOpen ? "open" : ""}`}>
        <div className="menu-shell">
          <div className="menu-header">
            <p className="menu-kicker">{t("header.menu.navigation")}</p>
            <h2 className="screen-title">{headerTitle}</h2>
          </div>

          <button className="close-button" onClick={toggleMenu} aria-label="Close menu">
            &times;
          </button>

          <nav className="menu-content" aria-label="Site navigation">
            <div className="menu-column">
              <h3>{t("header.menu.pages")}</h3>
              <ul>
                <li><a href="/" onClick={toggleMenu}>{t("header.nav.accueil")}</a></li>
                <li><a href="/#work" onClick={toggleMenu}>{t("header.nav.work")}</a></li>
                <li><a href="/projects" onClick={toggleMenu}>{t("header.nav.projets")}</a></li>
                <li><a href="/#contact" onClick={toggleMenu}>{t("header.menu.contact")}</a></li>
              </ul>
            </div>
            <div className="menu-column">
              <h3>{t("header.menu.reseaux")}</h3>
              <ul>
                <li><a href="https://www.instagram.com/half_alive_artist/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/max-const" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </nav>

          <footer className="menu-footer">
            <p>{t("header.menu.footer1")}</p>
            <p>{t("header.menu.footer2")}</p>
          </footer>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
