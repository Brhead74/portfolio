'use client';
import { useEffect, useState } from "react";
import AsymmetricalGallery from "./_componnents/AsymmetricalGallery";
import Contact from "./_componnents/Contact";
import "./page.css";
import { useLocale } from "./i18n/LocaleContext";

// Gmail compose link rather than mailto: — mailto only works when the
// visitor's browser has a default mail client registered, which silently
// does nothing otherwise. This opens a real compose window every time.
const CONTACT_EMAIL = "constantineau.max@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`;

export default function Home() {
  const { t } = useLocale();

  // Cycle the two floating tag pills through the fuller skill list so the
  // hero keeps showing something new, instead of two fixed labels forever.
  // The swap itself is a two-phase cross-fade — fade the current label out,
  // swap the text while it's invisible, then fade the new one in — driven
  // by a CSS transition rather than a keyframe, so it reads as one smooth
  // motion instead of an instant text change.
  const tagPool = t("home.hero.tags");
  const [tagStep, setTagStep] = useState(0);
  const [tagFading, setTagFading] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !Array.isArray(tagPool) || tagPool.length < 2) return;

    const id = setInterval(() => {
      setTagFading(true);
      window.setTimeout(() => {
        setTagStep((step) => step + 1);
        setTagFading(false);
      }, 320);
    }, 4200);
    return () => clearInterval(id);
  }, [tagPool]);

  const tagCount = Array.isArray(tagPool) ? tagPool.length : 0;
  const tagA = tagCount ? tagPool[tagStep % tagCount] : "";
  const tagB = tagCount > 1 ? tagPool[(tagStep + 1) % tagCount] : "";

  return (
    <main className="page-shell">
      <section id="home" className="hero-section">
        <div className="hero-text">
          <p className="hero-eyebrow">{t("home.hero.eyebrow")}</p>
          <h1 className="hero-title">
            {t("home.hero.title")}
          </h1>
          <p className="hero-description">
            {t("home.hero.description")}
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              {t("home.hero.voirProjets")}
            </a>
            <a href="#contact" className="button button-secondary">
              {t("home.hero.meContacter")}
            </a>
          </div>
          <div className="hero-meta">
            <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">{CONTACT_EMAIL}</a>
            <span aria-hidden="true">&middot;</span>
            <a href="https://www.linkedin.com/in/max-const" target="_blank" rel="noreferrer">linkedin.com/in/max-const</a>
          </div>
        </div>

        <div className="hero-figure">
          <div className="hero-blob-ring" aria-hidden="true" />
          <div className="hero-blob" aria-hidden="true" />
          <img
            src="/portrait-max.png"
            alt="Autoportrait dessiné de Maxime"
            className="hero-portrait"
          />
          <span className="hero-tag-float t1">
            <span className={`hero-tag-text${tagFading ? " is-fading" : ""}`}>{tagA}</span>
          </span>
          <span className="hero-tag-float t2">
            <span className={`hero-tag-text${tagFading ? " is-fading" : ""}`}>{tagB}</span>
          </span>
        </div>
      </section>

      <div className="gallery-intro">
        <p className="gallery-kicker">{t("home.gallery.kicker")}</p>
        <h2 className="gallery-title">{t("home.gallery.title")}</h2>
        <p className="gallery-description">
          {t("home.gallery.description")}
        </p>
      </div>
      <AsymmetricalGallery limit={5} />

      <div style={{ padding: '0 1rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'center' }}>
        <a href="/projects" className="button button-primary">
          {t("home.gallery.viewAll")}
        </a>
      </div>

      <Contact />
    </main>
  );
}
