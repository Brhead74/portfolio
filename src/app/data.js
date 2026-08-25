// Fields that read the same regardless of language (titles, image/video
// paths, external links) stay plain strings/arrays. Fields with real prose
// carry a { fr, en } pair — read them through localize() from i18n/LocaleContext.
export const data = [
    {
        src: "/public1.png",
        src2: ["/Magma.png", "/public.jpg"],
        titre: "Alerte Magma",
        details: {
            fr: "Jeu de société phy-gital, inspiré de Fire Tower.",
            en: "A phy-gital board game inspired by Fire Tower.",
        },
        longDescription: {
            fr: "Un jeu de société phy-gital qui combine mécaniques physiques et éléments numériques, en s'inspirant du jeu coopératif Fire Tower. Expérimentation autour du game design et des assets 3D.",
            en: "A phy-gital board game that combines physical mechanics with digital elements, inspired by the cooperative game Fire Tower. An experiment in game design and 3D assets.",
        },
        stack: ["Jeu", "Game design", "3D", "Experimentation"],
        tidbits: {
            fr: [
                "Jeu de société phy-gital : mécaniques physiques combinées à des éléments numériques.",
                "Basé sur le jeu coopératif Fire Tower.",
                "Expérimentation autour du game design et des assets 3D.",
            ],
            en: [
                "Phy-gital board game: physical mechanics combined with digital elements.",
                "Based on the cooperative game Fire Tower.",
                "An experiment in game design and 3D assets.",
            ],
        },
    },
    {
        src: "/GOat.png",
        src2: ["/Goat2.mp4", "/Goat1.mp4"],
        titre: "Yokai Rush",
        details: {
            fr: "Prototype de jeu d'action, développé en équipe.",
            en: "An action game prototype, built as a team.",
        },
        longDescription: {
            fr: "Prototype de jeu d'action développé en équipe, avec un travail centré sur le game design et les effets visuels (VFX).",
            en: "An action game prototype built as a team, with a focus on game design and visual effects (VFX).",
        },
        stack: ["Jeu", "Game design", "VFX"],
        tidbits: {
            fr: [
                "Prototype de jeu d'action développé en équipe.",
                "Travail centré sur le game design et les effets visuels (VFX).",
            ],
            en: [
                "Action game prototype developed as a team.",
                "Focus on game design and visual effects (VFX).",
            ],
        },
    },
    {
        src: "/loop1.png",
        src2: ["/loop2.png", "/loop3.png"],
        titre: "Loops and Laps",
        details: {
            fr: "Gamejam 2025 sur le thème « loop ».",
            en: "2025 gamejam on the theme \"loop.\"",
        },
        longDescription: {
            fr: "Prototype de jeu de course basé sur une boucle temporelle, réalisé lors de la Gamejam 2025 sur le thème « loop ».",
            en: "A racing game prototype built around a time loop, made during the 2025 Gamejam on the theme \"loop.\"",
        },
        stack: ["Jeu", "UI", "VFX"],
        link: "https://wannabeez.itch.io/loops-and-laps",
        tidbits: {
            fr: [
                "Réalisé lors de la Gamejam 2025, sur le thème « loop ».",
                "Jeu de course basé sur une boucle temporelle.",
                "Jouable en ligne sur itch.io.",
            ],
            en: [
                "Made during the 2025 Gamejam, on the theme \"loop.\"",
                "Racing game built around a time loop.",
                "Playable online on itch.io.",
            ],
        },
    },
    {
        src: "/PromInHeaven.png",
        src2: ["/PromInHeaven2.png", "/PromInHeaven.mp4", "/PromInHeavenInterior.mp4"],
        titre: "Promenade dans l'après",
        details: {
            fr: "Une visite VR de l'après et l'exploration des souvenirs d'un monde vide.",
            en: "A VR walk through the aftermath, exploring the memories of an empty world.",
        },
        longDescription: {
            fr: "Expérience VR narrative centrée sur l'exploration de souvenirs, dans un univers post-apocalyptique construit en 3D. Travail approfondi sur l'ambiance et les effets visuels.",
            en: "A narrative VR experience centered on exploring memories, set in a post-apocalyptic world built in 3D. In-depth work on atmosphere and visual effects.",
        },
        stack: ["Jeu", "VR", "VFX", "3D", "Experimentation"],
        tidbits: {
            fr: [
                "Expérience VR narrative centrée sur l'exploration de souvenirs.",
                "Univers post-apocalyptique construit en 3D.",
                "Travail approfondi sur l'ambiance et les effets visuels.",
            ],
            en: [
                "Narrative VR experience centered on exploring memories.",
                "Post-apocalyptic world built in 3D.",
                "In-depth work on atmosphere and visual effects.",
            ],
        },
    },
    {
        src: "/horror_vr.png",
        src2: ["/glauque1.mp4", "/glauque2.mp4"],
        titre: "Scène Glauque",
        details: {
            fr: "Création de scène et effets visuels pour une ambiance VR.",
            en: "Scene and visual-effects creation for a VR atmosphere.",
        },
        longDescription: {
            fr: "Scène VR à l'ambiance délibérément sombre et inconfortable, avec un travail sur l'éclairage et les effets visuels pour renforcer l'immersion.",
            en: "A VR scene with a deliberately dark, uncomfortable atmosphere, with work on lighting and visual effects to reinforce immersion.",
        },
        stack: ["Jeu", "VR", "VFX"],
        tidbits: {
            fr: [
                "Scène VR à l'ambiance délibérément sombre et inconfortable.",
                "Création de l'éclairage et des effets visuels pour renforcer l'immersion.",
            ],
            en: [
                "VR scene with a deliberately dark, uncomfortable atmosphere.",
                "Lighting and visual-effects creation to reinforce immersion.",
            ],
        },
    },
    {
        src: "/NuitBlanche.png",
        src2: "/MapRN.png",
        titre: "Nuit Blanche RN 2026",
        details: {
            fr: "Site vitrine pour l'événement Nuit Blanche à Rouyn-Noranda.",
            en: "Showcase website for the Nuit Blanche event in Rouyn-Noranda.",
        },
        longDescription: {
            fr: "Site vitrine développé en HTML, CSS et JavaScript pour l'événement Nuit Blanche à Rouyn-Noranda, déployé et accessible en ligne via GitHub Pages.",
            en: "A showcase website built with HTML, CSS, and JavaScript for the Nuit Blanche event in Rouyn-Noranda, deployed and available online via GitHub Pages.",
        },
        stack: ["Web", "HTML", "CSS", "JavaScript"],
        link: "https://dgrcodes.github.io/nuitblanche_siteweb/",
        tidbits: {
            fr: [
                "Site vitrine développé pour l'événement Nuit Blanche à Rouyn-Noranda.",
                "Construit en HTML/CSS/JavaScript, sans framework.",
                "Déployé et accessible en ligne via GitHub Pages.",
            ],
            en: [
                "Showcase website built for the Nuit Blanche event in Rouyn-Noranda.",
                "Built with HTML/CSS/JavaScript, no framework.",
                "Deployed and available online via GitHub Pages.",
            ],
        },
    },
]
