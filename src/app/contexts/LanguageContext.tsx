import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.articles': 'Artikel',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Russisches Recht auf Deutsch',
    'hero.subtitle': 'Professionelle juristische Beratung und Übersetzungen',
    'hero.cta': 'Jetzt Kontakt aufnehmen',
    'hero.learnMore': 'Mehr erfahren',
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Kompetente Unterstützung in allen rechtlichen Angelegenheiten',
    
    'service.law.title': 'Russisches Recht',
    'service.law.desc': 'Umfassende Beratung zu russischem Recht, verständlich auf Deutsch erklärt. Wir helfen Ihnen bei allen rechtlichen Fragen.',
    
    'service.translation.title': 'Juristische Übersetzungen',
    'service.translation.desc': 'Professionelle Übersetzung juristischer Dokumente zwischen Deutsch und Russisch mit höchster Präzision.',
    
    'service.business.title': 'Geschäftsbegleitung',
    'service.business.desc': 'Begleitung bei der Abwicklung von Geschäften, Verhandlungen und Behördengängen in Russland und Deutschland.',
    
    'service.documents.title': 'Dokumentenabwicklung',
    'service.documents.desc': 'Unterstützung bei der Bearbeitung und Legalisierung von Dokumenten für internationale Angelegenheiten.',
    
    'service.consultation.title': 'Beratungen',
    'service.consultation.desc': 'Individuelle Rechtsberatung zu russischem und deutschem Recht, zugeschnitten auf Ihre Bedürfnisse.',
    
    'service.negotiations.title': 'Verhandlungsbegleitung',
    'service.negotiations.desc': 'Professionelle Begleitung bei Geschäftsverhandlungen und Behördenterminen mit Übersetzung und rechtlicher Expertise.',
    
    // Articles
    'articles.title': 'Fachartikel',
    'articles.subtitle': 'Aktuelle Informationen zu rechtlichen Themen',
    'articles.search': 'Artikel durchsuchen...',
    'articles.allCategories': 'Alle Kategorien',
    'articles.readMore': 'Weiterlesen',
    'articles.noResults': 'Keine Artikel gefunden',
    
    // Categories
    'category.business': 'Wirtschaftsrecht',
    'category.family': 'Familienrecht',
    'category.property': 'Immobilienrecht',
    'category.tax': 'Steuerrecht',
    'category.international': 'Internationales Recht',
    'category.general': 'Allgemeines',
    
    // About
    'about.title': 'Über uns',
    'about.subtitle': 'Ihre Experten für russisches Recht',
    'about.intro.title': 'Willkommen',
    'about.intro.text': 'Russland Recht Service ist spezialisiert auf russisches Recht und juristische Übersetzungen. Mit mehrjähriger Erfahrung bieten wir professionelle Unterstützung für Privatpersonen und Unternehmen.',
    'about.expertise.title': 'Unsere Expertise',
    'about.expertise.text': 'Als ausgebildete Juristen mit Schwerpunkt auf russischem und internationalem Recht verstehen wir die Herausforderungen, die sich bei grenzüberschreitenden rechtlichen Angelegenheiten ergeben. Wir unterstützen Sie mit fundierten Kenntnissen und persönlicher Betreuung.',
    'about.approach.title': 'Unser Ansatz',
    'about.approach.text': 'Jeder Fall ist einzigartig. Wir nehmen uns die Zeit, Ihre Situation genau zu verstehen und entwickeln maßgeschneiderte Lösungen. Dabei legen wir Wert auf transparente Kommunikation und verständliche Erklärungen komplexer Sachverhalte.',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Nehmen Sie Kontakt mit uns auf',
    'contact.info.title': 'Kontaktinformationen',
    'contact.form.title': 'Kontaktformular',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.subject': 'Betreff',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.success': 'Vielen Dank! Ihre Nachricht wurde gesendet.',
    'contact.address': 'Adresse',
    'contact.hours': 'Öffnungszeiten',
    'contact.hours.text': 'Mo-Fr: 9:00 - 18:00',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.articles': 'Статьи',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'Российское право на немецком языке',
    'hero.subtitle': 'Профессиональные юридические консультации и переводы',
    'hero.cta': 'Связаться сейчас',
    'hero.learnMore': 'Узнать больше',
    
    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Компетентная поддержка во всех правовых вопросах',
    
    'service.law.title': 'Российское право на немецком языке',
    'service.law.desc': 'Всесторонние консультации по российскому праву, понятно объясненные на немецком языке. Поможем вам во всех юридических вопросах.',
    
    'service.translation.title': 'Переводы юридических текстов',
    'service.translation.desc': 'Профессиональный перевод юридических документов между немецким и русским языками с максимальной точностью.',
    
    'service.business.title': 'Сопровождение сделок',
    'service.business.desc': 'Сопровождение при проведении сделок, переговоров и работе с государственными органами в России и Германии.',
    
    'service.documents.title': 'Помощь в оформлении документов',
    'service.documents.desc': 'Поддержка в обработке и легализации документов для международных дел.',
    
    'service.consultation.title': 'Консультации',
    'service.consultation.desc': 'Индивидуальные юридические консультации по российскому и немецкому праву, адаптированные к вашим потребностям.',
    
    'service.negotiations.title': 'Сопровождение переговоров',
    'service.negotiations.desc': 'Профессиональное сопровождение деловых переговоров и встреч с государственными органами с переводом и юридической экспертизой.',
    
    // Articles
    'articles.title': 'Статьи',
    'articles.subtitle': 'Актуальная информация по правовым темам',
    'articles.search': 'Поиск статей...',
    'articles.allCategories': 'Все категории',
    'articles.readMore': 'Читать далее',
    'articles.noResults': 'Статьи не найдены',
    
    // Categories
    'category.business': 'Хозяйственное право',
    'category.family': 'Семейное право',
    'category.property': 'Право недвижимости',
    'category.tax': 'Налоговое право',
    'category.international': 'Международное право',
    'category.general': 'Общее',
    
    // About
    'about.title': 'О нас',
    'about.subtitle': 'Ваши эксперты по российскому праву',
    'about.intro.title': 'Добро пожаловать',
    'about.intro.text': 'Russland Recht Service специализируется на российском праве и юридических переводах. С многолетним опытом мы предлагаем профессиональную поддержку для частных лиц и компаний.',
    'about.expertise.title': 'Наша экспертиза',
    'about.expertise.text': 'Как юристы со специализацией на российском и международном праве, мы понимаем проблемы, возникающие при трансграничных юридических вопросах. Поддержим вас глубокими знаниями и личным вниманием.',
    'about.approach.title': 'Наш подход',
    'about.approach.text': 'Каждый случай уникален. Мы уделяем время, чтобы точно понять вашу ситуацию и разработать индивидуальные решения. При этом ценим прозрачную коммуникацию и понятные объяснения сложных вопросов.',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.subtitle': 'Свяжитесь с нами',
    'contact.info.title': 'Контактная информация',
    'contact.form.title': 'Контактная форма',
    'contact.name': 'Имя',
    'contact.email': 'Электронная почта',
    'contact.phone': 'Телефон',
    'contact.subject': 'Тема',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить сообщение',
    'contact.success': 'Спасибо! Ваше сообщение отправлено.',
    'contact.address': 'Адрес',
    'contact.hours': 'Часы работы',
    'contact.hours.text': 'Пн-Пт: 9:00 - 18:00',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Конфиденциальность',
    'footer.imprint': 'Выходные данные',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
