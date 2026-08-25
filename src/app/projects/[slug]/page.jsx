import { data } from '../../data';
import '../project.css';
import { slugify } from '../../_componnents/utils';
import ProjectDetailView from './ProjectDetailView';

export async function generateStaticParams() {
    return data.map((item) => ({ slug: slugify(item.titre || '') }));
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = data.find((p) => slugify(p.titre) === slug);

    if (!project) {
        return <div style={{ padding: '2rem' }}>Projet introuvable / Project not found.</div>;
    }

    return <ProjectDetailView project={project} />;
}
