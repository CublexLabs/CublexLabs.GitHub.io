import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HeroSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content-glass">
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
            </div>
        </section>
    );
}
