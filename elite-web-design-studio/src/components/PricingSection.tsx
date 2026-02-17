import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{t.pricing.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t.pricing.title1} <span className="gradient-text">{t.pricing.title2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, i) => {
            const highlighted = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 rounded-xl border ${
                  highlighted ? "border-primary/50 glow-border bg-card" : "border-border/30 bg-card/50"
                }`}
              >
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {t.pricing.popular}
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-display font-bold gradient-text mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${
                    highlighted
                      ? "bg-primary text-primary-foreground hover:opacity-90 glow-box"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {t.pricing.select}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
