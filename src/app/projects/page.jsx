import AsymmetricalGallery from "../_componnents/AsymmetricalGallery";
import ProjectsHero from "./ProjectsHero";

import "../page.css";
import "./projects.css";

export const metadata = {
  title: 'Max.C //Projets',
};

export default function Projects() {
  return (
    <main className="page-shell">
      <ProjectsHero />

      <section className="projects-list">
        <div className="projects-list-inner">
          <AsymmetricalGallery />
        </div>
      </section>
    </main>
  );
}
