import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import { JSDOM } from 'jsdom';

config();

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

// HTML zu Portable Text konvertieren (automatisch)
function htmlToPortableText(html: string) {
  const dom = new JSDOM(html);
  const body = dom.window.document.body;
  const blocks: any[] = [];

  function processElement(element: any): any {
    const tagName = element.tagName?.toLowerCase();

    if (tagName === 'p') {
      return {
        _type: 'block',
        style: 'normal',
        children: processChildren(element),
      };
    }

    if (tagName === 'h2') {
      return {
        _type: 'block',
        style: 'h2',
        children: processChildren(element),
      };
    }

    if (tagName === 'h3') {
      return {
        _type: 'block',
        style: 'h3',
        children: processChildren(element),
      };
    }

    if (tagName === 'h4') {
      return {
        _type: 'block',
        style: 'h4',
        children: processChildren(element),
      };
    }

    if (tagName === 'ul') {
      const items: any[] = [];
      element.querySelectorAll('li').forEach((li: any) => {
        items.push({
          _type: 'block',
          style: 'normal',
          listItem: 'bullet',
          children: [{ _type: 'span', text: li.textContent.trim() }],
        });
      });
      return items;
    }

    if (tagName === 'ol') {
      const items: any[] = [];
      element.querySelectorAll('li').forEach((li: any) => {
        items.push({
          _type: 'block',
          style: 'normal',
          listItem: 'number',
          children: [{ _type: 'span', text: li.textContent.trim() }],
        });
      });
      return items;
    }

    return null;
  }

  function processChildren(element: any): any[] {
    const children: any[] = [];
    
    element.childNodes.forEach((node: any) => {
      if (node.nodeType === 3) { // Text node
        const text = node.textContent.trim();
        if (text) {
          children.push({ _type: 'span', text });
        }
      } else if (node.nodeType === 1) { // Element node
        const tagName = node.tagName.toLowerCase();
        const text = node.textContent.trim();
        
        if (tagName === 'strong' || tagName === 'b') {
          children.push({ _type: 'span', text, marks: ['strong'] });
        } else if (tagName === 'em' || tagName === 'i') {
          children.push({ _type: 'span', text, marks: ['em'] });
        } else {
          if (text) {
            children.push({ _type: 'span', text });
          }
        }
      }
    });

    return children.length > 0 ? children : [{ _type: 'span', text: '' }];
  }

  Array.from(body.children).forEach((child: any) => {
    const result = processElement(child);
    if (Array.isArray(result)) {
      blocks.push(...result);
    } else if (result) {
      blocks.push(result);
    }
  });

  return blocks.length > 0 ? blocks : [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: html }],
    },
  ];
}

// Bild von URL hochladen zu Sanity
async function uploadImageFromURL(imageUrl: string, title: string): Promise<string> {
  try {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.jpg`,
    });
    return asset._id;
  } catch (error) {
    console.error(`    ⚠️  Fehler beim Hochladen des Bildes: ${error}`);
    throw error;
  }
}

async function uploadFromCSV() {
  try {
    console.log('📂 Lese CSV-Datei...');
    const csvContent = readFileSync('./artikel-vorlage.csv', 'utf-8');
    
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      bom: true, // UTF-8 BOM support
    });

    console.log(`📊 ${records.length} Artikel gefunden in CSV\n`);

    // SCHRITT 1: Alle bestehenden Artikel löschen
    console.log('🗑️  LÖSCHE alle bestehenden Artikel...');
    const existingArticles = await client.fetch(`*[_type == "article"]{ _id, title }`);
    
    if (existingArticles.length > 0) {
      console.log(`   Gefunden: ${existingArticles.length} Artikel`);
      
      for (const article of existingArticles) {
        await client.delete(article._id);
        console.log(`   ✓ Gelöscht: ${article.title.de}`);
      }
      
      console.log(`✅ ${existingArticles.length} Artikel gelöscht\n`);
    } else {
      console.log('   Keine bestehenden Artikel gefunden\n');
    }

    // SCHRITT 2: Alle Artikel aus CSV hochladen
    console.log('📤 LADE neue Artikel hoch...\n');

    for (const [index, row] of records.entries()) {
      try {
        console.log(`[${index + 1}/${records.length}] Erstelle: ${row.Titel_Deutsch}`);

        // Kategorie finden
        const category = await client.fetch(
          `*[_type == "category" && slug.current == "${row.Kategorie}"][0]`
        );

        if (!category) {
          console.error(`  ❌ Kategorie "${row.Kategorie}" nicht gefunden!`);
          console.log('  💡 Verfügbare Kategorien: business, property, international, family, tax, general');
          continue;
        }

        // HTML zu Portable Text konvertieren
        const contentDE = htmlToPortableText(row.Inhalt_Deutsch);
        const contentRU = htmlToPortableText(row.Inhalt_Russisch);

        // Artikel erstellen
        const newArticle: any = {
          _type: 'article',
          title: {
            de: row.Titel_Deutsch,
            ru: row.Titel_Russisch,
          },
          slug: {
            _type: 'slug',
            current: row.URL_Slug,
          },
          excerpt: {
            de: row.Kurzbeschreibung_Deutsch,
            ru: row.Kurzbeschreibung_Russisch,
          },
          content: {
            de: contentDE,
            ru: contentRU,
          },
          category: {
            _type: 'reference',
            _ref: category._id,
          },
          author: row.Autor || 'Dr. Maxim Petrov',
          readTime: parseInt(row.Lesezeit_Minuten) || 5,
          publishedAt: new Date().toISOString(),
        };

        // Bild-URL hinzufügen (falls vorhanden)
        if (row.Bild_URL) {
          newArticle.image = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: await uploadImageFromURL(row.Bild_URL, row.Titel_Deutsch),
            },
          };
        }

        const result = await client.create(newArticle);
        console.log(`  ✅ Erstellt: ${result.slug.current}`);
      } catch (error: any) {
        console.error(`  ❌ Fehler bei "${row.Titel_Deutsch}":`, error.message);
      }
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ ${records.length} Artikel erfolgreich hochgeladen!`);
    console.log('🌐 Refresh die Website um die Artikel zu sehen.');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  } catch (error) {
    console.error('\n❌ Fehler beim Lesen der CSV-Datei:');
    console.error(error);
    console.log('\n💡 Stelle sicher, dass "artikel-vorlage.csv" existiert und korrekt formatiert ist.');
  }
}

uploadFromCSV();
