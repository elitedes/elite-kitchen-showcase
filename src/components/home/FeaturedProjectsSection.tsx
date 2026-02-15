import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import project1 from '@/assets/gallery-projects/project-1.jpg';
import project37 from '@/assets/gallery-projects/project-37.jpg';
import project40 from '@/assets/gallery-projects/project-40.jpg';

const FeaturedProjectsSection = () => {
    const { t } = useLanguage();

    const projects = [
        {
            image: project1,
            city: 'featured.project1.city'
        },
        {
            image: project37,
            city: 'featured.project2.city'
        },
        {
            image: project40,
            city: 'featured.project3.city'
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden" aria-label="Featured projects">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                        {t('featured.title')}
                    </h2>
                    <p className="decorative-text mb-6">
                        {t('featured.decorative')}
                    </p>
                    <div className="w-24 h-1.5 bg-muted-gold mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <Link key={index} to="/projects">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={t(project.city)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        <div className="flex items-center gap-2 mb-2 text-muted-gold font-bold uppercase tracking-widest text-sm">
                                            <MapPin className="w-4 h-4" />
                                            {t(project.city)}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Button removed to keep single main CTA on homepage */}
            </div>
        </section>
    );
};

export default FeaturedProjectsSection;
