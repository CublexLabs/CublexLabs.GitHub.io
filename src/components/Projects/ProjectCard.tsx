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
        <Link to={link || '#'} className="project-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card project-card-square">
                {/* Full Background Image */}
                <div className="project-image-bg-container">
                    <img src={image} alt={title} className="project-image-bg" />
                </div>

                {/* Top Badges */}
                <div className="project-badges-overlay">
                    {category && <span className="project-tag-glass">{category}</span>}
                    <div className={statusClass}>{status}</div>
                </div>

                {/* Bottom Overlay Content */}
                <div className="project-content-overlay">
                    <div className="project-content-inner">
                        <h3 className="project-title-overlay">{title}</h3>
                        <div className="project-details-hidden">
                            <p className="project-description-overlay">{description}</p>
                            <div className="project-tags-overlay">
                                {tags.map((tag, idx) => (
                                    <span key={idx} className="project-tag-small">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
