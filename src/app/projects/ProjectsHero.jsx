'use client';
import Breadcrumb from "../_componnents/Breadcrumb";
import { useLocale } from "../i18n/LocaleContext";

const ProjectsHero = () => {
  const { t } = useLocale();

  const crumbs = [
    { label: t("projectsPage.breadcrumbHome"), href: '/' },
    { label: t("projectsPage.breadcrumbAll") },
  ];

  return (
    <section className="projects-hero">
      <div className="projects-hero-inner">
        <Breadcrumb items={crumbs} />
        <p className="kicker projects-hero-kicker">{t("projectsPage.kicker")}</p>
        <h1 className="projects-hero-title">{t("projectsPage.title")}</h1>
        <p className="projects-hero-sub">{t("projectsPage.sub")}</p>
      </div>
    </section>
  );
};

export default ProjectsHero;
