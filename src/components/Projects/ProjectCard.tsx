import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    status: 'Live' | 'Beta' | 'Alpha';
    image: string;
    link?: string;
    category?: string;
}

export default function ProjectCard({ title, description, tags, status, image, link, category }: ProjectCardProps) {
    const statusClass = clsx('project-status', {
        'status-live': status === 'Live',
        'status-beta': status === 'Beta',
        'status-alpha': status === 'Alpha',
    });

    return (
        <Link to={link} className="project-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card">
                <div className="project-image-container">
                    <img src={image} alt={title} className="project-image" />
                    <div className="project-badges" style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                        {category && < span className="project-tag" style={{ backdropFilter: 'blur(4px)', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>{category}</span>}
                        <div className={statusClass} style={{ position: 'static' }}>{status}</div>
                    </div>
                </div>
                <div className="project-content">
                    <h3 className="feature-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
                    <p className="feature-description" style={{ fontSize: '0.9rem' }}>{description}</p>
                    <div className="project-tags">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="project-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
