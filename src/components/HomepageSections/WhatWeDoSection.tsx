import React from 'react';

export default function WhatWeDoSection() {
    const items = [
        {
            title: 'High-Utility Tools',
            description: 'Solving real problems for developers and creators with robust, reliable software.',
            icon: '🛠️',
        },
        {
            title: 'Experimental Projects',
            description: 'Testing new ideas and pushing boundaries in gaming and software development.',
            icon: '🧪',
        },
        {
            title: 'Community Ecosystems',
            description: 'Building thriving communities around Minecraft, Hytale, and Unity indie scenes.',
            icon: '🌍',
        },
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tagline">What We Do</span>
                    <h2 className="section-title">A Modern Digital Lab</h2>
                </div>
                <div className="grid-3">
                    {items.map((item, idx) => (
                        <div key={idx} className="feature-card">
                            <div className="feature-icon">{item.icon}</div>
                            <h3 className="feature-title">{item.title}</h3>
                            <p className="feature-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
