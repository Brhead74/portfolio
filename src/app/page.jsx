import AsymmetricalGallery from "./_componnents/AsymmetricalGallery";
import Contact from "./_componnents/Contact";
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="page-shell">
      <section id="home" className="hero-section">
        <div className="hero-content">
          <span className="hero-pill">
            Portfolio multimédia
          </span>

          <div className="hero-copy">
            <h1 className="hero-title">
              Des projets visuels simples, utiles et bien présentés.
            </h1>
            <p className="hero-description">
              Je crée des expériences multimédia, de l&apos;identité visuelle au jeu, avec une approche claire, lisible et orientée résultat.
            </p>
          </div>

          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              Voir les projets
            </a>
            <a href="#contact" className="button button-secondary">
              Me contacter
            </a>
          </div>

          <div className="hero-tags">
            <span className="hero-tag">3D / VFX</span>
            <span className="hero-tag">Jeu vidéo</span>
            <span className="hero-tag">Expérimentation</span>
            <span className="hero-tag">Animation</span>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-visual-glow" />
          <div className="hero-visual">
            <Image
              src="/Header.png"
              alt="Aperçu du portfolio"
              width={1200}
              height={900}
              priority
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <div className="gallery-intro">
        <p className="gallery-kicker">Selected work</p>
        <h2 className="gallery-title">Mes projets</h2>
        <p className="gallery-description">
          Une sélection courte et lisible de travaux 2D, 3D, jeu et interface. Chaque carte reste simple, mais met en avant le contenu.
        </p>
      </div>
      <AsymmetricalGallery limit={5} />

      <div style={{ padding: '0 1rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'center' }}>
        <a href="/projects" className="button button-primary">
          Voir tous les projets
        </a>
      </div>

      <Contact />
    </main>
  );
}
