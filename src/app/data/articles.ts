export interface Article {
  id: number;
  title: { de: string; ru: string };
  excerpt: { de: string; ru: string };
  content: { de: string; ru: string };
  category: string;
  date: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: {
      de: 'Grundlagen des russischen Vertragsrechts',
      ru: 'Основы договорного права России',
    },
    excerpt: {
      de: 'Ein umfassender Überblick über die wichtigsten Prinzipien und Regelungen im russischen Vertragsrecht für internationale Geschäfte.',
      ru: 'Всеобъемлющий обзор ключевых принципов и положений российского договорного права для международного бизнеса.',
    },
    content: {
      de: `
        <h2>Einführung in das russische Vertragsrecht</h2>
        <p>Das russische Vertragsrecht basiert auf dem Zivilgesetzbuch der Russischen Föderation (GK RF) und bildet die Grundlage für alle geschäftlichen Transaktionen im Land. Für internationale Unternehmen ist es essentiell, die grundlegenden Prinzipien zu verstehen.</p>
        
        <h3>Vertragsfreiheit und ihre Grenzen</h3>
        <p>Das russische Recht kennt grundsätzlich die Vertragsfreiheit. Die Parteien können den Inhalt ihrer Verträge frei bestimmen, solange sie nicht gegen zwingendes Recht verstoßen. Besonders wichtig sind dabei die Regelungen zum Schutz schwächerer Vertragsparteien.</p>
        
        <h3>Formvorschriften</h3>
        <p>In Russland gelten strenge Formvorschriften für bestimmte Vertragsarten. Grundstücksgeschäfte müssen beispielsweise notariell beurkundet werden. Ein Verstoß gegen Formvorschriften kann zur Nichtigkeit des Vertrages führen.</p>
        
        <h3>Vertragserfüllung und Haftung</h3>
        <p>Das russische Recht kennt verschiedene Arten der Haftung bei Vertragsverletzungen. Die Verschuldenshaftung ist dabei der Regelfall, wobei auch eine verschuldensunabhängige Haftung möglich ist.</p>
        
        <h3>Praktische Tipps für Unternehmen</h3>
        <p>Bei grenzüberschreitenden Verträgen empfiehlt sich die Einschaltung eines spezialisierten Rechtsberaters. Besondere Aufmerksamkeit sollte der Wahl des anwendbaren Rechts und des Gerichtsstands gewidmet werden.</p>
      `,
      ru: `
        <h2>Введение в российское договорное право</h2>
        <p>Российское договорное право основано на Гражданском кодексе Российской Федерации (ГК РФ) и составляет основу всех коммерческих сделок в стране. Для международных компаний важно понимать основные принципы.</p>
        
        <h3>Свобода договора и её пределы</h3>
        <p>Российское право признает принцип свободы договора. Стороны могут свободно определять содержание своих договоров, если это не противоречит императивным нормам права. Особенно важны положения о защите более слабой стороны договора.</p>
        
        <h3>Требования к форме</h3>
        <p>В России действуют строгие требования к форме для определенных видов договоров. Сделки с недвижимостью, например, должны быть нотариально удостоверены. Несоблюдение формы может привести к недействительности договора.</p>
        
        <h3>Исполнение договора и ответственность</h3>
        <p>Российское право предусматривает различные виды ответственности за нарушение договора. Презумпция вины является общим правилом, хотя возможна и безвиновная ответственность.</p>
        
        <h3>Практические советы для компаний</h3>
        <p>При заключении трансграничных договоров рекомендуется привлечение специализированного юридического консультанта. Особое внимание следует уделить выбору применимого права и подсудности.</p>
      `,
    },
    category: 'business',
    date: '15.01.2026',
    image: 'https://images.unsplash.com/photo-1617118601652-3ec3aeaa0e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsZWdhbCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkyNjQ1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: {
      de: 'Immobilienerwerb in Russland für Ausländer',
      ru: 'Приобретение недвижимости в России иностранцами',
    },
    excerpt: {
      de: 'Wichtige rechtliche Aspekte und Verfahren beim Kauf von Immobilien in Russland durch ausländische Investoren.',
      ru: 'Важные правовые аспекты и процедуры при покупке недвижимости в России иностранными инвесторами.',
    },
    content: {
      de: `
        <h2>Rechtliche Rahmenbedingungen</h2>
        <p>Der Erwerb von Immobilien in Russland durch ausländische Personen und Unternehmen ist grundsätzlich möglich, unterliegt jedoch bestimmten Einschränkungen und Besonderheiten.</p>
        
        <h3>Beschränkungen für Ausländer</h3>
        <p>Ausländer dürfen in Russland keine Grundstücke in Grenzzonen und anderen besonders geschützten Gebieten erwerben. Der Erwerb von landwirtschaftlichen Flächen ist ebenfalls eingeschränkt. Wohnimmobilien können hingegen ohne besondere Einschränkungen erworben werden.</p>
        
        <h3>Der Kaufprozess</h3>
        <p>Der Immobilienkauf in Russland erfordert mehrere Schritte: Due Diligence, Kaufvertrag, notarielle Beurkundung und Eintragung ins Grundbuch. Jeder dieser Schritte hat seine eigenen rechtlichen Anforderungen.</p>
        
        <h3>Steuerliche Aspekte</h3>
        <p>Beim Immobilienkauf fallen verschiedene Steuern und Gebühren an. Die wichtigsten sind die Grunderwerbsteuer und die jährliche Grundsteuer. Ausländische Käufer sollten auch die steuerlichen Auswirkungen in ihrem Heimatland berücksichtigen.</p>
        
        <h3>Empfehlungen</h3>
        <p>Eine gründliche rechtliche und technische Prüfung der Immobilie ist unerlässlich. Die Zusammenarbeit mit erfahrenen lokalen Rechtsberatern und Notaren kann viele Probleme vermeiden helfen.</p>
      `,
      ru: `
        <h2>Правовые рамки</h2>
        <p>Приобретение недвижимости в России иностранными лицами и компаниями в принципе возможно, но имеет определенные ограничения и особенности.</p>
        
        <h3>Ограничения для иностранцев</h3>
        <p>Иностранцы не могут приобретать земельные участки в приграничных зонах и других особо охраняемых территориях. Приобретение сельскохозяйственных земель также ограничено. Жилую недвижимость можно приобретать без особых ограничений.</p>
        
        <h3>Процесс покупки</h3>
        <p>Покупка недвижимости в России требует нескольких шагов: due diligence, договор купли-продажи, нотариальное удостоверение и регистрация в Росреестре. Каждый из этих этапов имеет свои правовые требования.</p>
        
        <h3>Налоговые аспекты</h3>
        <p>При покупке недвижимости взимаются различные налоги и сборы. Основными являются налог на приобретение недвижимости и ежегодный налог на имущество. Иностранным покупателям следует также учитывать налоговые последствия в своей стране.</p>
        
        <h3>Рекомендации</h3>
        <p>Тщательная юридическая и техническая проверка недвижимости обязательна. Сотрудничество с опытными местными юристами и нотариусами может помочь избежать многих проблем.</p>
      `,
    },
    category: 'property',
    date: '10.01.2026',
    image: 'https://images.unsplash.com/photo-1765020553552-6286dde23660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2OTM1NzAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: {
      de: 'Internationale Schiedsgerichtsbarkeit mit Russland',
      ru: 'Международный арбитраж с Россией',
    },
    excerpt: {
      de: 'Wie internationale Handelsstreitigkeiten mit russischen Partnern effektiv gelöst werden können.',
      ru: 'Как эффективно разрешать международные торговые споры с российскими партнерами.',
    },
    content: {
      de: `
        <h2>Schiedsgerichtsbarkeit als Alternative</h2>
        <p>Die internationale Schiedsgerichtsbarkeit bietet eine attraktive Alternative zu staatlichen Gerichten bei grenzüberschreitenden Handelsstreitigkeiten mit russischen Partnern.</p>
        
        <h3>Vorteile der Schiedsgerichtsbarkeit</h3>
        <p>Schiedsverfahren bieten mehrere Vorteile: Neutralität, Vertraulichkeit, Flexibilität im Verfahren und die Möglichkeit, Schiedsrichter mit spezialisiertem Fachwissen zu wählen. Zudem sind Schiedssprüche international besser vollstreckbar als staatliche Urteile.</p>
        
        <h3>Russisches Schiedsrecht</h3>
        <p>Russland ist Mitglied des New Yorker Übereinkommens über die Anerkennung und Vollstreckung ausländischer Schiedssprüche. Dies erleichtert die Vollstreckung von Schiedssprüchen erheblich.</p>
        
        <h3>Wahl der Schiedsinstitution</h3>
        <p>Bewährte Institutionen für deutsch-russische Streitigkeiten sind die Internationale Handelskammer (ICC), das Stockholmer Schiedsinstitut und die Schiedsinstitution der Deutsch-Russischen Außenhandelskammer.</p>
        
        <h3>Praktische Empfehlungen</h3>
        <p>Eine sorgfältig formulierte Schiedsklausel im Vertrag ist essentiell. Sie sollte den Sitz des Schiedsgerichts, die Anzahl der Schiedsrichter, das anwendbare Recht und die Verfahrenssprache regeln.</p>
      `,
      ru: `
        <h2>Арбитраж как альтернатива</h2>
        <p>Международный арбитраж предлагает привлекательную альтернативу государственным судам при трансграничных торговых спорах с российскими партнерами.</p>
        
        <h3>Преимущества арбитража</h3>
        <p>Арбитражные процедуры имеют несколько преимуществ: нейтральность, конфиденциальность, гибкость процедуры и возможность выбора арбитров со специальными знаниями. Кроме того, арбитражные решения легче исполняются на меж��ународном уровне, чем судебные решения.</p>
        
        <h3>Российское арбитражное право</h3>
        <p>Россия является участницей Нью-Йоркской конвенции о признании и приведении в исполнение иностранных арбитражных решений. Это значительно облегчает исполнение арбитражных решений.</p>
        
        <h3>Выбор арбитражного института</h3>
        <p>Проверенными институтами для германо-российских споров являются Международная торговая палата (ICC), Арбитражный институт Торговой палаты Стокгольма и Арбитражный институт при Германо-Российской внешнеторговой палате.</p>
        
        <h3>Практические рекомендации</h3>
        <p>Тщательно сформулированная арбитражная оговорка в договоре является обязательной. Она должна регулировать место арбитража, количество арбитров, применимое право и язык процедуры.</p>
      `,
    },
    category: 'international',
    date: '05.01.2026',
    image: 'https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY5MTQzNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: {
      de: 'Steuerliche Aspekte grenzüberschreitender Transaktionen',
      ru: 'Налоговые аспекты трансграничных сделок',
    },
    excerpt: {
      de: 'Steueroptimierung bei deutsch-russischen Geschäftsbeziehungen unter Berücksichtigung des Doppelbesteuerungsabkommens.',
      ru: 'Налоговая оптимизация в германо-российских деловых отношениях с учетом соглашения об избежании двойного налогообложения.',
    },
    content: {
      de: `
        <h2>Das Doppelbesteuerungsabkommen</h2>
        <p>Das Abkommen zwischen Deutschland und Russland zur Vermeidung der Doppelbesteuerung ist die zentrale Grundlage für die steuerliche Behandlung grenzüberschreitender Geschäfte.</p>
        
        <h3>Unternehmensbesteuerung</h3>
        <p>In Russland beträgt die Körperschaftsteuer grundsätzlich 20%. Deutsche Unternehmen mit Betriebsstätten in Russland unterliegen mit ihren dortigen Einkünften der russischen Besteuerung. Das DBA regelt die Anrechnung dieser Steuern in Deutschland.</p>
        
        <h3>Quellensteuer auf Dividenden und Zinsen</h3>
        <p>Auf Dividenden und Zinsen aus Russland wird eine Quellensteuer erhoben. Das DBA sieht ermäßigte Sätze vor: 5% bzw. 15% für Dividenden (abhängig von der Beteiligungshöhe) und 0% für Zinsen unter bestimmten Bedingungen.</p>
        
        <h3>Verrechnungspreise</h3>
        <p>Russland wendet strenge Regeln für Verrechnungspreise an. Transaktionen zwischen verbundenen Unternehmen müssen dem Fremdvergleichsgrundsatz entsprechen. Eine sorgfältige Dokumentation ist erforderlich.</p>
        
        <h3>Steuerplanung</h3>
        <p>Eine vorausschauende Steuerplanung unter Berücksichtigung beider Steuersysteme kann zu erheblichen Einsparungen führen. Dabei sind jedoch die Anti-Missbrauchsvorschriften beider Länder zu beachten.</p>
      `,
      ru: `
        <h2>Соглашение об избежании двойного налогообложения</h2>
        <p>Соглашение между Германией и Россией об избежании двойного налогообложения является центральной основой налогового режима трансграничных сделок.</p>
        
        <h3>Налогообложение предприятий</h3>
        <p>В России налог на прибыль организаций составляет, как правило, 20%. Немецкие компании с постоянными представительствами в России облагаются российским налогом на доходы от своей деятельности. Соглашение регулирует зачет этих налогов в Германии.</p>
        
        <h3>Налог у источника на дивиденды и проценты</h3>
        <p>На дивиденды и проценты из России взимается налог у источника. Соглашение предусматривает пониженные ставки: 5% или 15% для дивидендов (в зависимости от доли участия) и 0% для процентов при определенных условиях.</p>
        
        <h3>Трансфертное ценообразование</h3>
        <p>Россия применяет строгие правила трансфертного ценообразования. Сделки между связанными компаниями должны соответствовать принципу "вытянутой руки". Требуется тщательная документация.</p>
        
        <h3>Налоговое планирование</h3>
        <p>Упреждающее налоговое планирование с учетом обеих налоговых систем может привести к значительной экономии. При этом необходимо соблюдать антиуклонительные положения обеих стран.</p>
      `,
    },
    category: 'tax',
    date: '28.12.2025',
    image: 'https://images.unsplash.com/photo-1647900964117-e4c21a593bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwd29ya2luZyUyMGRlc2t8ZW58MXx8fHwxNzY5MzU3MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    title: {
      de: 'Familienrecht: Internationale Ehen und Scheidungen',
      ru: 'Семейное право: международные браки и разводы',
    },
    excerpt: {
      de: 'Rechtliche Herausforderungen und Lösungen bei binationalen Ehen zwischen Deutschland und Russland.',
      ru: 'Правовые вызовы и решения при бинациональных браках между Германией и Россией.',
    },
    content: {
      de: `
        <h2>Besonderheiten binationaler Ehen</h2>
        <p>Binationale Ehen zwischen deutschen und russischen Staatsangehörigen werfen besondere rechtliche Fragen auf, die beide Rechtssysteme betreffen.</p>
        
        <h3>Eheschließung</h3>
        <p>Eine in Russland oder Deutschland geschlossene Ehe wird im jeweils anderen Land grundsätzlich anerkannt. Wichtig ist die Beachtung der Formvorschriften des jeweiligen Landes und die spätere Registrierung im Heimatland.</p>
        
        <h3>Güterrecht</h3>
        <p>Ohne Ehevertrag gilt in Russland die gesetzliche Gütergemeinschaft, während in Deutschland der Zugewinnausgleich gilt. Ein Ehevertrag kann hier Klarheit schaffen und sollte in beiden Ländern wirksam sein.</p>
        
        <h3>Scheidung</h3>
        <p>Bei internationalen Scheidungen stellen sich Fragen nach dem anwendbaren Recht und der Zuständigkeit. Die EU-Verordnung Rom III hilft bei der Rechtswahl, jedoch ist Russland kein EU-Mitglied, was besondere Überlegungen erfordert.</p>
        
        <h3>Sorgerecht und Kindeswohl</h3>
        <p>Das Sorgerecht für gemeinsame Kinder ist besonders sensibel. Das Haager Übereinkommen über Kindesentführung gilt zwischen Deutschland und Russland und schützt Kinder vor widerrechtlichem Verbringen ins Ausland.</p>
        
        <h3>Unterhalt</h3>
        <p>Unterhaltsansprüche können in beiden Ländern geltend gemacht werden. Das Haager Übereinkommen über die internationale Geltendmachung der Unterhaltsansprüche von Kindern erleichtert die Durchsetzung.</p>
      `,
      ru: `
        <h2>Особенности бинациональных браков</h2>
        <p>Бинациональные браки между гражданами Германии и России поднимают особые правовые вопросы, касающиеся обеих правовых систем.</p>
        
        <h3>Заключение брака</h3>
        <p>Брак, заключенный в России или Германии, в принципе признается в другой стране. Важно соблюдение формальных требований соответствующей страны и последующая регистрация в стране проживания.</p>
        
        <h3>Режим имущества супругов</h3>
        <p>Без брачного договора в России действует законный режим совместной собственности супругов, а в Германии - режим раздела имущества. Брачный договор может внести ясность и должен быть действителен в обеих странах.</p>
        
        <h3>Развод</h3>
        <p>При международных разводах возникают вопросы о применимом праве и юрисдикции. Регламент ЕС Рим III помогает с выбором права, однако Россия не является членом ЕС, что требует особых соображений.</p>
        
        <h3>Опека и благополучие детей</h3>
        <p>Опека над совместными детьми особенно чувствительна. Гаагская конвенция о похищении детей действует между Германией и Россией и защищает детей от незаконного вывоза за границу.</p>
        
        <h3>Алименты</h3>
        <p>Требования об алиментах могут предъявляться в обеих странах. Гаагская конвенция о международном взыскании алиментов на детей облегчает их взыскание.</p>
      `,
    },
    category: 'family',
    date: '20.12.2025',
    image: 'https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY5MTQzNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    title: {
      de: 'Aktuelle Änderungen im russischen Gesellschaftsrecht',
      ru: 'Актуальные изменения в российском корпоративном праве',
    },
    excerpt: {
      de: 'Die neuesten gesetzlichen Änderungen und deren Auswirkungen auf ausländische Unternehmen in Russland.',
      ru: 'Последние законодательные изменения и их влияние на иностранные компании в России.',
    },
    content: {
      de: `
        <h2>Neueste Entwicklungen 2025-2026</h2>
        <p>Das russische Gesellschaftsrecht unterliegt kontinuierlichen Änderungen. Für ausländische Investoren ist es wichtig, über die aktuellen Entwicklungen informiert zu sein.</p>
        
        <h3>Digitalisierung von Gesellschaftsverfahren</h3>
        <p>Russland treibt die Digitalisierung im Gesellschaftsrecht voran. Gesellschafterversammlungen können nun leichter online abgehalten werden. Die elektronische Registrierung von Unternehmen wurde weiter vereinfacht.</p>
        
        <h3>Änderungen bei ausländischen Investitionen</h3>
        <p>In strategischen Sektoren wurden die Kontrollmechanismen für ausländische Investitionen verschärft. Bestimmte Investitionen bedürfen nun einer vorherigen Genehmigung durch staatliche Stellen.</p>
        
        <h3>Corporate Governance</h3>
        <p>Die Anforderungen an die Corporate Governance wurden erhöht. Dies betrifft insbesondere Transparenzpflichten, die Zusammensetzung von Aufsichtsgremien und Berichtspflichten.</p>
        
        <h3>Sanktionsrecht</h3>
        <p>Das Sanktionsumfeld hat erhebliche Auswirkungen auf deutsch-russische Geschäftsbeziehungen. Unternehmen müssen ihre Compliance-Systeme entsprechend anpassen und laufend aktualisieren.</p>
        
        <h3>Praktische Konsequenzen</h3>
        <p>Ausländische Unternehmen sollten ihre Gesellschaftsstrukturen und Verträge regelmäßig überprüfen und an die neuen Anforderungen anpassen. Eine enge Zusammenarbeit mit lokalen Rechtsberatern ist unverzichtbar.</p>
      `,
      ru: `
        <h2>Последние изменения 2025-2026</h2>
        <p>Российское корпоративное право постоянно меняется. Для иностранных инвесторов важно быть в курсе текущих изменений.</p>
        
        <h3>Цифровизация корпоративных процедур</h3>
        <p>Россия продвигает цифровизацию в корпоративном праве. Собрания акционеров теперь легче проводить онлайн. Электронная регистрация компаний была дополнительно упрощена.</p>
        
        <h3>Изменения в иностранных инвестициях</h3>
        <p>В стратегических секторах были усилены контрольные механизмы для иностранных инвестиций. Определенные инвестиции теперь требуют предварительного одобрения государственными органами.</p>
        
        <h3>Корпоративное управление</h3>
        <p>Требования к корпоративному управлению были повышены. Это касается, в частности, обязательств по раскрытию информации, состава наблюдательных органов и обязательств по отчетности.</p>
        
        <h3>Санкционное право</h3>
        <p>Санкционная среда имеет значительное влияние на германо-российские деловые отношения. Компании должны соответственно адаптировать свои системы комплаенс и постоянно их обновлять.</p>
        
        <h3>Практические последствия</h3>
        <p>Иностранные компании должны регулярно проверять свои корпоративные структуры и договоры и адаптировать их к новым требованиям. Тесное сотрудничество с местными юристами незаменимо.</p>
      `,
    },
    category: 'business',
    date: '15.12.2025',
    image: 'https://images.unsplash.com/photo-1768839722927-df0ef3188f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMHRyYW5zbGF0aW9ufGVufDF8fHx8MTc2OTI2NDUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];