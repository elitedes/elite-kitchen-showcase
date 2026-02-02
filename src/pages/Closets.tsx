import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, X, Shield, Star, Camera, Settings, Layout as LayoutIcon, Home, Bed, Baby, Sofa, ArrowRight } from 'lucide-react';
import ContactSection from '@/components/home/ContactSection';

// Import local assets
const heroImage = "https://images.unsplash.com/photo-1516053350711-28562725f101?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
import hingedClosetImg from '@/assets/closets/hinged-open.jpg';
import hallwayImg from '@/assets/closets/walk-in.jpg';
import bedroomImg from '@/assets/closets/hinged-minimal.jpg';
import kidsImg from '@/assets/closets/sliding-mirror.jpg'; // Reusing for variety
import livingImg from '@/assets/closets/hinged-minimal.jpg'; // Reusing for variety

const Closets = () => {
    const { t, dir } = useLanguage();

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                    >
                        {t('page.closets.title')}
                    </motion.h1>
                </div>
            </section>

            {/* Main Content */}
            <div className="bg-background">
                {/* Sliding Closets Section */}
                <section className="py-20 border-b border-border/50">
                    <div className="container mx-auto px-4">
                        <div className={`flex flex-col ${dir === 'rtl' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                            <div className="lg:w-1/2">
                                <motion.div {...fadeIn}>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">{t('closets.sliding.title')}</h2>
                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        {t('closets.sliding.desc')}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                                <Check className="w-5 h-5" />
                                                {t('closets.sliding.pros.title')}
                                            </h3>
                                            <ul className="space-y-3">
                                                {[1, 2, 3, 4].map(idx => (
                                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground italic">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                                        {t(`closets.sliding.pros.${idx}`)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-2">
                                                <X className="w-5 h-5" />
                                                {t('closets.sliding.cons.title')}
                                            </h3>
                                            <ul className="space-y-3">
                                                {[1, 2, 3].map(idx => (
                                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground italic">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 flex-shrink-0" />
                                                        {t(`closets.sliding.cons.${idx}`)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl overflow-hidden shadow-2xl h-[500px]"
                                >
                                    <img
                                        src={slidingClosetImg}
                                        alt="Sliding Closet"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hinged Closets Section */}
                <section className="py-20 bg-accent/5">
                    <div className="container mx-auto px-4">
                        <div className={`flex flex-col ${dir === 'rtl' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                            <div className="lg:w-1/2">
                                <motion.div {...fadeIn}>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">{t('closets.hinged.title')}</h2>
                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        {t('closets.hinged.desc')}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                                <Check className="w-5 h-5" />
                                                {t('closets.hinged.pros.title')}
                                            </h3>
                                            <ul className="space-y-3">
                                                {[1, 2, 3, 4].map(idx => (
                                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground italic">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                                        {t(`closets.hinged.pros.${idx}`)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-2">
                                                <X className="w-5 h-5" />
                                                {t('closets.hinged.cons.title')}
                                            </h3>
                                            <ul className="space-y-3">
                                                {[1, 2].map(idx => (
                                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground italic">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 flex-shrink-0" />
                                                        {t(`closets.hinged.cons.${idx}`)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl overflow-hidden shadow-2xl h-[500px]"
                                >
                                    <img
                                        src={hingedClosetImg}
                                        alt="Hinged Closet"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Care Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div
                            {...fadeIn}
                            className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 text-center"
                        >
                            <Settings className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-charcoal mb-4">{t('closets.care.title')}</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed italic">
                                {t('closets.care.desc')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Room Selection Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{t('closets.rooms.title')}</h2>
                            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { key: 'hallway', icon: LayoutIcon, img: hallwayImg },
                                { key: 'bedroom', icon: Bed, img: bedroomImg },
                                { key: 'kids', icon: Baby, img: kidsImg },
                                { key: 'living', icon: Sofa, img: livingImg }
                            ].map((room, index) => (
                                <motion.div
                                    key={room.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={room.img}
                                            alt={t(`closets.rooms.${room.key}.title`)}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <room.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-xl font-bold text-charcoal">{t(`closets.rooms.${room.key}.title`)}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {t(`closets.rooms.${room.key}.desc`)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Custom Production Section */}
                <section className="py-20 bg-charcoal text-white">
                    <div className="container mx-auto px-4">
                        <div className={`flex flex-col lg:flex-row gap-16 items-center ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="lg:w-1/2">
                                <motion.h2 {...fadeIn} className="text-4xl font-bold mb-8">{t('closets.custom.title')}</motion.h2>
                                <div className="space-y-6">
                                    <p className="text-white/80 text-lg">{t('closets.custom.desc')}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map(idx => (
                                            <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                                                    {idx}
                                                </div>
                                                <span className="font-medium">{t(`closets.custom.list.${idx}`)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-white/60 italic pt-6">
                                        {t('closets.custom.footer')}
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img src={hallwayImg} alt="Custom Production" className="w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-accent relative overflow-hidden text-accent-foreground">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('closets.cta.title')}</h2>
                            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                                {t('closets.cta.desc')}
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 bg-white text-accent px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-muted transition-all hover:scale-105"
                            >
                                {t('hero.cta.details')}
                                <ArrowRight className="w-6 h-6" />
                            </a>
                        </motion.div>
                    </div>
                </section>

                <div id="contact">
                    <ContactSection />
                </div>

                {/* SEO Footer */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <p className="text-muted-foreground/60 text-xs text-center max-w-4xl mx-auto leading-relaxed">
                            {t('closets.seo.title')}
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Closets;
