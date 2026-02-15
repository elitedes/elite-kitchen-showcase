import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogPosts';
import ContactSection from '@/components/home/ContactSection';

const BlogPost = () => {
    const { slug } = useParams();
    const { language, t } = useLanguage();

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const localizedTitle = post.title[language] || post.title['en'];
    const localizedContent = post.content[language] || post.content['en'];

    return (
        <Layout>
            <SEO
                title={`${localizedTitle} | Elite Design`}
                description={(post.excerpt[language] || post.excerpt['en']).slice(0, 160)}
                canonical={`/blog/${post.slug}`}
                type="article"
            />

            <article className="min-h-screen bg-background pb-16">
                {/* Header Image / Hero */}
                <div className="relative h-[450px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src={post.image}
                        alt={localizedTitle}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full z-20 pb-16 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="max-w-4xl mx-auto text-white flex flex-col items-center text-center"
                            >
                                <Link
                                    to="/blog"
                                    className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-6 transition-colors"
                                >
                                    <ArrowLeft className={`w-4 h-4 ${language === 'he' ? 'ml-2 rotate-180' : 'mr-2'}`} />
                                    {language === 'he' ? 'חזרה למגזין' : language === 'ru' ? 'Назад в журнал' : 'Back to Magazine'}
                                </Link>
                                <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <time dateTime={post.date}>{post.date}</time>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        {post.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime} {language === 'he' ? 'דק׳ קריאה' : 'min read'}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold font-playfair leading-tight">
                                    {localizedTitle}
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: language === 'he' ? 'מגזין' : language === 'ru' ? 'Журнал' : 'Magazine', path: '/blog' },
                        { label: localizedTitle, path: `/blog/${post.slug}`, isCurrent: true }
                    ]} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto mt-12"
                    >
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none 
                            prose-headings:font-playfair prose-headings:font-bold 
                            prose-p:leading-relaxed prose-li:marker:text-primary
                            prose-img:rounded-xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: localizedContent }}
                        />

                        <div className="border-t border-border mt-16 pt-12">
                            <h3 className="text-2xl font-bold font-playfair mb-6 text-center">
                                {language === 'he' ? 'רוצים להתייעץ איתנו?' : language === 'ru' ? 'Хотите проконсультироваться?' : 'Want to consult with us?'}
                            </h3>
                            <div className="flex justify-center">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-bold"
                                >
                                    {t('contact.title')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>
            <ContactSection />
        </Layout>
    );
};

export default BlogPost;
