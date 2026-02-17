import { motion } from "framer-motion";
import { Globe, Layout, Smartphone, Zap, Palette, Code } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const icons = [Layout, Globe, Smartphone, Palette, Code, Zap];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{t.services.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t.services.title1} <span className="gradient-text">{t.services.title2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:glow-border transition-all duration-500"
              >
                <Icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
