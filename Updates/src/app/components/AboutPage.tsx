import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent } from '@/app/components/ui/card';
import { GraduationCap, Award, Heart, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

type DetailSection = 'expertise' | 'approach' | 'personal';

export function AboutPage() {
  const { t } = useLanguage();
  const [selectedSection, setSelectedSection] = useState<DetailSection>('expertise');

  const highlights = [
    'Über 10 Jahre Erfahrung',
    'Spezialisierung auf russisches Recht',
    'Mehrsprachige Beratung',
    'Persönliche Betreuung',
  ];

  const detailSections = {
    expertise: {
      title: t('about.expertise.title'),
      content: (
        <>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              {t('about.expertise.title')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.expertise.text')}
            </p>
            <p className="text-slate-600 leading-relaxed">
              Mit meiner langjährigen Erfahrung in beiden Rechtssystemen biete ich maßgeschneiderte Lösungen für komplexe grenzüberschreitende Rechtsfragen. Meine Mandanten schätzen die klare Kommunikation und die praxisnahen Lösungsansätze.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Qualifikationen & Zertifikate
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  Staatsexamen in Rechtswissenschaften, Moskauer Staatliche Universität
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  Master of Laws (LL.M.) in Internationalem Wirtschaftsrecht, Universität Köln
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  Zertifizierte Übersetzerin für juristische Fachsprache (Deutsch-Russisch)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  Mitglied der Deutsch-Russischen Juristenvereinigung
                </span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    approach: {
      title: t('about.approach.title'),
      content: (
        <>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              {t('about.approach.title')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.approach.text')}
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ich verstehe, dass rechtliche Angelegenheiten oft komplex und herausfordernd sein können. Deshalb setze ich auf eine persönliche, lösungsorientierte Herangehensweise, die Ihre individuellen Bedürfnisse in den Mittelpunkt stellt.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Meine Arbeitsweise
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  <strong>Gründliche Analyse:</strong> Ich nehme mir die Zeit, Ihre Situation umfassend zu verstehen und alle relevanten Aspekte zu berücksichtigen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  <strong>Klare Kommunikation:</strong> Komplexe rechtliche Sachverhalte erkläre ich in verständlicher Sprache, ohne Fachjargon.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  <strong>Strategische Planung:</strong> Gemeinsam entwickeln wir einen maßgeschneiderten Lösungsansatz, der Ihre Ziele erreicht.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  <strong>Transparenz:</strong> Sie werden über jeden Schritt informiert und können jederzeit Fragen stellen.
                </span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    personal: {
      title: 'Persönliche Betreuung',
      content: (
        <>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Persönliche Betreuung
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Ihre rechtlichen Angelegenheiten liegen mir am Herzen. Ich biete individuelle Lösungen mit persönlicher Note und höchster Diskretion.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Als Ihre persönliche Rechtsberaterin begleite ich Sie durch alle Phasen Ihres Anliegens. Sie erhalten nicht nur juristische Expertise, sondern auch eine vertrauensvolle Partnerin, die Ihre Interessen mit Engagement vertritt.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Was Sie erwarten können
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  <strong>Direkte Ansprechpartnerin:</strong> Sie kommunizieren direkt mit mir, nicht mit wechselnden Mitarbeitern.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  <strong>Flexible Terminvereinbarung:</strong> Ich richte mich nach Ihrem Zeitplan und biete auch Termine außerhalb der üblichen Geschäftszeiten an.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  <strong>Vertraulichkeit:</strong> Absolute Diskretion ist selbstverständlich. Ihre Informationen sind bei mir sicher.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  <strong>Langfristige Partnerschaft:</strong> Ich sehe mich als Ihre verlässliche Begleiterin für alle rechtlichen Fragen – heute und in Zukunft.
                </span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-indigo-100">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644921070049-667e46fd5802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXNpYW4lMjBidXNpbmVzc3dvbWFuJTIwb2ZmaWNlfGVufDF8fHx8MTc2OTM1NzAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Anna Petrova"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t('about.intro.title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('about.intro.text')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-indigo-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card 
            className={`border-slate-200 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedSection === 'expertise' ? 'ring-2 ring-indigo-500 shadow-lg' : ''
            }`}
            onClick={() => setSelectedSection('expertise')}
          >
            <CardContent className="p-8 space-y-4 text-center">
              <div className="bg-indigo-50 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="size-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {t('about.expertise.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t('about.expertise.text')}
              </p>
            </CardContent>
          </Card>

          <Card 
            className={`border-slate-200 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedSection === 'approach' ? 'ring-2 ring-purple-500 shadow-lg' : ''
            }`}
            onClick={() => setSelectedSection('approach')}
          >
            <CardContent className="p-8 space-y-4 text-center">
              <div className="bg-purple-50 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="size-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {t('about.approach.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t('about.approach.text')}
              </p>
            </CardContent>
          </Card>

          <Card 
            className={`border-slate-200 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedSection === 'personal' ? 'ring-2 ring-pink-500 shadow-lg' : ''
            }`}
            onClick={() => setSelectedSection('personal')}
          >
            <CardContent className="p-8 space-y-4 text-center">
              <div className="bg-pink-50 text-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="size-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Persönliche Betreuung
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ihre rechtlichen Angelegenheiten liegen mir am Herzen. Ich biete individuelle Lösungen mit persönlicher Note und höchster Diskretion.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-200 bg-gradient-to-br from-white to-indigo-50/30">
            <CardContent className="p-8 md:p-12 space-y-8">
              {detailSections[selectedSection].content}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}