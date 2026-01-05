import React from 'react';
import Link from '@docusaurus/Link';
import type { Project } from '@site/src/data/projects';

interface FeaturedProjectProps {
    project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
    const { title, description, category, version, image, link } = project;
    
    return (
        <div className="featured-wrapper">
            <div className="featured-badge">
                <span style={{ marginRight: '0.5rem' }}>★</span> Flagship Project
            </div>
            
            <div className="featured-card">
                <div className="featured-content">
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {category && <span className="lab-filter-pill active" style={{ cursor: 'default' }}>{category}</span>}
                        {version && (
                            <span style={{ fontFamily: 'monospace', color: 'var(--cublex-text-secondary)' }}>
                                <span style={{ marginRight: '0.25rem' }}>⑂</span> {version}
                            </span>
                        )}
                    </div>
                    <h2 className="hero-title" style={{ fontSize: '1.4rem', textAlign: 'left', marginBottom: '0.6rem' }}>{title}</h2>
                    <p className="feature-description" style={{ fontSize: '0.8rem', marginBottom: '0.8rem' }}>
                        {description}
                    </p>
                    {link && (
                        <div>
                            <Link className="cta-button" to={link}>
                                View Project
                            </Link>
                        </div>
                    )}
                </div>

                <div className="featured-image-container">
                    <div className="featured-overlay" style={{ zIndex: 2}}></div>
                    <img src={image} alt={title} className="featured-image" />
                </div>
            </div>
        </div>
    );
}
