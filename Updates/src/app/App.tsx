import { useState } from 'react';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/components/HomePage';
import { ArticlesPage } from '@/app/components/ArticlesPage';
import { AboutPage } from '@/app/components/AboutPage';
import { ContactPage } from '@/app/components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'articles':
        return <ArticlesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer onNavigate={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}