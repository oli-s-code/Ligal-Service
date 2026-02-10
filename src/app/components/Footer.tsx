import { useLanguage } from '@/app/contexts/LanguageContext';
import { Scale } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'articles', label: t('nav.articles') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Scale className="size-8 text-indigo-400" />
              <span className="text-xl font-semibold">Russland Recht Service</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t('nav.services')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Russland Recht Service. {t('footer.rights')}.
            </p>
            <div className="flex gap-6">
              <button className="text-slate-400 hover:text-white text-sm transition-colors">
                {t('footer.privacy')}
              </button>
              <button className="text-slate-400 hover:text-white text-sm transition-colors">
                {t('footer.imprint')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
