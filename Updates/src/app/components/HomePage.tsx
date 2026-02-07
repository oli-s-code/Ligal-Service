import { useLanguage } from '@/app/contexts/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { 
  Scale, 
  FileText, 
  Handshake, 
  FileCheck, 
  MessageSquare, 
  Users,
  ArrowRight,
  CheckCircle2 
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scale,
      titleKey: 'service.law.title',
      descKey: 'service.law.desc',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: FileText,
      titleKey: 'service.translation.title',
      descKey: 'service.translation.desc',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Handshake,
      titleKey: 'service.business.title',
      descKey: 'service.business.desc',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: FileCheck,
      titleKey: 'service.documents.title',
      descKey: 'service.documents.desc',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: MessageSquare,
      titleKey: 'service.consultation.title',
      descKey: 'service.consultation.desc',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Users,
      titleKey: 'service.negotiations.title',
      descKey: 'service.negotiations.desc',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-100">
                <CheckCircle2 className="size-4 text-indigo-600" />
                <span className="text-sm font-medium text-slate-700">
                  {t('hero.subtitle')}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('about')}
                  className="border-slate-300"
                >
                  {t('hero.learnMore')}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMHdvbWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTM1NzAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional Legal Services"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-indigo-200"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`${service.bgColor} ${service.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => onNavigate('contact')}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('hero.subtitle')}
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            {t('services.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-indigo-600 hover:bg-slate-50"
            >
              {t('hero.cta')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('articles')}
              className="border-white text-white hover:bg-white/10"
            >
              {t('nav.articles')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}