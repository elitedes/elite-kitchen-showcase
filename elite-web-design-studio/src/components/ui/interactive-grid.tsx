"use client";

import { useEffect, useRef } from "react";

interface InteractiveGridProps {
    className?: string;
    dotSize?: number;
    gap?: number;
    mouseRadius?: number;
    color?: string;
    glowColor?: string;
}

export function InteractiveGrid({
    className = "",
    dotSize = 1,
    gap = 28,
    mouseRadius = 120,
    color = "rgba(255,255,255,0.07)",
    glowColor = "rgba(168,85,247,0.35)",
}: InteractiveGridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const draw = () => {
            const rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            for (let x = gap; x < rect.width; x += gap) {
                for (let y = gap; y < rect.height; y += gap) {
                    const dx = x - mx;
                    const dy = y - my;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const inRange = dist < mouseRadius;

                    const alpha = inRange ? 0.15 + (1 - dist / mouseRadius) * 0.6 : 0.07;
                    const size = inRange ? dotSize + (1 - dist / mouseRadius) * 2.5 : dotSize;

                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fillStyle = inRange
                        ? glowColor.replace(/[\d.]+\)$/, `${alpha})`)
                        : color;
                    ctx.fill();
                }
            }
            rafRef.current = requestAnimationFrame(draw);
        };

        const onMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };

        const onLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        resize();
        draw();

        window.addEventListener("resize", resize);
        canvas.addEventListener("mousemove", onMouse);
        canvas.addEventListener("mouseleave", onLeave);

        return () => {
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", onMouse);
            canvas.removeEventListener("mouseleave", onLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, [dotSize, gap, mouseRadius, color, glowColor]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
            style={{ zIndex: 0 }}
        />
    );
}
