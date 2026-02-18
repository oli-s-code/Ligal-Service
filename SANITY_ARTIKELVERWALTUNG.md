# Sanity CMS - Artikelverwaltung Anleitung

## 📋 Übersicht

Diese Anleitung zeigt dir, wie du Artikel über Sanity CMS erstellen und bearbeiten kannst.

**Wichtige Informationen:**
- **Sanity Projekt:** Ligal-Service
- **Project ID:** `5etci1bz`
- **Dataset:** `production`
- **Sanity Dashboard:** https://www.sanity.io/manage/personal/project/5etci1bz

---

## 🚀 Methode 1: Per API Script (Empfohlen - funktioniert garantiert!)

Das Sanity Web Studio hat aktuell Verbindungsprobleme (Firmen-Firewall/Permissions). Daher nutzen wir die **API-Methode**, die perfekt funktioniert!

### ✏️ Neuen Artikel erstellen

**Schritt 1:** Erstelle eine Datei `add-article.ts` im Projektordner

**Schritt 2:** Kopiere folgenden Code und passe die Inhalte an:

```typescript
import { createClient } from '@sanity/client';
import { config } from 'dotenv';

config();

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function createArticle() {
  try {
    // 1. Kategorie-ID finden
    const category = await client.fetch(
      `*[_type == "category" && slug.current == "business"][0]`
    );
    
    if (!category) {
      console.error('❌ Kategorie nicht gefunden');
      return;
    }

    // 2. HIER DEINE INHALTE ANPASSEN:
    const newArticle = {
      _type: 'article',
      
      // Titel (PFLICHT - auf Deutsch und Russisch)
      title: {
        de: 'Neue Regelungen im russischen Arbeitsrecht 2026',
        ru: 'Новые правила российского трудового права 2026',
      },
      
      // Slug (URL-Name - nur Kleinbuchstaben, Bindestriche)
      slug: {
        _type: 'slug',
        current: 'neue-regelungen-arbeitsrecht-2026',
      },
      
      // Kurzbeschreibung (PFLICHT - 2-3 Sätze)
      excerpt: {
        de: 'Überblick über die wichtigsten Änderungen im russischen Arbeitsrecht, die 2026 in Kraft treten. Erfahren Sie, was Arbeitgeber und Arbeitnehmer beachten müssen.',
        ru: 'Обзор важнейших изменений российского трудового права, вступающих в силу в 2026 году. Узнайте, что должны учитывать работодатели и работники.',
      },
      
      // Hauptinhalt (kann mehrere Absätze haben)
      content: {
        de: [
          {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: 'Einleitung' }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              { 
                _type: 'span', 
                text: 'Das russische Arbeitsrecht wird 2026 wichtige Änderungen erfahren...' 
              }
            ],
          },
          {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: 'Wichtigste Änderungen' }],
          },
          {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: 'Änderung 1: ...' }],
          },
          {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: 'Änderung 2: ...' }],
          },
        ],
        ru: [
          {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: 'Введение' }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              { 
                _type: 'span', 
                text: 'Российское трудовое право претерпит важные изменения в 2026 году...' 
              }
            ],
          },
          {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: 'Основные изменения' }],
          },
          {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: 'Изменение 1: ...' }],
          },
          {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: 'Изменение 2: ...' }],
          },
        ],
      },
      
      // Kategorie (wähle eine: business, property, international, family, tax, general)
      category: {
        _type: 'reference',
        _ref: category._id,
      },
      
      // Optional: Autor und Lesezeit
      author: 'Dr. Maxim Petrov',
      readTime: 7,
      publishedAt: new Date().toISOString(),
    };

    // 3. Artikel erstellen
    const result = await client.create(newArticle);
    console.log('✅ Artikel erstellt:', result.title.de);
    console.log('📝 Artikel-ID:', result._id);
    console.log('🔗 URL wird sein: /articles/' + result.slug.current);
  } catch (error) {
    console.error('❌ Fehler beim Erstellen:', error);
  }
}

createArticle();
```

**Schritt 3:** Führe das Script aus:

```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED='0'; npx -y tsx add-article.ts
```

**Schritt 4:** Artikel ist sofort live! Refresh die Website um ihn zu sehen.

### 📝 Kategorien für `category` Parameter

Ändere die Kategorie-Abfrage je nach gewünschter Kategorie:

| Kategorie | Slug-Wert in Zeile 16 |
|-----------|----------------------|
| Business | `"business"` |
| Immobilien | `"property"` |
| International | `"international"` |
| Familie | `"family"` |
| Steuern | `"tax"` |
| Allgemein | `"general"` |

**Beispiel:** Für Immobilien-Artikel ändere Zeile 16 zu:
```typescript
`*[_type == "category" && slug.current == "property"][0]`
```

### 🔧 Bestehenden Artikel bearbeiten

**Erstelle:** `update-article.ts`

```typescript
import { createClient } from '@sanity/client';
import { config } from 'dotenv';

config();

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function updateArticle() {
  try {
    // 1. Artikel finden (per Slug)
    const article = await client.fetch(
      `*[_type == "article" && slug.current == "grundlagen-russisches-vertragsrecht"][0]`
    );

    if (!article) {
      console.error('❌ Artikel nicht gefunden');
      return;
    }

    console.log('📝 Gefundener Artikel:', article.title.de);

    // 2. Änderungen durchführen
    const result = await client
      .patch(article._id)
      .set({
        'title.de': 'NEUER TITEL auf Deutsch',
        'title.ru': 'НОВЫЙ ЗАГОЛОВОК на русском',
        readTime: 10,
        author: 'Dr. Maxim Petrov',
      })
      .commit();

    console.log('✅ Artikel aktualisiert:', result.title.de);
  } catch (error) {
    console.error('❌ Fehler:', error);
  }
}

updateArticle();
```

**Ausführen:**
```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED='0'; npx -y tsx update-article.ts
```

### 🗑️ Artikel löschen

**Erstelle:** `delete-article.ts`

```typescript
import { createClient } from '@sanity/client';
import { config } from 'dotenv';

config();

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function deleteArticle() {
  try {
    const article = await client.fetch(
      `*[_type == "article" && slug.current == "artikel-slug-hier"][0]`
    );

    if (!article) {
      console.error('❌ Artikel nicht gefunden');
      return;
    }

    console.log('⚠️ Lösche Artikel:', article.title.de);
    
    await client.delete(article._id);
    console.log('✅ Artikel gelöscht');
  } catch (error) {
    console.error('❌ Fehler:', error);
  }
}

deleteArticle();
```

---

## 🌐 Methode 2: Sanity Web Studio (Aktuell nicht verfügbar)

> ⚠️ **Hinweis:** Das Sanity Web Studio hat aktuell Verbindungsprobleme aufgrund von Firmen-Firewall-Einstellungen und Berechtigungen. Nutze stattdessen die **API-Methode** (Methode 1) - diese funktioniert zuverlässig!

Falls das Studio später verfügbar ist:

### Zugriff auf das Studio

1. **Öffne das Sanity Dashboard:**
   ```
   https://www.sanity.io/manage/personal/project/5etci1bz
   ```

2. **Klicke auf "Open Sanity Studio"** (blauer Button oben rechts)

3. **Alternative:** Direkter Link zum Studio
   ```
   https://www.sanity.io/manage/personal/project/5etci1bz/desk
   ```

### ✏️ Neuen Artikel erstellen (Studio)

1. **Im Studio:** Klicke auf **"Articles"** in der linken Navigation

2. **Klicke auf den "+" Button** oder "Create new article"

3. **Fülle die Felder aus:**

   **Titel (Deutsch)** *(Pflichtfeld)*
   ```
   Beispiel: Neue Regelungen im russischen Arbeitsrecht 2026
   ```

   **Titel (Russisch)** *(Pflichtfeld)*
   ```
   Beispiel: Новые правила российского трудового права 2026
   ```

   **Slug** *(Wird automatisch aus dem deutschen Titel generiert)*
   ```
   Beispiel: neue-regelungen-im-russischen-arbeitsrecht-2026
   ```
   > **Hinweis:** Der Slug wird zur URL: `/articles/neue-regelungen-im-russischen-arbeitsrecht-2026`

   **Excerpt - Deutsch** *(Pflichtfeld)*
   ```
   Kurzbeschreibung (2-3 Sätze) für die Artikelübersicht auf Deutsch
   ```

   **Excerpt - Russisch** *(Pflichtfeld)*
   ```
   Kurzbeschreibung (2-3 Sätze) für die Artikelübersicht auf Russisch
   ```

   **Content - Deutsch** *(Hauptinhalt)*
   - Klicke in das Textfeld
   - Nutze die Formatierungsoptionen:
     - **Normal Text:** Für Fließtext
     - **H2, H3, H4:** Für Überschriften
     - **Fett/Kursiv:** Text markieren und Button klicken
     - **Listen:** Aufzählungen und nummerierte Listen
     - **Zitate:** Für wichtige Zitate
   
   > **Portable Text Editor:** Der Editor funktioniert ähnlich wie Word/Google Docs

   **Content - Russisch** *(Hauptinhalt)*
   - Gleicher Inhalt wie Deutsch, aber auf Russisch übersetzt

   **Category** *(Pflichtfeld)*
   - Klicke auf "Select" und wähle eine Kategorie:
     - **Business** (business)
     - **Immobilien** (property)
     - **International** (international)
     - **Familie** (family)
     - **Steuern** (tax)
     - **Allgemein** (general)

   **Author** *(Optional)*
   ```
   Beispiel: Dr. Maxim Petrov
   ```

   **Read Time** *(Optional)*
   ```
   Geschätzte Lesezeit in Minuten, z.B.: 5
   ```

   **Published At** *(Optional)*
   - Standardmäßig: Aktuelles Datum
   - Kannst du ändern für zukünftige Veröffentlichungen

4. **Speichern:**
   - Klicke **"Publish"** (grüner Button oben rechts)
   - Artikel ist sofort live auf der Website!

### 🔧 Bestehenden Artikel bearbeiten

1. **Im Studio:** Klicke auf **"Articles"** in der linken Navigation

2. **Wähle den Artikel** aus der Liste

3. **Bearbeite die gewünschten Felder**

4. **Speichern:**
   - Bei kleinen Änderungen: **"Publish"** (überschreibt direkt)
   - Bei großen Änderungen: Nutze **"Review changes"** um Änderungen vorher zu sehen

5. **Der Artikel wird automatisch aktualisiert** auf der Website (nach Browser-Refresh)

### 🗑️ Artikel löschen

1. Öffne den Artikel im Studio
2. Klicke auf **"..."** (drei Punkte) oben rechts
3. Wähle **"Delete"**
4. Bestätige die Löschung

---

## 🔧 Methode 2: Per API Script (Fortgeschritten)

### Neuen Artikel per Script erstellen

**Erstelle eine Datei:** `add-article.ts`

```typescript
import { createClient } from '@sanity/client';
import { config } from 'dotenv';

// Lade Umgebungsvariablen
config();

// Sanity Client initialisieren
const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function createArticle() {
  try {
    // 1. Kategorie-ID finden (z.B. für "Business")
    const categories = await client.fetch(`*[_type == "category" && slug.current == "business"][0]`);
    
    if (!categories) {
      console.error('❌ Kategorie nicht gefunden');
      return;
    }

    // 2. Artikel erstellen
    const newArticle = {
      _type: 'article',
      title: {
        de: 'Dein Artikel Titel auf Deutsch',
        ru: 'Название вашей статьи на русском',
      },
      slug: {
        _type: 'slug',
        current: 'dein-artikel-slug',
      },
      excerpt: {
        de: 'Kurzbeschreibung auf Deutsch (2-3 Sätze)',
        ru: 'Краткое описание на русском (2-3 предложения)',
      },
      content: {
        de: [
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'Dein Artikelinhalt auf Deutsch...' }],
          },
        ],
        ru: [
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'Содержание вашей статьи на русском...' }],
          },
        ],
      },
      category: {
        _type: 'reference',
        _ref: categories._id,
      },
      author: 'Dr. Maxim Petrov',
      readTime: 5,
      publishedAt: new Date().toISOString(),
    };

    const result = await client.create(newArticle);
    console.log('✅ Artikel erstellt:', result.title.de);
    console.log('📝 ID:', result._id);
  } catch (error) {
    console.error('❌ Fehler:', error);
  }
}

createArticle();
```

**Script ausführen:**
```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED='0'; npx -y tsx add-article.ts
```

### Artikel per Script bearbeiten

**Erstelle eine Datei:** `update-article.ts`

```typescript
import { createClient } from '@sanity/client';
import { config } from 'dotenv';

config();

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function updateArticle() {
  try {
    // 1. Artikel finden (z.B. per Slug)
    const article = await client.fetch(
      `*[_type == "article" && slug.current == "dein-artikel-slug"][0]`
    );

    if (!article) {
      console.error('❌ Artikel nicht gefunden');
      return;
    }

    // 2. Artikel aktualisieren
    const result = await client
      .patch(article._id) // Artikel-ID
      .set({
        'title.de': 'Neuer Titel auf Deutsch',
        'title.ru': 'Новый заголовок на русском',
        readTime: 7, // Neue Lesezeit
      })
      .commit();

    console.log('✅ Artikel aktualisiert:', result.title.de);
  } catch (error) {
    console.error('❌ Fehler:', error);
  }
}

updateArticle();
```

**Script ausführen:**
```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED='0'; npx -y tsx update-article.ts
```

---

## 📚 Portable Text Format (für Content-Felder)

Sanity nutzt **Portable Text** für formatierte Inhalte. Hier die wichtigsten Strukturen:

### Einfacher Text-Block
```typescript
{
  _type: 'block',
  style: 'normal', // oder 'h2', 'h3', 'h4'
  children: [
    { _type: 'span', text: 'Dein Text hier' }
  ]
}
```

### Überschrift (H2)
```typescript
{
  _type: 'block',
  style: 'h2',
  children: [
    { _type: 'span', text: 'Deine Überschrift' }
  ]
}
```

### Fetter/Kursiver Text
```typescript
{
  _type: 'block',
  style: 'normal',
  children: [
    { 
      _type: 'span', 
      text: 'Dieser Text ist fett', 
      marks: ['strong'] 
    }
  ]
}
```

### Liste (Bullet Points)
```typescript
{
  _type: 'block',
  style: 'normal',
  listItem: 'bullet',
  children: [
    { _type: 'span', text: 'Listenpunkt 1' }
  ]
}
```

### Mehrere Absätze kombinieren
```typescript
content: {
  de: [
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Einleitung' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Erster Absatz...' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Zweiter Absatz...' }]
    }
  ]
}
```

---

## 🎨 HTML zu Portable Text konvertieren (falls nötig)

Falls du bestehende HTML-Inhalte hast, nutze diese Funktion:

```typescript
import { JSDOM } from 'jsdom';

function htmlToPortableText(html: string) {
  const dom = new JSDOM(html);
  const body = dom.window.document.body;
  const blocks: any[] = [];

  function processNode(node: any) {
    if (node.nodeType === 3) { // Text Node
      const text = node.textContent.trim();
      if (text) {
        return { _type: 'span', text };
      }
    }

    if (node.nodeType === 1) { // Element Node
      const tagName = node.tagName.toLowerCase();
      
      if (tagName === 'p') {
        blocks.push({
          _type: 'block',
          style: 'normal',
          children: Array.from(node.childNodes).map(processNode).filter(Boolean),
        });
      } else if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
        blocks.push({
          _type: 'block',
          style: tagName,
          children: Array.from(node.childNodes).map(processNode).filter(Boolean),
        });
      } else if (tagName === 'strong' || tagName === 'b') {
        return {
          _type: 'span',
          text: node.textContent,
          marks: ['strong'],
        };
      }
    }
  }

  Array.from(body.childNodes).forEach(processNode);
  return blocks;
}
```

---

## 🔍 Artikel abfragen (zum Testen)

**Alle Artikel anzeigen:**
```powershell
npx -y tsx -e "import {createClient} from '@sanity/client'; const c=createClient({projectId:'5etci1bz',dataset:'production',useCdn:true,apiVersion:'2024-01-01'}); c.fetch('*[_type==\"article\"]{title,slug,_id}').then(console.log)"
```

**Einzelnen Artikel finden:**
```powershell
npx -y tsx -e "import {createClient} from '@sanity/client'; const c=createClient({projectId:'5etci1bz',dataset:'production',useCdn:true,apiVersion:'2024-01-01'}); c.fetch('*[_type==\"article\" && slug.current==\"dein-slug\"][0]').then(console.log)"
```

---

## 🚀 Workflow-Empfehlung

### Für nicht-technische Benutzer:
1. ✅ **Nutze das Sanity Web Studio** (Methode 1)
   - Einfach und visuell
   - Keine Programmierung nötig
   - Live-Vorschau

### Für Entwickler:
1. ✅ **Neue Artikel:** Sanity Web Studio (schneller)
2. ✅ **Bulk-Updates:** API Scripts (effizienter für viele Artikel)
3. ✅ **Automatisierung:** Scripts mit GitHub Actions

---

## ⚠️ Wichtige Hinweise

### CORS-Konfiguration
Falls neue Origins (URLs) auf die API zugreifen sollen:

1. Gehe zu: https://www.sanity.io/manage/personal/project/5etci1bz/api/cors-origins
2. Klicke auf **"Add CORS origin"**
3. Trage die URL ein (z.B. `https://neue-domain.de`)
4. Aktiviere **"Allow credentials"**

**Bereits konfiguriert:**
- ✅ `http://localhost:5173` (Entwicklung)
- ✅ `http://rusland-recht-service.de` (Produktion)
- ✅ `http://localhost:3333` (Sanity Studio)
- ✅ `http://localhost:3344` (Sanity Studio)

### Kategorien

**Verfügbare Kategorien:**
| Deutsch | Russisch | Slug |
|---------|----------|------|
| Business | Бизнес | `business` |
| Immobilien | Недвижимость | `property` |
| International | Международное право | `international` |
| Familie | Семейное право | `family` |
| Steuern | Налоги | `tax` |
| Allgemein | Общее | `general` |

**Neue Kategorie hinzufügen:**
1. Studio → "Categories" → "Create new category"
2. Fülle Name (de/ru) und Slug aus
3. Publish

---

## 📞 Support

**Bei Problemen:**
1. Überprüfe `.env` Datei (Project ID, Dataset, Token)
2. Checke CORS-Einstellungen in Sanity
3. Browser-Cache leeren (Ctrl+Shift+R)
4. Sanity Status: https://status.sanity.io/

**Nützliche Links:**
- 📖 [Sanity Dokumentation](https://www.sanity.io/docs)
- 🎓 [Portable Text Guide](https://www.sanity.io/docs/presenting-block-text)
- 🔧 [Sanity Studio Guide](https://www.sanity.io/docs/sanity-studio)

---

✨ **Viel Erfolg beim Artikel schreiben!**
