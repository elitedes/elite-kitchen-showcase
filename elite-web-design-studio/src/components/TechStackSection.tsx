import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

/* ── SVG brand icons (inline for zero dependencies) ── */

const NextJsIcon = () => (
    <svg viewBox="0 0 180 180" fill="currentColor" className="w-full h-full">
        <mask id="nextjs-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <g mask="url(#nextjs-mask)">
            <circle cx="90" cy="90" r="90" fill="currentColor" />
            <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461A90.304 90.304 0 00149.508 157.52z" fill="black" />
            <rect x="115" y="54" width="12" height="72" fill="black" />
        </g>
    </svg>
);

const ReactIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <circle cx="12" cy="12" r="2.139" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
    </svg>
);

const TailwindIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
);

const TypeScriptIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
);

const FramerMotionIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
);

const FigmaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.02-3.019-3.02h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V8.98H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.02c0 1.689 1.377 3.068 3.067 3.068a3.076 3.076 0 0 0 3.068-3.068V16.49H8.148zm7.704-7.509a4.49 4.49 0 1 1 0 8.981 4.49 4.49 0 0 1 0-8.981zm0 7.509a3.02 3.02 0 1 0 0-6.039 3.02 3.02 0 0 0 0 6.04z" />
    </svg>
);

/* ── Tech items with brand colours ── */
const techs = [
    { name: "Next.js", Icon: NextJsIcon, brandColor: "#ffffff" },
    { name: "React", Icon: ReactIcon, brandColor: "#61DAFB" },
    { name: "Tailwind CSS", Icon: TailwindIcon, brandColor: "#06B6D4" },
    { name: "TypeScript", Icon: TypeScriptIcon, brandColor: "#3178C6" },
    { name: "Framer Motion", Icon: FramerMotionIcon, brandColor: "#FF0055" },
    { name: "Figma", Icon: FigmaIcon, brandColor: "#A259FF" },
];

/* ── Duplicated array for seamless infinite loop ── */
const marqueeItems = [...techs, ...techs];

const TechStackSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
                            {t.techStack.label}
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-snug">
                            {t.techStack.heading}
                        </h2>
                    </div>
                </ScrollReveal>
            </div>

            {/* ── Infinite Marquee ── */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <div className="flex animate-marquee gap-16 py-8 items-center">
                        {marqueeItems.map((tech, i) => (
                            <div
                                key={`${tech.name}-${i}`}
                                className="group flex flex-col items-center gap-3 flex-shrink-0 cursor-default"
                            >
                                <div
                                    className="w-16 h-16 md:w-20 md:h-20 text-white/20 transition-all duration-500 group-hover:scale-110"
                                    style={{
                                        // @ts-ignore – CSS custom property for hover colour
                                        "--brand": tech.brandColor,
                                    } as React.CSSProperties}
                                >
                                    <div className="w-full h-full transition-colors duration-500 text-white/20 group-hover:text-[var(--brand)]">
                                        <tech.Icon />
                                    </div>
                                </div>
                                <span className="text-xs tracking-wider text-white/20 group-hover:text-white/60 transition-colors duration-500 font-medium">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate strip for seamless loop */}
                    <div className="flex animate-marquee gap-16 py-8 items-center" aria-hidden>
                        {marqueeItems.map((tech, i) => (
                            <div
                                key={`dup-${tech.name}-${i}`}
                                className="group flex flex-col items-center gap-3 flex-shrink-0 cursor-default"
                            >
                                <div
                                    className="w-16 h-16 md:w-20 md:h-20 transition-all duration-500 group-hover:scale-110"
                                    style={{ "--brand": tech.brandColor } as React.CSSProperties}
                                >
                                    <div className="w-full h-full transition-colors duration-500 text-white/20 group-hover:text-[var(--brand)]">
                                        <tech.Icon />
                                    </div>
                                </div>
                                <span className="text-xs tracking-wider text-white/20 group-hover:text-white/60 transition-colors duration-500 font-medium">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
