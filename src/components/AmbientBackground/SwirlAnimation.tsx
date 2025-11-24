import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';
import { UI_CONFIG } from '@site/src/config/ui';

const { PI, cos, sin, abs, random } = Math;
const TAU = 2 * PI;
const rand = (n: number) => n * random();
const randRange = (n: number) => n - rand(2 * n);
const fadeInOut = (t: number, m: number) => {
    let hm = 0.5 * m;
    return abs((t + hm) % m - hm) / (hm);
};
const lerp = (n1: number, n2: number, speed: number) => (1 - speed) * n1 + speed * n2;

export default function SwirlAnimation() {
    const canvasARef = useRef<HTMLCanvasElement>(null);
    const canvasBRef = useRef<HTMLCanvasElement>(null);
    const config = UI_CONFIG.ambientBackground.swirl;

    useEffect(() => {
        const canvasA = canvasARef.current;
        const canvasB = canvasBRef.current;
        if (!canvasA || !canvasB) return;

        const ctxA = canvasA.getContext('2d');
        const ctxB = canvasB.getContext('2d');
        if (!ctxA || !ctxB) return;

        let particleProps: Float32Array;
        let animationFrameId: number;
        let tick = 0;
        const noise3D = createNoise3D();
        let center: [number, number] = [0, 0];

        const particlePropCount = 9;
        const particlePropsLength = config.particleCount * particlePropCount;

        const initParticle = (i: number) => {
            let x, y, vx, vy, life, ttl, speed, radius, hue;

            x = rand(canvasA.width);
            y = center[1] + randRange(config.rangeY);
            vx = 0;
            vy = 0;
            life = 0;
            ttl = config.baseTTL + rand(config.rangeTTL);
            speed = config.baseSpeed + rand(config.rangeSpeed);
            radius = config.baseRadius + rand(config.rangeRadius);
            hue = config.baseHue + rand(config.rangeHue);

            particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
        };

        const initParticles = () => {
            tick = 0;
            particleProps = new Float32Array(particlePropsLength);

            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                initParticle(i);
            }
        };

        const drawParticle = (x: number, y: number, x2: number, y2: number, life: number, ttl: number, radius: number, hue: number) => {
            ctxA.save();
            ctxA.lineCap = 'round';
            ctxA.lineWidth = radius;
            ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
            ctxA.beginPath();
            ctxA.moveTo(x, y);
            ctxA.lineTo(x2, y2);
            ctxA.stroke();
            ctxA.closePath();
            ctxA.restore();
        };

        const checkBounds = (x: number, y: number) => {
            return (
                x > canvasA.width ||
                x < 0 ||
                y > canvasA.height ||
                y < 0
            );
        };

        const updateParticle = (i: number) => {
            let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;
            let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

            x = particleProps[i];
            y = particleProps[i2];
            n = noise3D(x * config.xOff, y * config.yOff, tick * config.zOff) * config.noiseSteps * TAU;
            vx = lerp(particleProps[i3], cos(n), 0.5);
            vy = lerp(particleProps[i4], sin(n), 0.5);
            life = particleProps[i5];
            ttl = particleProps[i6];
            speed = particleProps[i7];
            x2 = x + vx * speed;
            y2 = y + vy * speed;
            radius = particleProps[i8];
            hue = particleProps[i9];

            drawParticle(x, y, x2, y2, life, ttl, radius, hue);

            life++;

            particleProps[i] = x2;
            particleProps[i2] = y2;
            particleProps[i3] = vx;
            particleProps[i4] = vy;
            particleProps[i5] = life;

            (checkBounds(x, y) || life > ttl) && initParticle(i);
        };

        const drawParticles = () => {
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                updateParticle(i);
            }
        };

        const renderGlow = () => {
            ctxB.save();
            ctxB.filter = 'blur(8px) brightness(200%)';
            ctxB.globalCompositeOperation = 'lighter';
            ctxB.drawImage(canvasA, 0, 0);
            ctxB.restore();

            ctxB.save();
            ctxB.filter = 'blur(4px) brightness(200%)';
            ctxB.globalCompositeOperation = 'lighter';
            ctxB.drawImage(canvasA, 0, 0);
            ctxB.restore();
        };

        const renderToScreen = () => {
            ctxB.save();
            ctxB.globalCompositeOperation = 'lighter';
            ctxB.drawImage(canvasA, 0, 0);
            ctxB.restore();
        };

        const draw = () => {
            tick++;

            ctxA.clearRect(0, 0, canvasA.width, canvasA.height);

            ctxB.fillStyle = config.backgroundColor;
            ctxB.fillRect(0, 0, canvasA.width, canvasA.height);

            drawParticles();
            renderGlow();
            renderToScreen();

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            const { innerWidth, innerHeight } = window;

            canvasA.width = innerWidth;
            canvasA.height = innerHeight;
            canvasB.width = innerWidth;
            canvasB.height = innerHeight;

            center[0] = 0.5 * canvasA.width;
            center[1] = 0.5 * canvasA.height;
            
            initParticles();
        };

        window.addEventListener('resize', handleResize);

        handleResize();
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasARef}
                style={{
                    display: 'none', // Off-screen canvas
                }}
            />
            <canvas
                ref={canvasBRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
        </>
    );
}
