import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HeroSection() {
    const { siteConfig } = useDocusaurusContext();
    const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate percentages (-1 to 1)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = ((x - centerX) / centerX) * 10; // Max 10deg rotation
        const rotateX = ((centerY - y) / centerY) * 10; // Max 10deg rotation, inverted Y
        
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <section className="hero-section" style={{ perspective: '1000px' }}>
            <div className="container">
                {/* Wrapper handles mouse events to prevent flickering when child rotates away */}
                <div
                    style={{ padding: '20px' }} // Add padding to catch fast movements
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        className="hero-content-glass"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
                            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                            transformStyle: 'preserve-3d',
                            willChange: 'transform'
                        }}
                    >
                        <h1 className="hero-title" style={{ transform: 'translateZ(60px)', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>{siteConfig.title}</h1>
                        <p className="hero-subtitle" style={{ transform: 'translateZ(40px)' }}>{siteConfig.tagline}</p>
                        <div className="hero-buttons" style={{ transform: 'translateZ(50px)' }}>
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
                        
                        {/* Glare effect removed for pixel style */}
                    </div>
                </div>
            </div>
        </section>
    );
}
