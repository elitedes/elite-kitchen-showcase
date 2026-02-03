import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Circle } from 'lucide-react';

const InstallationChecklist = () => {
    const { t } = useLanguage();

    // Using keys for translation
    const checkItems = [
        'install.check.clear',
        'install.check.plumbing',
        'install.check.electric',
        'install.check.walls',
        'install.check.floor',
        'install.check.access',
    ];

    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    const toggleItem = (item: string) => {
        if (checkedItems.includes(item)) {
            setCheckedItems(checkedItems.filter(i => i !== item));
        } else {
            setCheckedItems([...checkedItems, item]);
        }
    };

    const progress = Math.round((checkedItems.length / checkItems.length) * 100);

    return (
        <div className="bg-white dark:bg-card rounded-2xl shadow-xl p-8 border border-border/50">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-2xl font-bold font-playfair">{t('install.checklist.title')}</h3>
                    <p className="text-muted-foreground">{t('install.checklist.desc')}</p>
                </div>
                <div className="text-right">
                    <span className="text-4xl font-bold text-accent">{progress}%</span>
                    <span className="block text-sm text-muted-foreground">{t('install.checklist.complete')}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-8">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checkItems.map((item, index) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`
              flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer
              ${checkedItems.includes(item)
                                ? 'bg-accent/10 border-accent/30 shadow-sm'
                                : 'bg-background border-border hover:border-accent/50'}
            `}
                        onClick={() => toggleItem(item)}
                    >
                        <div className={`
              w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors
              ${checkedItems.includes(item)
                                ? 'bg-accent border-accent text-white'
                                : 'border-muted-foreground text-transparent group-hover:border-accent'}
            `}>
                            <Check className="w-4 h-4" />
                        </div>
                        <span className={`font-medium transition-colors ${checkedItems.includes(item) ? 'text-accent-foreground' : 'text-foreground'}`}>
                            {t(item)}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InstallationChecklist;
