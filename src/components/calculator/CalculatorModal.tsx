import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
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

interface CalculatorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CalculatorModal = ({ isOpen, onClose }: CalculatorModalProps) => {
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
🧮 *חישוב עלות מטבח חדש! (מהדף הבית)*

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
🧮 *Новый расчет кухни! (с главной)*

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
🧮 *New Kitchen Calculation! (from Home)*

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
            <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
                <DialogContent className="sm:max-w-[500px] rounded-3xl" dir={dir}>
                    <div className="text-center p-6 bg-white rounded-3xl">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-charcoal mb-4">{t('contact.success')}</h2>
                        <p className="text-muted-foreground mb-8">{t('calc.success')}</p>
                        <Button onClick={() => { setSubmitted(false); onClose(); }} variant="outline" className="rounded-full px-8">
                            {t('page.notfound.back')}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-3xl" dir={dir}>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">{t('calc.title')}</DialogTitle>
                    <DialogDescription className="text-center">
                        {t('calc.desc')}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4 p-1">
                    {/* Select: Kitchen Type */}
                    <div className="space-y-2">
                        <Label className="text-charcoal font-bold">{t('calc.type.label')}</Label>
                        <Select onValueChange={(val) => setFormData({ ...formData, kitchenType: val })} dir={dir}>
                            <SelectTrigger className="h-12 rounded-xl border-border bg-gray-50/50 text-start">
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
                    <div className="space-y-2">
                        <Label className="text-charcoal font-bold">{t('calc.front.label')}</Label>
                        <Select onValueChange={(val) => setFormData({ ...formData, frontType: val })} dir={dir}>
                            <SelectTrigger className="h-12 rounded-xl border-border bg-gray-50/50 text-start">
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
                    <div className="space-y-2">
                        <Label className="text-charcoal font-bold">{t('calc.counter.label')}</Label>
                        <Select onValueChange={(val) => setFormData({ ...formData, countertopType: val })} dir={dir}>
                            <SelectTrigger className="h-12 rounded-xl border-border bg-gray-50/50 text-start">
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

                    {/* Hardware Selection */}
                    <div className="space-y-2">
                        <Label className="text-charcoal font-bold">{t('calc.hardware.label')}</Label>
                        <div className="flex flex-wrap gap-2">
                            {hardwareOptions.map((opt) => (
                                <button
                                    key={opt.id}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, hardwareType: opt.id })}
                                    className={`flex-1 min-w-[80px] py-2 px-3 rounded-lg font-bold transition-all border text-sm ${formData.hardwareType === opt.id
                                        ? 'bg-accent/80 text-white border-white/30 shadow-md'
                                        : 'bg-gray-50/50 text-muted-foreground border-transparent hover:border-accent/30'
                                        }`}
                                >
                                    {t(opt.key)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dimensions Grid */}
                    <div className="space-y-2">
                        <Label className="text-charcoal font-bold">{t('calc.dimensions.label')}</Label>
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="space-y-1">
                                <Input
                                    type="number"
                                    placeholder="0"
                                    className="h-10 text-center rounded-lg border-border"
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
                                    className="h-10 text-center rounded-lg border-border"
                                    value={formData.dim2}
                                    onChange={(e) => setFormData({ ...formData, dim2: e.target.value })}
                                />
                                <p className="text-[10px] text-center text-muted-foreground">{t('calc.dimensions.len2')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="pt-4 border-t border-dashed border-border/60 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label className="font-bold text-sm">{t('calc.name')}</Label>
                            <Input
                                required
                                placeholder={t('calc.name')}
                                className={`h-10 rounded-lg ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label className="font-bold text-sm">{t('calc.phone')}</Label>
                            <Input
                                required
                                type="tel"
                                placeholder={t('calc.phone')}
                                className={`h-10 rounded-lg ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-accent hover:bg-accent/90 text-white rounded-xl border-none disabled:opacity-70 disabled:cursor-not-allowed font-bold"
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
            </DialogContent>
        </Dialog>
    );
};

export default CalculatorModal;
