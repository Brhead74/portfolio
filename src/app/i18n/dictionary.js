// Single source of truth for every bit of static UI copy on the site,
// keyed by locale. Project content (data.js) carries its own fr/en pairs
// per field instead of living here, since it's data, not chrome.
export const dictionary = {
  fr: {
    header: {
      kicker: "portfolio créatif",
      nav: {
        accueil: "Accueil",
        work: "Travaux",
        projets: "Projets",
        contact: "Me contacter",
      },
      menu: {
        navigation: "Navigation",
        pages: "Pages",
        reseaux: "Réseaux",
        contact: "Contact",
        footer1: "Portfolio créatif et multimédia.",
        footer2: "Navigation simple, contenu direct.",
      },
    },
    home: {
      hero: {
        eyebrow: "Jeu vidéo · VR · 3D · VFX",
        title: "Des projets visuels simples, utiles et bien présentés.",
        description:
          "Je crée des expériences multimédia, de l'identité visuelle au jeu, avec une approche claire, lisible et orientée résultat — du prototype de gamejam au projet d'équipe complet.",
        voirProjets: "Voir les projets",
        meContacter: "Me contacter",
        tag1: "VR · 3D",
        tag2: "Game jams",
      },
      gallery: {
        kicker: "Travaux sélectionnés",
        title: "Mes projets",
        description:
          "Une sélection courte et lisible de travaux 2D, 3D, jeu et interface. Chaque carte reste simple, mais met en avant le contenu.",
        viewAll: "Voir tous les projets",
      },
    },
    contact: {
      kicker: "Contact",
      title: "Travaillons sur quelque chose de clair et utile.",
      description:
        "Créateur multimédia, je peux aider sur du design, du jeu vidéo, du visuel 3D ou des interfaces simples à comprendre.",
      contactMe: "Contactez-moi",
      viewCv: "Voir mon CV",
      viewCvTitle: "Ouvrir le CV dans un nouvel onglet",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    projectsPage: {
      breadcrumbHome: "Accueil",
      breadcrumbAll: "Tous les projets",
      kicker: "Portfolio",
      title: "Tous les projets",
      sub: "La liste complète des projets présentés sur ce portfolio — filtres et détails à venir.",
    },
    projectDetail: {
      breadcrumbHome: "Accueil",
      breadcrumbAll: "Tous les projets",
      notFound: "Projet introuvable.",
      about: "À propos",
      stack: "Stack",
      tidbits: "Anecdotes",
      visitProject: "Visiter le projet",
    },
    common: {
      jeuTag: "Jeu",
    },
  },
  en: {
    header: {
      kicker: "creative portfolio",
      nav: {
        accueil: "Home",
        work: "Work",
        projets: "Projects",
        contact: "Contact me",
      },
      menu: {
        navigation: "Navigation",
        pages: "Pages",
        reseaux: "Networks",
        contact: "Contact",
        footer1: "Creative multimedia portfolio.",
        footer2: "Simple navigation, direct content.",
      },
    },
    home: {
      hero: {
        eyebrow: "Video game · VR · 3D · VFX",
        title: "Simple, useful, well-presented visual projects.",
        description:
          "I build multimedia experiences, from visual identity to games, with a clear, readable, results-oriented approach — from gamejam prototype to full team project.",
        voirProjets: "View projects",
        meContacter: "Contact me",
        tag1: "VR · 3D",
        tag2: "Game jams",
      },
      gallery: {
        kicker: "Selected work",
        title: "My projects",
        description:
          "A short, readable selection of 2D, 3D, game, and interface work. Each card stays simple, but puts the content first.",
        viewAll: "View all projects",
      },
    },
    contact: {
      kicker: "Contact",
      title: "Let's work on something clear and useful.",
      description:
        "As a multimedia creator, I can help with design, video games, 3D visuals, or interfaces that are simple to understand.",
      contactMe: "Contact me",
      viewCv: "View my resume",
      viewCvTitle: "Open the resume in a new tab",
    },
    footer: {
      rights: "All rights reserved.",
    },
    projectsPage: {
      breadcrumbHome: "Home",
      breadcrumbAll: "All projects",
      kicker: "Portfolio",
      title: "All projects",
      sub: "The complete list of projects featured in this portfolio — filters and details coming soon.",
    },
    projectDetail: {
      breadcrumbHome: "Home",
      breadcrumbAll: "All projects",
      notFound: "Project not found.",
      about: "About",
      stack: "Stack",
      tidbits: "Tidbits",
      visitProject: "Visit project",
    },
    common: {
      jeuTag: "Game",
    },
  },
};
