import React from 'react';
import PixelCard from '../UI/PixelCard';

export default function WhatWeDoSection() {
    const items = [
        {
            title: 'Minecraft Plugins',
            description: 'Creating high-quality plugins for Minecraft servers.',
            icon: '🧊',
        },
        {
            title: 'Hytale Mods',
            description: 'Creating high-quality mods for Hytale.',
            icon: '🌍',
        },
        {
            title: 'Mobile Apps',
            description: 'Creating high-quality mobile apps for Android and iOS.',
            icon: '📱',
        },
    ];

    return (
        <section className="features-section" id="what-we-do">
            <div className="container">
                <PixelCard>
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
                </PixelCard>
            </div>
        </section>
    );
}
