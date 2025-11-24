export const UI_CONFIG = {
    ambientBackground: {
        enabled: true,
        type: 'particlesText' as 'particlesText' | 'swirl', // Add more types here later
        text: 'cublex labs',
        swirl: {
            particleCount: 700,
            rangeY: 100,
            baseTTL: 50,
            rangeTTL: 150,
            baseSpeed: 0.1,
            rangeSpeed: 2,
            baseRadius: 1,
            rangeRadius: 4,
            // Dark mode colors
            dark: {
                baseHue: 220,
                rangeHue: 100,
                backgroundColor: 'hsla(260,40%,5%,1)',
                saturation: 100,
                lightness: 60,
            },
            // Light mode colors
            light: {
                baseHue: 220,
                rangeHue: 100,
                backgroundColor: 'hsla(220,40%,98%,1)',
                saturation: 80,
                lightness: 40,
            },
            noiseSteps: 8,
            xOff: 0.00125,
            yOff: 0.00125,
            zOff: 0.0005,
        },
        colors: ['#06b6d4', '#8b5cf6'], // Cyan, Violet
        particleDensity: 6, // Lower is denser (step size)
        repulsionRadius: 24, // Cursor interaction radius
        repulsionStrength: 6, // How hard particles are pushed
        returnSpeed: 0.035, // How fast particles return to original position
        friction: 0.85, // Movement damping
        fontSizeDivisor: 8, // Canvas width / this = font size
        maxFontSize: 200,
        opacity: 0.8,
        scrollBehavior: 'rigid', // 'rigid' (instant) or 'physics' (smooth/laggy)
        navbarHeight: 80, // Height of the navbar to anchor below
        anchorPadding: 20, // Extra padding below navbar
    },
    // Add other component configs here as needed
};
