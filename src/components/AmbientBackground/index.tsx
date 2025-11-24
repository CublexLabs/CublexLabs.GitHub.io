import React, { useEffect, useRef } from 'react';
import { UI_CONFIG } from '@site/src/config/ui';

interface Particle {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    baseTargetY: number; // Original Y position
    vx: number;
    vy: number;
    size: number;
    color: string;
}

export default function AmbientBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const config = UI_CONFIG.ambientBackground;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // 1. Create off-screen canvas for text
            const textCanvas = document.createElement('canvas');
            textCanvas.width = canvas.width;
            textCanvas.height = canvas.height;
            const textCtx = textCanvas.getContext('2d');
            if (!textCtx) return;

            // 2. Draw text
            const fontSize = Math.min(canvas.width / config.fontSizeDivisor, config.maxFontSize);
            textCtx.font = `900 ${fontSize}px "Inter", sans-serif`;
            textCtx.fillStyle = 'white';
            textCtx.textAlign = 'center';
            textCtx.textBaseline = 'middle';
            textCtx.fillText(config.text, canvas.width / 2, canvas.height / 2);

            // 3. Get pixel data
            const imageData = textCtx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            particles = [];
            // 4. Sample pixels to create target points
            const step = config.particleDensity;

            for (let y = 0; y < canvas.height; y += step) {
                for (let x = 0; x < canvas.width; x += step) {
                    const index = (y * canvas.width + x) * 4;
                    // If alpha > 128 (pixel is roughly opaque)
                    if (data[index + 3] > 128) {
                        particles.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            targetX: x,
                            targetY: y,
                            baseTargetY: y,
                            vx: 0,
                            vy: 0,
                            size: Math.random() * 2 + 1,
                            // Randomly pick brand colors
                            color: Math.random() > 0.5 ? config.colors[0] : config.colors[1]
                        });
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate vertical shift based on scroll
            const scrollY = window.scrollY;
            const navbarHeight = config.navbarHeight || 80;
            const anchorPadding = config.anchorPadding || 20;
            const fontSize = Math.min(canvas.width / config.fontSizeDivisor, config.maxFontSize);
            
            // We want the text to move up with scroll, but stop at navbar
            const minCenterY = navbarHeight + fontSize / 2 + anchorPadding;
            const currentCenterY = (canvas.height / 2) - scrollY;
            const clampedCenterY = Math.max(minCenterY, currentCenterY);
            const verticalShift = clampedCenterY - (canvas.height / 2);

            const isRigid = config.scrollBehavior === 'rigid';

            particles.forEach(p => {
                // Determine the effective target Y for physics
                // If rigid, targetY is just baseTargetY (physics happens in local space)
                // If physics, targetY includes the shift (physics chases the shift)
                let effectiveTargetY = p.baseTargetY;
                if (!isRigid) {
                    effectiveTargetY += verticalShift;
                }
                
                p.targetY = effectiveTargetY;

                // Physics vars
                const dx = p.targetX - p.x;
                const dy = p.targetY - p.y;

                // Mouse interaction
                // If rigid, we need to adjust mouse coordinates to be relative to the shifted particle
                // Or adjust particle coordinates to be relative to screen mouse
                // Let's render at (p.x, p.y + verticalShift) if rigid.
                // So the particle is visually at p.y + verticalShift.
                // Mouse is at mouseY.
                // Distance = mouseY - (p.y + verticalShift)
                
                let renderX = p.x;
                let renderY = p.y;
                if (isRigid) {
                    renderY += verticalShift;
                }

                const mDx = mouseX - renderX;
                const mDy = mouseY - renderY;
                const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

                let forceX = 0;
                let forceY = 0;

                if (mDist < config.repulsionRadius) {
                    const force = (config.repulsionRadius - mDist) / config.repulsionRadius;
                    forceX = -mDx * force * config.repulsionStrength;
                    forceY = -mDy * force * config.repulsionStrength;
                }

                // Spring-like attraction to target
                p.vx += dx * config.returnSpeed * 0.1 + forceX;
                p.vy += dy * config.returnSpeed * 0.1 + forceY;

                // Friction
                p.vx *= config.friction;
                p.vy *= config.friction;

                p.x += p.vx;
                p.y += p.vy;

                // Draw
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: config.opacity
            }}
        />
    );
}
