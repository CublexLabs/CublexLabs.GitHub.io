import React, { ReactNode } from 'react';

interface PixelCardProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function PixelCard({ children, className = '', style }: PixelCardProps) {
    return (
        <div className={`pixel-card ${className}`} style={style}>
            {children}
        </div>
    );
}
