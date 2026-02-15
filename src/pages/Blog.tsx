import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogPosts';
import ContactSection from '@/components/home/ContactSection';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
    const { t, language } = useLanguage();

    return (
        <Layout>
            <SEO
                title="בלוג | Elite Design - מדריכים וטיפים למטבח ולבית"
                description="בלוג Elite Design: מאמרים מקצועיים, מדריכי הכנה למטבח, טיפים לעיצוב ארונות, והכל על נגרות בהתאמה אישית."
                canonical="/blog"
            />
            <div className="bg-background min-h-screen">
                {/* Header */}
                <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden" aria-label="Blog header">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
                            {t('nav.magazine')}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                            {language === 'he'
                                ? 'טיפים, רעיונות והשראה לעיצוב המטבח המושלם'
                                : language === 'ru'
                                    ? 'Советы, идеи и вдохновение для дизайна идеальной кухни'
                                    : 'Tips, ideas, and inspiration for the perfect kitchen design'}
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-16" aria-label="Blog articles">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => {
                                const title = post.title[language] || post.title['en'];
                                const excerpt = post.excerpt[language] || post.excerpt['en'];

                                return (
                                    <motion.article
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 flex flex-col h-full"
                                    >
                                        <Link to={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                            <img
                                                src={post.image}
                                                alt={title}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                                {post.category}
                                            </div>
                                        </Link>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    <time dateTime={post.date}>{post.date}</time>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime} min
                                                </span>
                                            </div>

                                            <h2 className="text-xl font-bold font-playfair mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                <Link to={`/blog/${post.slug}`}>
                                                    {title}
                                                </Link>
                                            </h2>

                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                                {excerpt}
                                            </p>

                                            <Link
                                                to={`/blog/${post.slug}`}
                                                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-auto"
                                            >
                                                {language === 'he' ? 'קרא עוד' : language === 'ru' ? 'Читать далее' : 'Read More'}
                                                <ArrowRight className={`w-4 h-4 ${language === 'he' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                                            </Link>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <ContactSection />
            </div>
        </Layout>
    );
};

export default Blog;
