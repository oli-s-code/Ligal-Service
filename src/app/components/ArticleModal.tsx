import { useLanguage } from '@/app/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Calendar, Tag } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import type { SanityArticle } from '@/types/sanity';

interface ArticleModalProps {
  article: SanityArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

// Portable Text Components für Styling
const portableTextComponents = {
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-900">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-900">{children}</h4>,
    normal: ({ children }: any) => <p className="text-slate-600 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-6 text-slate-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside my-4 space-y-2 text-slate-600">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside my-4 space-y-2 text-slate-600">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-slate-600">{children}</li>,
    number: ({ children }: any) => <li className="text-slate-600">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-slate-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-indigo-600">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a 
        href={value?.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-indigo-700 underline"
      >
        {children}
      </a>
    ),
  },
};

export function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  const { language, t } = useLanguage();

  if (!article) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0">
        <div className="relative">
          {/* Article Image */}
          <div className="aspect-[21/9] overflow-hidden rounded-t-lg">
            <img
              src={article.image ? urlFor(article.image).width(1200).height(500).url() : 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f'}
              alt={article.title[language]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Header */}
          <DialogHeader className="p-6 pb-4">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                <span>{new Date(article.date).toLocaleDateString(language === 'de' ? 'de-DE' : 'ru-RU')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="size-4" />
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">
                  {t(`category.${article.category}`)}
                </span>
              </div>
            </div>
            <DialogTitle className="text-3xl font-bold text-slate-900 leading-tight">
              {article.title[language]}
            </DialogTitle>
          </DialogHeader>

          {/* Content */}
          <ScrollArea className="h-[calc(90vh-300px)] px-6 pb-6">
            <div className="prose prose-slate max-w-none">
              <PortableText 
                value={article.content[language]} 
                components={portableTextComponents}
              />
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
