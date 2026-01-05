import React from 'react';
import PixelCard from '../UI/PixelCard';
import type { FeatureItem } from '@site/src/data/sectionData';

interface FeatureSectionProps {
    id: string;
    tagline: string;
    title: string;
    items: FeatureItem[];
    columns?: 2 | 3;
}

export default function FeatureSection({ id, tagline, title, items, columns = 3 }: FeatureSectionProps) {
    const gridClass = columns === 2 ? 'grid-2' : 'grid-3';

    return (
        <section className="features-section" id={id}>
            <div className="container">
                <PixelCard>
                    <div className="section-header">
                        <span className="section-tagline">{tagline}</span>
                        <h2 className="section-title">{title}</h2>
                    </div>
                    <div className={gridClass}>
                        {items.map((item, idx) => (
                            <div key={idx} className="feature-card">
                                {item.icon && <div className="feature-icon">{item.icon}</div>}
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </PixelCard>
            </div>
        </section>
    );
}
