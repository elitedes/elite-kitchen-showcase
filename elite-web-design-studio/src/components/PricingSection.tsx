import { Check, Sparkles, Rocket } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{t.pricing.label}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              {t.pricing.title1} <span className="gradient-text">{t.pricing.title2}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {t.pricing.plans.map((plan, i) => {
            const featured = i === 1;
            return (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div
                  className={`relative h-full flex flex-col p-8 rounded-2xl border transition-all duration-500 ${featured
                      ? "border-primary/50 bg-card md:scale-[1.05] md:-my-4 md:py-12 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
                    }`}
                >
                  {/* Featured badge */}
                  {featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-violet-500 text-white text-xs font-semibold tracking-wide shadow-lg shadow-primary/30">
                      <Sparkles className="w-3 h-3" />
                      {t.pricing.popular}
                    </div>
                  )}

                  {/* Plan name */}
                  <h3 className={`font-display text-xl font-bold mb-2 ${featured ? "text-white" : "text-white/80"}`}>
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className={`text-4xl font-display font-bold tracking-tight ${featured ? "text-gradient" : "text-white"}`}>
                      {plan.price}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-6 ${featured ? "bg-primary/30" : "bg-white/[0.08]"}`} />

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featured ? "text-primary" : "text-primary/60"}`} />
                        <span className={featured ? "text-white/70" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 ${featured
                        ? "bg-gradient-to-r from-primary to-violet-500 text-white hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.5)] hover:scale-[1.02]"
                        : "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                      }`}
                  >
                    {featured && <Rocket className="w-4 h-4" />}
                    {t.pricing.select}
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
