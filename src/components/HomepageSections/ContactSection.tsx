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
                        <h2 className="section-title">Join The Club</h2>
                    </div>
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        {/* Contact Column */}
                        <div className="feature-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                            <h3 className="feature-title">Contact Us</h3>
                            <p className="feature-description">
                                Have a project in mind or just want to say hello? We are always open to new ideas and collaborations.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                                <Link to="mailto:info@kukso.com" className="cta-button cta-button-secondary contact-social-btn">
                                    📧 Email Us
                                </Link>
                                <Link to="https://x.com/KuksoHQ" className="cta-button cta-button-secondary contact-social-btn">
                                    🐦 X
                                </Link>
                                <Link to="https://discord.gg/Hqq3CdnenN" className="cta-button cta-button-secondary contact-social-btn">
                                    💬 Discord
                                </Link>
                            </div>
                        </div>

                        {/* Newsletter Column */}
                        <div className="feature-card" style={{ display: 'block' }}>
                            <h3 className="feature-title">Newsletter</h3>
                            <p className="feature-description" style={{ marginBottom: '1.5rem' }}>
                                Subscribe to get early access to our products, game updates, and exclusive dev-logs.
                            </p>
                            <form 
                                action="#"
                                style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        required
                                        className="contact-input"
                                    />
                                    <button 
                                        type="submit" 
                                        className="cta-button contact-submit-btn"
                                    >
                                        Join
                                    </button>
                                </div>
                                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                                    By subscribing, you agree to our <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>.
                                </span>
                            </form>
                        </div>
                    </div>
                </PixelCard>
            </div>
        </section>
    );
}
