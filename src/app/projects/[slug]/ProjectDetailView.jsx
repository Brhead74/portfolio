'use client';
import Breadcrumb from '../../_componnents/Breadcrumb';
import { normalizeSrc, videoPattern } from '../../_componnents/utils';
import { useLocale, localize } from '../../i18n/LocaleContext';

const ProjectDetailView = ({ project }) => {
    const { t, locale } = useLocale();

    const gather = (v) => (Array.isArray(v) ? v : v ? [v] : []);
    const media = [...gather(project.src), ...gather(project.src2)].map(normalizeSrc).filter(Boolean);
    const [heroMedia, ...restMedia] = media;

    const details = localize(project.details, locale);
    const longDescription = localize(project.longDescription, locale);
    const tidbits = localize(project.tidbits, locale) || [];

    const items = [
        { label: t('projectDetail.breadcrumbHome'), href: '/' },
        { label: t('projectDetail.breadcrumbAll'), href: '/projects' },
        { label: project.titre },
    ];

    return (
        <main className="project-page">
            <Breadcrumb items={items} />
            <section className="project-hero">
                <h1 className="project-hero-title">{project.titre}</h1>
                <p className="project-hero-sub">{details}</p>
            </section>

            <section className="project-content">
                <div className="project-media-column">
                    {heroMedia && (
                        videoPattern.test(heroMedia) ? (
                            <video src={heroMedia} controls className="project-large-image project-media-hero" />
                        ) : (
                            <img src={heroMedia} alt={`${project.titre} 1`} className="project-large-image project-media-hero" />
                        )
                    )}

                    {restMedia.length > 0 && (
                        <div className="project-media-grid">
                            {restMedia.map((src, i) => (
                                videoPattern.test(src) ? (
                                    <video key={i} src={src} controls className="project-large-image" />
                                ) : (
                                    <img key={i} src={src} alt={`${project.titre} ${i + 2}`} className="project-large-image" />
                                )
                            ))}
                        </div>
                    )}
                </div>

                <aside className="project-info">
                    <h2>{t('projectDetail.about')}</h2>
                    <p>{longDescription}</p>

                    <h3>{t('projectDetail.stack')}</h3>
                    <div className="project-stack">
                        {(project.stack || []).map((s, idx) => {
                            const tag = String(s).trim();
                            const label = tag === 'Jeu' ? t('common.jeuTag') : tag;
                            return <span className="stack-item" key={idx}>{label}</span>;
                        })}
                    </div>

                    {project.link && (
                        <p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">{t('projectDetail.visitProject')}</a>
                        </p>
                    )}

                    {tidbits.length > 0 && (
                        <>
                            <h3>{t('projectDetail.tidbits')}</h3>
                            <ul>
                                {tidbits.map((tidbit, idx) => (
                                    <li key={idx}>{tidbit}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </aside>
            </section>
        </main>
    );
};

export default ProjectDetailView;
