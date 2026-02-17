import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const ContactSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (i: number) =>
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  return (
    <section id="contact" className="py-32 section-gradient">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{t.contact.label}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t.contact.title1} <span className="gradient-text">{t.contact.title2}</span>
            </h2>
            <p className="text-muted-foreground mb-12">{t.contact.description}</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 text-start">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t.contact.name}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
                <input
                  type="email"
                  placeholder={t.contact.email}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Project-type chips */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">{t.contact.chipsLabel}</p>
                <div className="flex flex-wrap gap-3">
                  {t.contact.chips.map((chip: string, i: number) => {
                    const active = selected.includes(i);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggle(i)}
                        className={`
                          px-5 py-2.5 rounded-full text-sm font-medium
                          border transition-all duration-300 cursor-pointer
                          ${active
                            ? "border-primary/60 bg-primary/15 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                            : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/70"
                          }
                        `}
                      >
                        {chip}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional message */}
              <textarea
                placeholder={t.contact.message}
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              />

              {/* Submit button */}
              <div className="text-center space-y-3">
                <button
                  type="submit"
                  className="group relative w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-violet-500 text-white text-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]"
                >
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-violet-500 opacity-50 blur-md animate-pulse" />
                  <span className="relative flex items-center gap-2">
                    {t.contact.submit}
                    <Send className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </button>
                <p className="text-xs text-white/30">{t.contact.responseTime}</p>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
