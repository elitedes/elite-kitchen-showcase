import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import safeCheck from '@/assets/calc-concept.png';

const Calculator = () => {
    const { t, dir, language } = useLanguage();
    const [formData, setFormData] = useState({
        kitchenType: '',
        frontType: '',
        countertopType: '',
        hardwareType: 'standard',
        dim1: '',
        dim2: '',
        dim3: '',
        name: '',
        phone: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) {
            toast.error(t('contact.error'));
            return;
        }

        setIsSubmitting(true);

        const botToken = '7840966634:AAGb94rcHU7WxW9BWBRIwtbh7b48GvYbSgU';
        const chatId = '1492940504';

        const textHe = `
🧮 *חישוב עלות מטבח חדש!*

👤 *שם:* ${formData.name}
📱 *טלפון:* ${formData.phone}

🏗️ *פרטי המטבח:*
• *סוג:* ${t(`calc.type.${formData.kitchenType}`)}
• *חזית:* ${t(`calc.front.${formData.frontType}`)}
• *שיש:* ${t(`calc.counter.${formData.countertopType}`)}
• *פרזול:* ${t(`calc.hardware.${formData.hardwareType}`)}

📏 *מידות:*
• ${t('calc.dimensions.len1')}: ${formData.dim1} ס"מ
• ${t('calc.dimensions.len2')}: ${formData.dim2} ס"מ
${formData.dim3 ? `• ${t('calc.dimensions.len3')}: ${formData.dim3} ס"מ` : ''}
        `;

        const textRu = `
🧮 *Новый расчет кухни!*

👤 *Имя:* ${formData.name}
📱 *Телефон:* ${formData.phone}

🏗️ *Детали кухни:*
• *Тип:* ${t(`calc.type.${formData.kitchenType}`)}
• *Фасад:* ${t(`calc.front.${formData.frontType}`)}
• *Столешница:* ${t(`calc.counter.${formData.countertopType}`)}
• *Фурнитура:* ${t(`calc.hardware.${formData.hardwareType}`)}

📏 *Размеры:*
• ${t('calc.dimensions.len1')}: ${formData.dim1} см
• ${t('calc.dimensions.len2')}: ${formData.dim2} см
${formData.dim3 ? `• ${t('calc.dimensions.len3')}: ${formData.dim3} см` : ''}
        `;

        const textEn = `
🧮 *New Kitchen Calculation!*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}

🏗️ *Kitchen Details:*
• *Type:* ${t(`calc.type.${formData.kitchenType}`)}
• *Front:* ${t(`calc.front.${formData.frontType}`)}
• *Countertop:* ${t(`calc.counter.${formData.countertopType}`)}
• *Hardware:* ${t(`calc.hardware.${formData.hardwareType}`)}

📏 *Dimensions:*
• ${t('calc.dimensions.len1')}: ${formData.dim1} cm
• ${t('calc.dimensions.len2')}: ${formData.dim2} cm
${formData.dim3 ? `• ${t('calc.dimensions.len3')}: ${formData.dim3} cm` : ''}
        `;

        const text = language === 'he' ? textHe : language === 'ru' ? textRu : textEn;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'Markdown',
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                toast.success(t('calc.success'));
            } else {
                toast.error(t('contact.error'));
            }
        } catch (error) {
            console.error('Error sending to Telegram:', error);
            toast.error(t('contact.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const hardwareOptions = [
        { id: 'standard', key: 'calc.hardware.standard' },
        { id: 'premium', key: 'calc.hardware.premium' },
        { id: 'super', key: 'calc.hardware.super' },
    ];

    if (submitted) {
        return (
            <Layout>
                <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-12 bg-white rounded-3xl shadow-xl border border-primary/20 max-w-2xl"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-4">{t('contact.success')}</h2>
                        <p className="text-muted-foreground text-lg mb-8">{t('calc.success')}</p>
                        <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full px-8">
                            {t('page.notfound.back')}
                        </Button>
                    </motion.div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <SEO
                title="מחשבון מטבחים | Elite Design - חישוב עלות מטבח חדש"
                description="חשבו את עלות המטבח החדש שלכם עם מחשבון מטבחים חכם של Elite Design. בחרו סוג מטבח, חזיתות, שיש ופרזול וקבלו הערכת מחיר מקצועית."
                canonical="/calculator"
            />
            {/* Hero Banner */}
            <section className="relative bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556912170-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
                            {t('nav.calculator')}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light italic">
                            {t('calc.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 mt-8">
                <Breadcrumbs items={[{ label: t('nav.calculator'), path: '/calculator', isCurrent: true }]} />
            </div>

            <section className="py-20 relative overflow-hidden bg-white">
                {/* Decorative elements - wood shavings style */}
                <div className="absolute top-10 right-[15%] w-32 h-32 opacity-20 hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1546484396-fb3bb6f95d98?auto=format&fit=crop&q=80&w=200" alt="" className="w-full h-full object-contain rotate-12" />
                </div>
                <div className="absolute bottom-20 left-[10%] w-40 h-40 opacity-20 hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1546484396-fb3bb6f95d98?auto=format&fit=crop&q=80&w=300" alt="" className="w-full h-full object-contain -rotate-45" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className={`flex flex-col lg:flex-row items-center gap-16 ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>

                        {/* Form Column */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border-[12px] border-accent/20 relative"
                            >
                                {/* Internal Yellow Border Accent like in screenshot */}
                                <div className="absolute inset-0 border-[2px] border-accent/40 rounded-[1.5rem] pointer-events-none m-2" />

                                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                    {/* Select: Kitchen Type */}
                                    <div className="space-y-3">
                                        <Label className="text-charcoal font-bold text-lg">{t('calc.type.label')}</Label>
                                        <Select onValueChange={(val) => setFormData({ ...formData, kitchenType: val })} dir={dir}>
                                            <SelectTrigger className="h-14 rounded-xl border-border bg-gray-50/50 text-start">
                                                <SelectValue placeholder={t('calc.type.straight')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="straight">{t('calc.type.straight')}</SelectItem>
                                                <SelectItem value="lshape">{t('calc.type.lshape')}</SelectItem>
                                                <SelectItem value="ushape">{t('calc.type.ushape')}</SelectItem>
                                                <SelectItem value="island">{t('calc.type.island')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Select: Front Material */}
                                    <div className="space-y-3">
                                        <Label className="text-charcoal font-bold text-lg">{t('calc.front.label')}</Label>
                                        <Select onValueChange={(val) => setFormData({ ...formData, frontType: val })} dir={dir}>
                                            <SelectTrigger className="h-14 rounded-xl border-border bg-gray-50/50 text-start">
                                                <SelectValue placeholder={t('calc.front.formica')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="formica">{t('calc.front.formica')}</SelectItem>
                                                <SelectItem value="polymer">{t('calc.front.polymer')}</SelectItem>
                                                <SelectItem value="paint">{t('calc.front.paint')}</SelectItem>
                                                <SelectItem value="acrylic">{t('calc.front.acrylic')}</SelectItem>
                                                <SelectItem value="wood">{t('calc.front.wood')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Select: Countertop */}
                                    <div className="space-y-3">
                                        <Label className="text-charcoal font-bold text-lg">{t('calc.counter.label')}</Label>
                                        <Select onValueChange={(val) => setFormData({ ...formData, countertopType: val })} dir={dir}>
                                            <SelectTrigger className="h-14 rounded-xl border-border bg-gray-50/50 text-start">
                                                <SelectValue placeholder={t('calc.counter.caes20')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="caes20">{t('calc.counter.caes20')}</SelectItem>
                                                <SelectItem value="caes40">{t('calc.counter.caes40')}</SelectItem>
                                                <SelectItem value="porcelain">{t('calc.counter.porcelain')}</SelectItem>
                                                <SelectItem value="wood">{t('calc.counter.wood')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Hardware Selection (Buttons style like screenshot) */}
                                    <div className="space-y-3">
                                        <Label className="text-charcoal font-bold text-lg">{t('calc.hardware.label')}</Label>
                                        <div className="flex flex-wrap gap-3">
                                            {hardwareOptions.map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, hardwareType: opt.id })}
                                                    className={`flex-1 min-w-[100px] py-3 px-4 rounded-xl font-bold transition-all border ${formData.hardwareType === opt.id
                                                        ? 'bg-accent/80 text-white backdrop-blur-md border-white/30 shadow-lg scale-105'
                                                        : 'bg-gray-50/50 text-muted-foreground border-transparent hover:border-accent/30 backdrop-blur-sm'
                                                        }`}
                                                >
                                                    {t(opt.key)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Dimensions Grid */}
                                    <div className="space-y-3">
                                        <Label className="text-charcoal font-bold text-lg">{t('calc.dimensions.label')}</Label>
                                        <div className="grid grid-cols-3 gap-4 items-center">
                                            <div className="space-y-1">
                                                <Input
                                                    type="number"
                                                    placeholder="0"
                                                    className="h-12 text-center rounded-lg border-border"
                                                    value={formData.dim1}
                                                    onChange={(e) => setFormData({ ...formData, dim1: e.target.value })}
                                                />
                                                <p className="text-[10px] text-center text-muted-foreground">{t('calc.dimensions.len1')}</p>
                                            </div>
                                            <div className="text-center font-bold text-muted-foreground">x</div>
                                            <div className="space-y-1">
                                                <Input
                                                    type="number"
                                                    placeholder="0"
                                                    className="h-12 text-center rounded-lg border-border"
                                                    value={formData.dim2}
                                                    onChange={(e) => setFormData({ ...formData, dim2: e.target.value })}
                                                />
                                                <p className="text-[10px] text-center text-muted-foreground">{t('calc.dimensions.len2')}</p>
                                            </div>
                                            {/* Note: third dimension field if needed for L/U shape */}
                                        </div>
                                    </div>

                                    {/* Contact Info Section */}
                                    <div className="pt-6 border-t border-dashed border-border/60 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="font-bold flex items-center gap-1">{t('calc.name')}</Label>
                                            <Input
                                                required
                                                placeholder={t('calc.name')}
                                                className={`h-12 rounded-xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="font-bold flex items-center gap-1">{t('calc.phone')}</Label>
                                            <Input
                                                required
                                                type="tel"
                                                placeholder={t('calc.phone')}
                                                className={`h-12 rounded-xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-accent-hero w-full h-16 border-none disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                                                <span>...</span>
                                            </div>
                                        ) : (
                                            t('calc.submit')
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>

                        {/* Visual Column */}
                        <div className="w-full lg:w-1/2 text-center lg:text-start">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white/50">
                                    <img src={safeCheck} alt="Kitchen Planning Concept" className="w-full h-auto" />
                                </div>

                                <div className="inline-block p-1 bg-accent/20 rounded-full mb-4">
                                    <div className="bg-accent h-2 w-16 rounded-full" />
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight">
                                    {t('calc.title')}
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                                    {t('calc.desc')}
                                </p>

                                <div className="pt-10 hidden lg:block">
                                    <div className="flex items-center gap-6 p-6 bg-accent/5 rounded-[2rem] border border-accent/10">
                                        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground shrink-0 shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-lg font-medium text-charcoal">
                                            Professional estimation based on over 20 years of experience in custom carpentry.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Calculator;
