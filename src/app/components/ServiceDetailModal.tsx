import { useLanguage } from '@/app/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import { CheckCircle2, LucideIcon } from 'lucide-react';

interface ServiceDetail {
  de: string;
  ru: string;
}

interface ServiceData {
  de: string;
  ru: string;
  description: ServiceDetail;
  services: ServiceDetail[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceData: ServiceData | null;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export function ServiceDetailModal({ 
  isOpen, 
  onClose, 
  serviceData, 
  icon: Icon,
  color,
  bgColor
}: ServiceDetailModalProps) {
  const { language } = useLanguage();

  if (!serviceData) return null;

  const currentLang = language as 'de' | 'ru';
  const title = serviceData[currentLang];
  const description = serviceData.description[currentLang];
  const services = serviceData.services;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className={`${bgColor} ${color} w-14 h-14 rounded-lg flex items-center justify-center`}>
              <Icon className="size-7" />
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              {title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-slate-600 text-lg leading-relaxed">
            {description}
          </p>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              {currentLang === 'de' ? 'Unsere Leistungen:' : 'Наши услуги:'}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className={`${color} size-5 flex-shrink-0 mt-0.5`} />
                  <span className="text-slate-700">{service[currentLang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
