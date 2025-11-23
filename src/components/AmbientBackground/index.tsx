import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

export default function AmbientBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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
            const fontSize = Math.min(canvas.width / 6, 200);
            textCtx.font = `900 ${fontSize}px "Inter", sans-serif`;
            textCtx.fillStyle = 'white';
            textCtx.textAlign = 'center';
            textCtx.textBaseline = 'middle';
            textCtx.fillText('CUBLEX', canvas.width / 2, canvas.height / 2);

            // 3. Get pixel data
            const imageData = textCtx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            particles = [];
            // 4. Sample pixels to create target points
            // Step size determines density (higher = fewer particles)
            const step = 6;

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
                            vx: 0,
                            vy: 0,
                            size: Math.random() * 2 + 1,
                            // Randomly pick brand colors
                            color: Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6' // Cyan or Violet
                        });
                    }
                }
            }
        };

        const animate = () => {
            // Clear with slight fade for trail effect? No, clean clear for this style.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                // Physics vars
                const dx = p.targetX - p.x;
                const dy = p.targetY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Mouse interaction
                const mDx = mouseX - p.x;
                const mDy = mouseY - p.y;
                const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
                const repulsionRadius = 100;

                let forceX = 0;
                let forceY = 0;

                if (mDist < repulsionRadius) {
                    const force = (repulsionRadius - mDist) / repulsionRadius;
                    forceX = -mDx * force * 5; // Repel strength
                    forceY = -mDy * force * 5;
                }

                // Spring-like attraction to target
                const speed = 0.05;
                p.vx += dx * speed * 0.1 + forceX;
                p.vy += dy * speed * 0.1 + forceY;

                // Friction
                p.vx *= 0.85;
                p.vy *= 0.85;

                p.x += p.vx;
                p.y += p.vy;

                // Draw
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Connect nearby particles (optional, expensive)
            // For now, just dots looks cleaner and is faster.

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
                pointerEvents: 'none', // Let clicks pass through
                zIndex: 0,
                opacity: 0.6 // Subtle background
            }}
        />
    );
}
