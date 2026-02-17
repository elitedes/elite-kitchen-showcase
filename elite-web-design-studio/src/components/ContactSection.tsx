import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{t.contact.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title1} <span className="gradient-text">{t.contact.title2}</span>
          </h2>
          <p className="text-muted-foreground mb-12">{t.contact.description}</p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-start">
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
            <textarea
              placeholder={t.contact.message}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-box"
            >
              {t.contact.submit}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
