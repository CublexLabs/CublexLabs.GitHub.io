import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import type { Project } from '@site/src/data/projects';

interface FlagshipPromoProps {
  project: Project;
}

export default function FlagshipPromo({ project }: FlagshipPromoProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={clsx('flagship-promo-container', {
        'visible': isVisible,
        'hidden': !isVisible
      })}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsDismissed(true)}
        className="flagship-close-btn"
        aria-label="Close"
      >
        X
      </button>

      <div className="featured-card" style={{ 
          flexDirection: 'column', 
          height: 'auto',
          borderWidth: '2px',
          padding: '0'
      }}>

        {/* Badge */}
        <div className="flagship-promo-badge">
            FEATURED
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem 1rem 1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                 <h3 className="flagship-promo-title">
                    {project.title}
                 </h3>
            </div>
          
          <p className="flagship-promo-description">
            {project.description}
          </p>

          {project.link && (
            <Link
              to={project.link}
              className="cta-button flagship-promo-cta"
            >
              Check it out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
