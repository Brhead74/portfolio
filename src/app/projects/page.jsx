import AsymmetricalGallery from "../_componnents/AsymmetricalGallery";
import Breadcrumb from "../_componnents/Breadcrumb";
import "../page.css";
import "./projects.css";

export const metadata = {
  title: 'Projets',
};

export default function Projects() {
  const crumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Tous les projets' },
  ];

  return (
    <main className="page-shell">
      <section className="projects-hero">
        <div className="projects-hero-inner">
          <Breadcrumb items={crumbs} />
          <h1 className="projects-hero-title">Tous les projets</h1>
          <p className="projects-hero-sub">La liste complète des projets présentés sur ce portfolio — filtres et détails à venir.</p>
        </div>
      </section>

      <section className="projects-list">
        <div className="projects-list-inner">
          <AsymmetricalGallery />
        </div>
      </section>
    </main>
  );
}
