import React from 'react';
import PixelCard from '../UI/PixelCard';
import Link from '@docusaurus/Link';

export default function ContactSection() {
    return (
        <section className="features-section" id="contact">
            <div className="container">
                <PixelCard>
                    <div className="section-header">
                        <span className="section-tagline">Get In Touch</span>
                        <h2 className="section-title">Join The Network</h2>
                    </div>
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        {/* Contact Column */}
                        <div className="feature-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                            <h3 className="feature-title">Contact Us</h3>
                            <p className="feature-description">
                                Have a project in mind or just want to say hello? We are always open to new ideas and collaborations.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                                <Link to="mailto:contact@kukso.studio" className="cta-button cta-button-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    📧 Email Us
                                </Link>
                                <Link to="https://twitter.com/KuksoStudios" className="cta-button cta-button-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    🐦 Twitter / X
                                </Link>
                                <Link to="https://discord.gg/Hqq3CdnenN" className="cta-button cta-button-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    💬 Discord
                                </Link>
                            </div>
                        </div>

                        {/* Newsletter Column */}
                        <div className="feature-card" style={{ display: 'block' }}>
                            <h3 className="feature-title">Newsletter</h3>
                            <p className="feature-description" style={{ marginBottom: '1.5rem' }}>
                                Subscribe to get early access to our tools, game updates, and exclusive dev logs. No spam, just pixels.
                            </p>
                            <form 
                                action="#" // Placeholder for now
                                style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        required
                                        style={{
                                            flex: 1,
                                            padding: '0.75rem',
                                            borderRadius: '8px',
                                            border: '2px solid var(--ifm-color-primary)',
                                            background: 'var(--kukso-bg-base)',
                                            color: 'var(--kukso-text-primary)',
                                            fontFamily: 'inherit',
                                            fontSize: '0.9rem'
                                        }}
                                    />
                                    <button 
                                        type="submit" 
                                        className="cta-button"
                                        style={{ margin: 0, padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                                    >
                                        Join
                                    </button>
                                </div>
                                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                                    By subscribing, you agree to our Privacy Policy.
                                </span>
                            </form>
                        </div>
                    </div>
                </PixelCard>
            </div>
        </section>
    );
}
