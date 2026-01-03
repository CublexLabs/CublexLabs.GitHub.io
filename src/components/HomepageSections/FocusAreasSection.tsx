import React from 'react';
import PixelCard from '../UI/PixelCard';

export default function FocusAreasSection() {
    const areas = [
        {
            title: 'AI-Assisted Development',
            description: 'Leveraging AI to accelerate MVP cycles and innovation. As engineers, we understand the importance of AI in the development process.',
            icon: '🤖',
        },
        {
            title: 'Cross-Platform Development',
            description: 'Seamless experiences across web, mobile, and game environments. Frameworks like React, React Native and Unity are used to create cross-platform applications.',
            icon: '📱',
        },
    ];

    return (
        <section className="features-section" id="focus">
            <div className="container">
                <PixelCard>
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
                </PixelCard>
            </div>
        </section>
    );
}
