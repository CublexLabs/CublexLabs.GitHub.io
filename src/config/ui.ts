export const UI_CONFIG = {
    ambientBackground: {
        text: 'cublex labs',
        colors: ['#06b6d4', '#8b5cf6'], // Cyan, Violet
        particleDensity: 6, // Lower is denser (step size)
        repulsionRadius: 24, // Cursor interaction radius
        repulsionStrength: 5, // How hard particles are pushed
        returnSpeed: 0.05, // How fast particles return to original position
        friction: 0.85, // Movement damping
        fontSizeDivisor: 6, // Canvas width / this = font size
        maxFontSize: 200,
        opacity: 0.6,
    },
    // Add other component configs here as needed
};
