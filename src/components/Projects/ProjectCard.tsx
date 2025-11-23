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
}

export default function ProjectCard({ title, description, tags, status, image, link }: ProjectCardProps) {
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
                    <div className={statusClass}>{status}</div>
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
