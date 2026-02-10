import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Menu, X, Scale } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'articles', label: t('nav.articles') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-xl font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
          >
            <Scale className="size-8 text-indigo-600" />
            <span className="hidden sm:inline">Russland Recht Service</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  currentPage === item.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-[22px]'
                    : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l">
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'de'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'ru'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                RU
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="size-6 text-slate-700" />
            ) : (
              <Menu className="size-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-3 border-t">
              <button
                onClick={() => setLanguage('de')}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  language === 'de'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                Deutsch
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  language === 'ru'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                Русский
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
