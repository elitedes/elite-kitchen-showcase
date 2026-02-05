import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

const StatCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: StatCounterProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (!isInView) return;

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = timestamp - startTimeRef.current;
            const percentage = Math.min(progress / duration, 1);

            // Easing function: outExpo
            const easeOutExpo = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
            setCount(Math.floor(easeOutExpo * end));

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
};

export default StatCounter;
