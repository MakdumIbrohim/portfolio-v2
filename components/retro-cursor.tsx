"use client";

import React, { useEffect, useState, useRef } from 'react';

// Retro/Neo-brutalist color palette
const RETRO_COLORS = [
    '#ff3b30', // Red
    '#f8e71c', // Yellow
    '#50e3c2', // Cyan
    '#4a90e2', // Blue
    '#ff79c6'  // Magenta
];

interface TrailParticle {
    id: number;
    x: number;
    y: number;
    color: string;
}

export function RetroCursor() {
    const [particles, setParticles] = useState<TrailParticle[]>([]);
    const particleIdRef = useRef(0);
    const lastPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Disable on touch devices
        if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Throttle slightly to avoid too many DOM nodes
            const distance = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
            if (distance < 15) return; // Only spawn if moved 15px

            lastPos.current = { x: e.clientX, y: e.clientY };

            const newParticle: TrailParticle = {
                id: particleIdRef.current++,
                x: e.clientX,
                y: e.clientY,
                color: RETRO_COLORS[Math.floor(Math.random() * RETRO_COLORS.length)]
            };

            setParticles(prev => [...prev, newParticle]);

            // Remove particle after animation (500ms)
            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, 200);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Don't render anything if no particles
    if (particles.length === 0) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute animate-trail-fade border-2 border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        backgroundColor: particle.color,
                        width: '12px',
                        height: '12px',
                        // Offset so trail stems directly under the cursor tip
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            ))}
        </div>
    );
}
