import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Search, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { getAllArticles } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import { type SanityArticle } from '@/types/sanity';
import { ArticleModal } from '@/app/components/ArticleModal';

export function ArticlesPage() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<SanityArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articles, setArticles] = useState<SanityArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Artikel von Sanity laden
  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const data = await getAllArticles();
        setArticles(data);
        setError(null);
      } catch (err) {
        console.error('Fehler beim Laden der Artikel:', err);
        setError('Artikel konnten nicht geladen werden');
      } finally {
        setLoading(false);
      }
    }
    
    loadArticles();
  }, []);

  const categories = [
    { id: 'all', label: t('articles.allCategories') },
    { id: 'business', label: t('category.business') },
    { id: 'family', label: t('category.family') },
    { id: 'property', label: t('category.property') },
    { id: 'tax', label: t('category.tax') },
    { id: 'international', label: t('category.international') },
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch = 
        article.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt[language].toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, language, articles]);

  const handleReadMore = (article: SanityArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('articles.title')}
          </h1>
          <p className="text-xl text-indigo-100">
            {t('articles.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <Input
              type="text"
              placeholder={t('articles.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-indigo-600' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="size-12 animate-spin text-indigo-600" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <div className="text-red-400 mb-4">
              <Search className="size-16 mx-auto" />
            </div>
            <p className="text-xl text-red-600 mb-4">{error}</p>
            <p className="text-slate-600">
              {language === 'de' 
                ? 'Bitte überprüfe deine Sanity-Konfiguration oder erstelle Artikel im Sanity Studio.' 
                : 'Пожалуйста, проверьте конфигурацию Sanity или создайте статьи в Sanity Studio.'}
            </p>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && !error && filteredArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card 
                key={article._id} 
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-slate-200"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image ? urlFor(article.image).width(600).height(400).url() : 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f'}
                    alt={article.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="size-4" />
                    <span>{new Date(article.date).toLocaleDateString(language === 'de' ? 'de-DE' : 'ru-RU')}</span>
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">
                      {t(`category.${article.category}`)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {article.title[language]}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {article.excerpt[language]}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group/btn px-0 text-indigo-600 hover:text-indigo-700"
                    onClick={() => handleReadMore(article)}
                  >
                    {t('articles.readMore')}
                    <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : !loading && !error ? (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <Search className="size-16 mx-auto" />
            </div>
            <p className="text-xl text-slate-600 mb-2">
              {t('articles.noResults')}
            </p>
            {articles.length === 0 && (
              <p className="text-sm text-slate-500 mt-4">
                {language === 'de' 
                  ? 'Noch keine Artikel vorhanden. Erstelle welche im Sanity Studio!' 
                  : 'Статьи пока отсутствуют. Создайте их в Sanity Studio!'}
              </p>
            )}
          </div>
        ) : null}
      </div>

      {/* Article Modal */}
      <ArticleModal 
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}