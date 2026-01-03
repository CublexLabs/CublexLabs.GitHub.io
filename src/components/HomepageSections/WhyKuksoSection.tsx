import React from 'react';
import PixelCard from '../UI/PixelCard';

export default function WhyKuksoSection() {
    return (
        <section className="features-section" id="why-kukso">
            <div className="container">
                <PixelCard>
                    <div className="section-header">
                        <span className="section-tagline">Why Kukso?</span>
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
                                We aren't just one thing. We combine the agility of an indie team, the reliability of a professional studio, and the innovation of a dev lab.
                            </p>
                        </div>
                    </div>
                </PixelCard>
            </div>
        </section>
    );
}
