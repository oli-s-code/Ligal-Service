import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'info@rechtsberatung-petrova.de',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+49 30 1234567',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Unter den Linden 10, 10117 Berlin',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: t('contact.hours.text'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-indigo-100">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {t('contact.info.title')}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className={`${item.bgColor} ${item.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="size-6" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">
                            {item.label}
                          </p>
                          <p className="text-slate-900 font-medium">
                            {item.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="border-slate-200 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <MapPin className="size-16 text-indigo-400" />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {t('contact.form.title')}
                </h2>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="bg-green-50 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      {t('contact.success')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.name')} *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Max Mustermann"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.email')} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="max@beispiel.de"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.phone')}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49 30 1234567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('contact.subject')} *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Beratung zu russischem Vertragsrecht"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.message')} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ihre Nachricht..."
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Send className="mr-2 size-4" />
                      {t('contact.send')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
