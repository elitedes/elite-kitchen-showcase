import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
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

const Calculator = () => {
    const { t, dir } = useLanguage();
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) {
            toast.error(t('contact.error'));
            return;
        }
        console.log('Calculator Submission:', formData);
        setSubmitted(true);
        toast.success(t('calc.success'));
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
                                        <Select onValueChange={(val) => setFormData({ ...formData, kitchenType: val })}>
                                            <SelectTrigger className="h-14 rounded-xl border-border bg-gray-50/50">
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
                                        <Select onValueChange={(val) => setFormData({ ...formData, frontType: val })}>
                                            <SelectTrigger className="h-14 rounded-xl border-border bg-gray-50/50">
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
                                        <Select onValueChange={(val) => setFormData({ ...formData, countertopType: val })}>
                                            <SelectTrigger className="h-14 rounded-xl border-border bg-gray-50/50">
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
                                                    className={`flex-1 min-w-[100px] py-3 px-4 rounded-full font-bold transition-all border-2 ${formData.hardwareType === opt.id
                                                            ? 'bg-accent text-accent-foreground border-accent shadow-lg scale-105'
                                                            : 'bg-gray-50 text-muted-foreground border-transparent hover:border-accent/30'
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
                                            <Label className="font-bold">{t('calc.name')}</Label>
                                            <Input
                                                required
                                                placeholder={t('calc.name')}
                                                className="h-12 rounded-xl"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="font-bold">{t('calc.phone')}</Label>
                                            <Input
                                                required
                                                type="tel"
                                                placeholder={t('calc.phone')}
                                                className="h-12 rounded-xl"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-16 text-xl font-bold rounded-2xl bg-gradient-to-r from-accent to-[#f1c40f] hover:from-[#f1c40f] hover:to-accent text-accent-foreground shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {t('calc.submit')}
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
