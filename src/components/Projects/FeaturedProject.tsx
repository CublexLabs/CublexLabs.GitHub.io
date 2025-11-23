import React from 'react';
import Link from '@docusaurus/Link';

export interface FeaturedProjectProps {
    title: string;
    description: string;
    category: string;
    version: string;
    image: string;
    link: string;
}

export default function FeaturedProject({ title, description, category, version, image, link }: FeaturedProjectProps) {
    return (
        <div className="featured-card">
            <div className="featured-badge">
                <span style={{ marginRight: '0.5rem' }}>★</span> Flagship Project
            </div>

            <div className="featured-content">
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="lab-filter-pill active" style={{ cursor: 'default' }}>{category}</span>
                    <span style={{ fontFamily: 'monospace', color: 'var(--cublex-text-secondary)' }}>
                        <span style={{ marginRight: '0.25rem' }}>⑂</span> {version}
                    </span>
                </div>
                <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'left', marginBottom: '1rem' }}>{title}</h2>
                <p className="feature-description" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                    {description}
                </p>
                <div>
                    <Link className="cta-button" to={link}>
                        View Project
                    </Link>
                </div>
            </div>

            <div className="featured-image-container">
                <div className="featured-overlay" style={{ zIndex: 2 }}></div>
                <img src={image} alt={title} className="featured-image" />
            </div>
        </div>
    );
}
