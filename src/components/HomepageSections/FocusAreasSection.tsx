import React from 'react';

export default function FocusAreasSection() {
    const areas = [
        {
            title: 'Cross-Platform Development',
            description: 'Seamless experiences across web, mobile, and game environments.',
            icon: '📱',
        },
        {
            title: 'AI-Assisted Development',
            description: 'Leveraging cutting-edge AI to accelerate MVP cycles and innovation.',
            icon: '🤖',
        },
        {
            title: 'Kukso Ecosystem',
            description: 'A consistent, interconnected brand ecosystem across all our products.',
            icon: '🔗',
        },
    ];

    return (
        <section className="features-section" style={{ background: 'var(--kukso-bg-card)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tagline">Our Focus</span>
                    <h2 className="section-title">Building for the Future</h2>
                </div>
                <div className="grid-3">
                    {areas.map((area, idx) => (
                        <div key={idx} className="feature-card">
                            <div className="feature-icon">{area.icon}</div>
                            <h3 className="feature-title">{area.title}</h3>
                            <p className="feature-description">{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
