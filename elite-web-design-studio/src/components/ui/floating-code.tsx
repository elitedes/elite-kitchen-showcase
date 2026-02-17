"use client";

import { motion } from "framer-motion";

const codeSnippets = [
    `<div class="hero">
  <h1>Elite Design</h1>
  <p>Premium Web</p>
</div>`,
    `.gradient {
  background: linear-gradient(
    135deg,
    #7c3aed,
    #a78bfa
  );
}`,
    `const animate = () => {
  requestAnimationFrame(
    animate
  );
  render();
};`,
    `@media (min-width: 768px) {
  .grid {
    grid-template-columns:
      repeat(3, 1fr);
  }
}`,
    `function Hero() {
  return (
    <motion.div
      animate={{ y: 0 }}
    />
  );
}`,
];

interface FloatingCodeProps {
    count?: number;
}

export function FloatingCode({ count = 5 }: FloatingCodeProps) {
    const positions = [
        { top: "8%", left: "3%", rotate: -12 },
        { top: "15%", right: "5%", rotate: 8 },
        { bottom: "20%", left: "6%", rotate: 6 },
        { bottom: "12%", right: "3%", rotate: -10 },
        { top: "45%", right: "8%", rotate: 15 },
    ];

    return (
        <>
            {codeSnippets.slice(0, count).map((snippet, i) => (
                <motion.pre
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: [0, 0.06, 0.04, 0.06],
                        y: [30, 0, -10, 0],
                    }}
                    transition={{
                        duration: 15 + i * 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute font-mono text-[10px] sm:text-xs text-white/[0.06] leading-relaxed pointer-events-none select-none blur-[0.5px] whitespace-pre max-w-[200px] hidden md:block"
                    style={{
                        ...positions[i % positions.length],
                        transform: `rotate(${positions[i % positions.length].rotate}deg)`,
                    }}
                >
                    {snippet}
                </motion.pre>
            ))}
        </>
    );
}
