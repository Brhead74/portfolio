'use client';
import AsymmetricalGallery from "./_componnents/AsymmetricalGallery";
import Contact from "./_componnents/Contact";
import "./page.css";
import { useLocale } from "./i18n/LocaleContext";

export default function Home() {
  const { t } = useLocale();

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
            <a href="mailto:constantineau.max@gmail.com">constantineau.max@gmail.com</a>
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
          <span className="hero-tag-float t1">{t("home.hero.tag1")}</span>
          <span className="hero-tag-float t2">{t("home.hero.tag2")}</span>
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
