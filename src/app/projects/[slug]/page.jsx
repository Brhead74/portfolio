import React from 'react';
import Link from 'next/link';
import { data } from '../../data';
import '../project.css';
import Breadcrumb from '@/app/_componnents/Breadcrumb';
import { normalizeSrc, videoPattern, slugify } from '../../_componnents/utils';

export async function generateStaticParams() {
    return data.map((item) => ({ slug: slugify(item.titre || '') }));
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = data.find((p) => slugify(p.titre) === slug);

    if (!project) {
        return <div style={{ padding: '2rem' }}>Projet introuvable.</div>;
    }

    const normalizeSrc = (src) => {
        if (!src) return '';
        if (typeof src !== 'string') return '';
        if (src.startsWith('http') || src.startsWith('/') || src.startsWith('data:')) return src;
        return `/${src}`;
    };

    const images = (Array.isArray(project.src2) ? project.src2 : [project.src2 || project.src]).map(normalizeSrc);

    return (
        <main className="project-page">
            {(() => {
                const items = [
                    { label: 'Accueil', href: '/' },
                    { label: 'Tous les projets', href: '/projects' },
                ];
                const meta = [project.year, project.category].filter(Boolean).join(' • ');
                if (meta) items.push({ label: meta });
                items.push({ label: project.titre });
                return <Breadcrumb items={items} />;
            })()}
            <section className="project-hero">
                <h1 className="project-hero-title">{project.titre}</h1>
                <p className="project-hero-sub">{project.details}</p>
            </section>

            <section className="project-content">
                <div className="project-media-column">
                    {images.map((src, i) => (
                        videoPattern.test(src) ? (
                            <video key={i} src={src} controls className="project-large-image" />
                        ) : (
                            <img key={i} src={src} alt={`${project.titre} ${i}`} className="project-large-image" />
                        )
                    ))}
                </div>

                <aside className="project-info">
                    <h2>About</h2>
                    <p>{project.longDescription || 'Description étendue du projet ici. Ajoutez plus de contexte, objectifs et challenges.'}</p>

                    <h3>Stack</h3>
                    <div className="project-stack">
                        {(project.stack || []).map((s, idx) => (
                            <span className="stack-item" key={idx}>{s}</span>
                        ))}
                    </div>

                    {project.link && (
                        <p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">External link</a>
                        </p>
                    )}

                    <h3>Tidbits</h3>
                    <ul>
                        <li>Prototype built in a weekend.</li>
                        <li>Experimented with lighting and VFX.</li>
                        <li>Player feedback informed several iterations.</li>
                    </ul>
                </aside>
            </section>
        </main>
    );
}
