import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const ContactSection = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.phone) {
      toast.error(t('contact.error') || 'Please fill in required fields');
      return;
    }

    const botToken = '7840966634:AAGb94rcHU7WxW9BWBRIwtbh7b48GvYbSgU';
    const chatId = '1492940504';
    const textHe = `
📩 *פנייה חדשה מהאתר!*

👤 *שם:* ${formData.name}
📱 *טלפון:* ${formData.phone}
📧 *אימייל:* ${formData.email || 'לא צוין'}
💬 *הודעה:* ${formData.message || 'אין הודעה'}
    `;

    const textRu = `
📩 *Новая заявка с сайта!*

👤 *Имя:* ${formData.name}
📱 *Телефон:* ${formData.phone}
📧 *Email:* ${formData.email || 'Не указан'}
💬 *Сообщение:* ${formData.message || 'Нет сообщения'}
    `;

    const textEn = `
📩 *New Lead from Website!*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'Not specified'}
💬 *Message:* ${formData.message || 'No message'}
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
        toast.success(t('contact.success'));
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        toast.error(t('contact.error'));
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      toast.error(t('contact.error'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background" aria-label="Contact us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('contact.title')}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.name')} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.phone')} *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full md:w-auto"
              >
                {t('contact.send')}
              </button>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.8452728372804!2d34.5859244762784!3d31.665452639958616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502a3241bfadabf%3A0xda50889f6d4b6dc4!2sElite%20Design%20kitchens%20%26%20more!5e0!3m2!1sru!2sil!4v1769511862173!5m2!1sru!2sil"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            <div className="bg-card p-8 mt-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Elite Design kitchens & more</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">{t('contact.address')}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">{t('contact.phone.number')}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
