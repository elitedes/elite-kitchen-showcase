import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

/* ── Circle progress component ── */
interface CircleProps {
    label: string;
    value: number;
    color: string;
    delay: number;
    inView: boolean;
}

const RADIUS = 54;
const STROKE = 7;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CircleProgress = ({ label, value, color, delay, inView }: CircleProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const timer = setTimeout(() => {
            let start = 0;
            const step = () => {
                start += 1.5;
                if (start > value) start = value;
                setProgress(start);
                if (start < value) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }, delay);
        return () => clearTimeout(timer);
    }, [inView, value, delay]);

    const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative w-32 h-32 md:w-36 md:h-36">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    {/* Track */}
                    <circle
                        cx="60" cy="60" r={RADIUS}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={STROKE}
                        className="text-white/[0.06]"
                    />
                    {/* Progress */}
                    <circle
                        cx="60" cy="60" r={RADIUS}
                        fill="none"
                        stroke={color}
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={offset}
                        style={{
                            transition: "stroke-dashoffset 0.05s linear",
                            filter: `drop-shadow(0 0 8px ${color}66)`,
                        }}
                    />
                </svg>
                {/* Value text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span
                        className="text-3xl md:text-4xl font-display font-bold"
                        style={{ color }}
                    >
                        {Math.round(progress)}
                    </span>
                </div>
            </div>
            <span className="text-sm font-medium text-white/60 tracking-wide">{label}</span>
        </div>
    );
};

/* ── Main section ── */
const LighthouseStats = () => {
    const { t } = useLanguage();
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const metrics = [
        { label: "Performance", value: 100, color: "#0cce6b" },
        { label: "SEO", value: 100, color: "#a855f7" },
        { label: "Accessibility", value: 100, color: "#0cce6b" },
    ];

    return (
        <section ref={ref} className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Circles */}
                    <div className="flex justify-center gap-10 md:gap-16 mb-8">
                        {metrics.map((m, i) => (
                            <CircleProgress
                                key={m.label}
                                label={m.label}
                                value={m.value}
                                color={m.color}
                                delay={i * 250}
                                inView={inView}
                            />
                        ))}
                    </div>

                    {/* Label */}
                    <p className="text-center text-sm text-white/40 tracking-wide">
                        {t.lighthouse.label}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LighthouseStats;
