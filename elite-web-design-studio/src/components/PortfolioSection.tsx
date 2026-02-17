import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const gradients = [
  "from-purple-600/20 to-blue-600/20",
  "from-pink-600/20 to-purple-600/20",
  "from-blue-600/20 to-cyan-600/20",
];

const PortfolioSection = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{t.portfolio.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t.portfolio.title1} <span className="gradient-text">{t.portfolio.title2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.portfolio.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-xl border border-border/30 cursor-pointer"
            >
              <div className="aspect-[4/3] bg-card flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                <img
                  src={`/portfolio/project${i + 1}.png`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
