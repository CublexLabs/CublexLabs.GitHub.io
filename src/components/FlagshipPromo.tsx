import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { FEATURED_PROJECT } from '@site/src/data/projects';
import clsx from 'clsx';

export default function FlagshipPromo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={clsx('flagship-promo-container', {
        'visible': isVisible
      })}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        transform: isVisible ? 'translateX(0)' : 'translateX(120%)',
        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy slide-in
        maxWidth: '350px',
        width: 'calc(100% - 2rem)', // Responsive on mobile
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsDismissed(true)}
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'var(--kukso-contrast)',
          border: '2px solid white',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 30,
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
        }}
        aria-label="Close"
      >
        X
      </button>

      <div className="featured-card" style={{ 
          flexDirection: 'column', 
          height: 'auto',
          borderWidth: '2px', // Slightly thinner than main
          padding: '0'
      }}>

        {/* Badge */}
        <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            background: 'var(--ifm-color-primary)',
            color: 'white',
            padding: '0.2rem 0.8rem',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            zIndex: 10,
            borderBottomRightRadius: '8px'
        }}>
            FEATURED
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem 1rem 1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                 <h3 style={{ 
                     margin: 0, 
                     fontSize: '1.1rem', 
                     color: 'white',
                     fontFamily: '"Press Start 2P", cursive',
                     lineHeight: '1.4'
                 }}>
                    {FEATURED_PROJECT.title}
                 </h3>
            </div>
          
          <p style={{ 
              fontSize: '0.8rem', 
              color: '#cccccc', 
              marginBottom: '1rem',
              lineHeight: '1.4' 
          }}>
            {FEATURED_PROJECT.description}
          </p>

          <Link
            to={FEATURED_PROJECT.link}
            className="cta-button"
            style={{
                width: '100%',
                padding: '0.5rem',
                fontSize: '0.9rem',
                justifyContent: 'center',
                borderRadius: '4px'
            }}
          >
            Check it out
          </Link>
        </div>
      </div>
    </div>
  );
}
