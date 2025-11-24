import React from 'react';
import { UI_CONFIG } from '@site/src/config/ui';
import ParticlesTextAnimation from './ParticlesTextAnimation';

export default function AmbientBackground() {
    const config = UI_CONFIG.ambientBackground;

    if (!config.enabled) {
        return null;
    }

    if (config.type === 'particlesText') {
        return <ParticlesTextAnimation />;
    }

    return null;
}
