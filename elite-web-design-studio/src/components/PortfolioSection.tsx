import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const PortfolioSection = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-32 section-gradient">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{t.portfolio.label}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              {t.portfolio.title1} <span className="gradient-text">{t.portfolio.title2}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.portfolio.items.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="group cursor-pointer">
                {/* ── Browser Frame ── */}
                <div className="rounded-xl border border-white/10 bg-[#0c0c14] overflow-hidden shadow-2xl shadow-primary/5 transition-shadow duration-500 group-hover:shadow-primary/15">
                  {/* Browser Top Bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="h-5 rounded-md bg-white/[0.05] border border-white/[0.08] flex items-center px-3 max-w-[200px] mx-auto">
                        <span className="text-[10px] text-white/25 truncate">{project.title.toLowerCase().replace(/\s+/g, "")}.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Image Viewport with scroll effect */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={`/portfolio/project${i + 1}.png`}
                      alt={project.title}
                      className="w-full h-[160%] object-cover object-top transition-transform duration-[2s] ease-in-out group-hover:translate-y-[-25%] group-hover:scale-110"
                    />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-[#0c0c14]/70 to-[#0c0c14]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 p-6">
                      {/* Project Title & Category */}
                      <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs text-primary uppercase tracking-[0.2em] mb-2 font-medium">{project.category}</p>
                        <h3 className="font-display text-2xl font-bold text-white mb-3">{project.title}</h3>

                        {/* Tech badges */}
                        <div className="flex flex-wrap justify-center gap-2 mb-5">
                          {project.tech.map((tech, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full bg-primary/15 text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Live Button */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 glow-box"
                      >
                        {t.portfolio.viewLive}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
