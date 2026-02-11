import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';
import { ArrowRight, Star, Shield, Settings, Play, CheckCircle2, X } from 'lucide-react';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

// Assets
import heroVideo from '@/assets/closets/closet_video.mp4';
import slidingImg from '@/assets/closets/sliding-new.png';
import hingedImg from '@/assets/closets/hinged-new.png';
import walkinImg from '@/assets/closets/walkin-new.png';
import frameImg from '@/assets/closets/frame.png';
import bedroomImg from '@/assets/closets/bedroom-new.png';
import livingImg from '@/assets/closets/living-tv-mirror.png';
import hallwayImg from '@/assets/closets/hallway-small.png';

// Types
type TabType = 'sliding' | 'hinged' | 'walkin' | 'glass';

const Closets = () => {
    const { t, language, dir } = useLanguage();
    const [activeTab, setActiveTab] = useState<TabType>('sliding');
    const [isMobile, setIsMobile] = useState(false);

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 3D Tilt Hook
    const useTilt = () => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-100, 100], [3, -3]);
        const rotateY = useTransform(x, [-100, 100], [-3, 3]);

        function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
            const rect = event.currentTarget.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;
            x.set(xPct * width);
            y.set(yPct * height);
        }

        function handleMouseLeave() {
            x.set(0);
            y.set(0);
        }

        return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
    };

    const tabs = [
        { id: 'sliding', label: language === 'he' ? 'ארונות הזזה' : language === 'ru' ? 'Шкафы-купе' : 'Sliding Closets' },
        { id: 'hinged', label: language === 'he' ? 'ארונות פתיחה' : language === 'ru' ? 'Распашные шкафы' : 'Hinged Closets' },
        { id: 'walkin', label: language === 'he' ? 'חדרי ארונות' : language === 'ru' ? 'Гардеробные' : 'Walk-in Closets' },
        { id: 'glass', label: language === 'he' ? 'ארונות זכוכית' : language === 'ru' ? 'Стеклянные витрины' : 'Glass Closets' },
    ];

    const features = [
        {
            icon: <Star className="w-6 h-6" />,
            title: language === 'he' ? 'תאורת LED חכמה' : language === 'ru' ? 'Умная LED подсветка' : 'Smart LED Lighting',
            desc: language === 'he' ? 'נדלקת אוטומטית בפתיחת הדלת' : language === 'ru' ? 'Включается при открытии' : 'Auto-on with door opening',
            animation: 'glow'
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: language === 'he' ? 'טריקה שקטה' : language === 'ru' ? 'Тихое закрытие' : 'Soft Close',
            desc: language === 'he' ? 'מגירות ודלתות עם מנגנון בלימה' : language === 'ru' ? 'Ящики и двери с доводчиками' : 'Drawers and doors with damping',
            animation: 'slide'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: language === 'he' ? '10 שנות אחריות' : language === 'ru' ? '10 лет гарантии' : '10 Year Warranty',
            desc: language === 'he' ? 'על כל הפרזול והמנגנונים' : language === 'ru' ? 'На всю фурнитуру' : 'On all hardware',
            animation: 'pulse'
        }
    ];

    return (
        <Layout>
            <div className="bg-[#F5F5F0] min-h-screen font-sans selection:bg-charcoal selection:text-white overflow-x-hidden">
                <WhatsAppButton />

                {/* HERO SECTION */}
                <section className="relative h-screen w-full overflow-hidden">
                    {/* Video Background */}
                    <div className="absolute inset-0 w-full h-full z-0">
                        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={frameImg}
                            className="w-full h-full object-cover scale-105"
                        >
                            <source src={heroVideo} type="video/mp4" />
                        </video>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                                {language === 'he'
                                    ? 'האומנות שבסדר.'
                                    : language === 'ru'
                                        ? 'Искусство порядка.'
                                        : 'The Art of Order.'}
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-white/90 mb-10 max-w-2xl leading-relaxed">
                                {language === 'he'
                                    ? 'עיצוב פרימיום בהתאמה אישית, שמשלב אסתטיקה עוצרת נשימה עם פרקטיקה חכמה.'
                                    : language === 'ru'
                                        ? 'Премиальный дизайн по индивидуальному проекту, сочетающий эстетику и умную функциональность.'
                                        : 'Premium custom design combining breathtaking aesthetics with smart functionality.'}
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-shadow"
                            >
                                <span className="relative z-10">
                                    {language === 'he' ? 'הזמן פגישת ייעוץ' : language === 'ru' ? 'Заказать консультацию' : 'Book Consultation'}
                                </span>
                                <ArrowRight className={`w-5 h-5 relative z-10 transition-transform duration-300 ${dir === 'rtl' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                {/* TABS SECTION - CLOSET TYPES */}
                <section className="py-24 bg-[#F5F5F0]">
                    <div className="container mx-auto px-4">
                        {/* Tabs Navigation */}
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as TabType)}
                                    className={`px-6 py-3 rounded-full text-lg transition-all duration-300 relative ${activeTab === tab.id
                                        ? 'text-white'
                                        : 'text-gray-500 hover:text-black'
                                        }`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-[#2C2C2C] rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 font-medium">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="min-h-[600px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5 }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Text Content */}
                                    <div className={`space-y-8 order-2 lg:order-none ${dir === 'rtl' ? 'lg:order-2' : ''}`}>
                                        <h2 className="text-4xl font-bold text-[#2C2C2C]">
                                            {activeTab === 'sliding' && (language === 'he' ? 'ארונות הזזה: מינימליזם בתנועה' : language === 'ru' ? 'Шкафы-купе: Минимализм в движении' : 'Sliding Closets: Minimalism in Motion')}
                                            {activeTab === 'hinged' && (language === 'he' ? 'ארונות פתיחה: הקלאסיקה החדשה' : language === 'ru' ? 'Распашные шкафы: Новая классика' : 'Hinged Closets: The New Classic')}
                                            {activeTab === 'walkin' && (language === 'he' ? 'חדרי ארונות: הממלכה שלך' : language === 'ru' ? 'Гардеробные: Ваше королевство' : 'Walk-in Closets: Your Kingdom')}
                                            {activeTab === 'glass' && (language === 'he' ? 'ויטרינות זכוכית: שקיפות יוקרתית' : language === 'ru' ? 'Стеклянные витрины: Роскошная прозрачность' : 'Glass Showcases: Luxurious Transparency')}
                                        </h2>
                                        <p className="text-xl text-gray-600 leading-relaxed">
                                            {activeTab === 'sliding' && (
                                                language === 'he' ? 'ניצול מקסימלי של החלל עם דלתות מרחפות שנעות בשקט מופתי. המסילות הנסתרות שלנו מבטיחות מראה נקי ואחיד.' :
                                                    language === 'ru' ? 'Максимальное использование пространства с парящими дверями, скользящими в полной тишине. Скрытые направляющие обеспечивают чистый вид.' :
                                                        'Maximum space utilization with floating doors that slide in perfect silence. Our hidden tracks ensure a clean and uniform look.'
                                            )}
                                            {activeTab === 'hinged' && (
                                                language === 'he' ? 'גמישות עיצובית אינסופית. שלבו ידיות אינטגרליות, חזיתות תלת-ממדיות ושילוב חומרים ליצירת ארון שהוא רהיט אומנותי.' :
                                                    language === 'ru' ? 'Бесконечная гибкость дизайна. Интегрированные ручки, 3D фасады и комбинации материалов создают шкаф как арт-объект.' :
                                                        'Infinite design flexibility. Combine integrated handles, 3D fronts, and a mix of materials to create a closet that is a piece of art.'
                                            )}
                                            {activeTab === 'walkin' && (
                                                language === 'he' ? 'תכנון ארגונומי מדויק לכל פריט לבוש. ממגירות תכשיטים מרופדות ועד מתקנים נשלפים למכנסיים - הכל במקום ובנגישות מיידית.' :
                                                    language === 'ru' ? 'Точная эргономика для каждой вещи. От бархатных ящиков для украшений до выдвижных брючниц - всё на месте.' :
                                                        'Precise ergonomic design for every garment. From lined jewelry drawers to pull-out pant racks - everything is in its place and immediately accessible.'
                                            )}
                                            {activeTab === 'glass' && (
                                                language === 'he' ? 'מערכות אלומיניום דקיקות וזכוכית כהה שחושפת את הביגוד רק כשהתאורה נדלקת. המראה של בוטיק יוקרה בתוך הבית.' :
                                                    language === 'ru' ? 'Тончайший алюминий и тонированное стекло, открывающее одежду только при включении света. Вид роскошного бутика дома.' :
                                                        'Slim aluminum systems and tinted glass that reveal clothing only when the lights come on. The look of a luxury boutique inside your home.'
                                            )}
                                        </p>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                    {language === 'he' ? 'יתרונות' : language === 'ru' ? 'Преимущества' : 'Advantages'}
                                                </h4>
                                                <p className="text-sm text-gray-500">
                                                    {activeTab === 'sliding' ? (
                                                        language === 'he' ? 'חיסכון במקום, דלתות רחבות' :
                                                            language === 'ru' ? 'Экономия места, широкие двери' :
                                                                'Space-saving, wide doors'
                                                    ) : ''}
                                                    {activeTab === 'hinged' ? (
                                                        language === 'he' ? 'גישה מלאה, עיצוב גמיש' :
                                                            language === 'ru' ? 'Полный доступ, гибкий дизайн' :
                                                                'Full access, flexible design'
                                                    ) : ''}
                                                    {activeTab === 'walkin' ? (
                                                        language === 'he' ? 'סדר מופתי, נוחות מקסימלית' :
                                                            language === 'ru' ? 'Идеальный порядок, макс. комфорт' :
                                                                'Perfect order, maximum comfort'
                                                    ) : ''}
                                                    {activeTab === 'glass' ? (
                                                        language === 'he' ? 'מראה יוקרתי, תאורה פנימית' :
                                                            language === 'ru' ? 'Роскошный вид, внутр. свет' :
                                                                'Luxury look, internal lighting'
                                                    ) : ''}
                                                </p>
                                            </div>
                                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                                    <Settings className="w-5 h-5 text-blue-500" />
                                                    {language === 'he' ? 'מפרט' : language === 'ru' ? 'Спецификация' : 'Specs'}
                                                </h4>
                                                <p className="text-sm text-gray-500">
                                                    {language === 'he' ? 'פרזול בלום, גוף סנדוויץ׳' :
                                                        language === 'ru' ? 'Фурнитура Blum, корпус сэндвич' :
                                                            'Blum hardware, sandwich body'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Area */}
                                    <div className={`relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-none ${dir === 'rtl' ? 'lg:order-1' : ''}`}>
                                        <img
                                            src={activeTab === 'sliding' ? slidingImg : activeTab === 'hinged' ? hingedImg : activeTab === 'walkin' ? walkinImg : livingImg}
                                            alt={activeTab}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                        {/* Floating Tag */}
                                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg">
                                            <p className="text-xs font-bold uppercase tracking-widest text-[#2C2C2C]">{language === 'he' ? 'דגם 2024' : language === 'ru' ? 'Модель 2024' : 'Model 2024'}</p>
                                            <p className="text-lg font-serif italic">{tabs.find(t => t.id === activeTab)?.label}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* PROJECTS GRID - MASONRY + TILT */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
                                    {language === 'he' ? 'פרויקטים נבחרים' : language === 'ru' ? 'Избранные проекты' : 'Featured Projects'}
                                </h2>
                                <p className="text-gray-500 max-w-lg">
                                    {language === 'he' ? 'הצצה לקולקציה האחרונה של ארונות שתכננו והתקנו.' : language === 'ru' ? 'Взгляд на последнюю коллекцию наших работ.' : 'A glimpse into our latest collection.'}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    img: bedroomImg,
                                    title: language === 'he' ? 'ארון לחדר שינה' : language === 'ru' ? 'Шкаф в спальню' : 'Bedroom Closet',
                                    mat: language === 'he' ? 'אקרילי וזכוכית' : language === 'ru' ? 'Акрил и Стекло' : 'Acrylic & Glass',
                                    slug: 'bedroom-closet-guide'
                                },
                                {
                                    img: hallwayImg,
                                    title: language === 'he' ? 'ארון כניסה' : language === 'ru' ? 'Шкаф в прихожую' : 'Entryway Closet',
                                    mat: language === 'he' ? 'נאנו שחור' : language === 'ru' ? 'Нано Черный' : 'Nano Black',
                                    slug: 'hallway-closet-guide'
                                },
                                {
                                    img: slidingImg,
                                    title: language === 'he' ? 'ארון הזזה לחדר אורחים' : language === 'ru' ? 'Шкаф-купе в гостевую' : 'Guest Room Sliding',
                                    mat: language === 'he' ? 'מראה ועץ' : language === 'ru' ? 'Зеркало и Дерево' : 'Mirror & Wood',
                                    slug: 'guest-room-sliding-closet'
                                }
                            ].map((project, idx) => {
                                const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();

                                return (
                                    <Link
                                        to={`/blog/${project.slug}`}
                                        key={idx}
                                        className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            style={{ rotateX: isMobile ? 0 : rotateX, rotateY: isMobile ? 0 : rotateY, perspective: 1000 }}
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseLeave}
                                            className="w-full h-full relative"
                                        >
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                                            <img
                                                src={project.img}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <p className="text-white/70 text-sm uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.mat}</p>
                                                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                                <div className="w-12 h-1 bg-white rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                            </div>
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* FEATURES - INTERACTIVE */}
                <section className="py-24 bg-[#2C2C2C] text-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-accent">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-white/60 mb-6">{feature.desc}</p>

                                    {/* Visual Indicator of Animation */}
                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent w-1/3 group-hover:w-full transition-all duration-1000 ease-in-out" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <div id="contact">
                    <ContactSection />
                </div>
            </div>
        </Layout>
    );
};

export default Closets;
