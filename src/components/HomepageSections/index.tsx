import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function HeroSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <section className="hero-section">
            <div className="container">
                <h1 className="hero-title">{siteConfig.title}</h1>
                <p className="hero-subtitle">{siteConfig.tagline}</p>
                <div className="hero-buttons">
                    <Link
                        className="cta-button"
                        to="/docs/intro">
                        Explore Wiki
                    </Link>
                    <Link
                        className="cta-button cta-button-secondary"
                        to="https://discord.gg/Hqq3CdnenN">
                        Join Discord
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function WhatWeDoSection() {
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

export function FocusAreasSection() {
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
            title: 'Cublex Ecosystem',
            description: 'A consistent, interconnected brand ecosystem across all our products.',
            icon: '🔗',
        },
    ];

    return (
        <section className="features-section" style={{ background: 'var(--cublex-bg-card)' }}>
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

export function WhyCublexSection() {
    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tagline">Why Cublex?</span>
                    <h2 className="section-title">Unique Hybrid Approach</h2>
                </div>
                <div className="grid-2">
                    <div className="feature-card">
                        <h3 className="feature-title">Consumer & Developer Facing</h3>
                        <p className="feature-description">
                            We bridge the gap between end-users and developers. Whether you're a gamer looking for the next fun experience or a developer needing robust tools, we build for you.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Plugin Studio + Dev Lab + Indie Team</h3>
                        <p className="feature-description">
                            We aren't just one thing. We combine the agility of an indie team, the innovation of a dev lab, and the reliability of a professional studio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
