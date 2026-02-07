import { useLanguage } from '@/app/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Calendar, Tag } from 'lucide-react';
import type { Article } from '@/app/data/articles';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

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
              src={article.image}
              alt={article.title[language]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Header */}
          <DialogHeader className="p-6 pb-4">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                <span>{article.date}</span>
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
            <div 
              className="prose prose-slate max-w-none
                prose-headings:text-slate-900 
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-ul:my-4 prose-li:text-slate-600
              "
              dangerouslySetInnerHTML={{ __html: article.content[language] }}
            />
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
