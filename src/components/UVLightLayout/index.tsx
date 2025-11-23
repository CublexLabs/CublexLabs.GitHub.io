import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

interface UVLightLayoutProps {
    children: React.ReactNode; // The "Mask" Layer (Top / Normal)
    ghostContent: React.ReactNode; // The "Ghost" Layer (Bottom / Secret)
    title: string;
    description?: string;
}

export default function UVLightLayout({ children, ghostContent, title, description }: UVLightLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setCursorPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <Layout title={title} description={description}>
            <div className={styles.uvContainer} ref={containerRef}>
                {/* Ghost Layer (Bottom) - Visible only through the hole */}
                <div className={styles.ghostLayer}>
                    {ghostContent}
                </div>

                {/* Mask Layer (Top) - Normal content, gets "erased" by the mask */}
                <div
                    className={styles.maskLayer}
                    style={{
                        maskImage: `radial-gradient(circle 150px at ${cursorPos.x}px ${cursorPos.y}px, transparent 20%, black 100%)`,
                        WebkitMaskImage: `radial-gradient(circle 150px at ${cursorPos.x}px ${cursorPos.y}px, transparent 20%, black 100%)`,
                    }}
                >
                    {children}
                </div>
            </div>
        </Layout>
    );
}
