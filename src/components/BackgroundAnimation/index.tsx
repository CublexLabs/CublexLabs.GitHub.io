import React, { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (glowRef.current) {
                const x = e.clientX;
                const y = e.clientY;
                glowRef.current.style.setProperty('--x', `${x}px`);
                glowRef.current.style.setProperty('--y', `${y}px`);
            }
        };

        // Check if device has touch capability (coarse pointer)
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

        if (!isTouchDevice) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (!isTouchDevice) {
                window.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return <div ref={glowRef} className="cursor-glow" />;
}
