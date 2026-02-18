# 📝 Artikel-Vorlage für Sanity CMS

## Einfache Anleitung - Keine Programmierkenntnisse nötig!

### Schritt 1: Excel/Google Sheets öffnen

Öffne die Datei **artikel-vorlage.csv** in Excel oder Google Sheets.

### Schritt 2: Neue Zeile hinzufügen

Füge eine neue Zeile mit deinen Artikeldaten hinzu. Die Spalten bedeuten:

| Spalte | Was eintragen | Beispiel |
|--------|---------------|----------|
| **Titel_Deutsch** | Deutscher Artikeltitel | Neue Regelungen im Arbeitsrecht 2026 |
| **Titel_Russisch** | Russischer Artikeltitel | Новые правила трудового права 2026 |
| **URL_Slug** | URL-Name (nur Kleinbuchstaben, Bindestriche) | neue-regelungen-arbeitsrecht-2026 |
| **Kurzbeschreibung_Deutsch** | 2-3 Sätze auf Deutsch | Überblick über die wichtigsten Änderungen... |
| **Kurzbeschreibung_Russisch** | 2-3 Sätze auf Russisch | Обзор важнейших изменений... |
| **Inhalt_Deutsch** | Artikel-Text mit HTML | `<h2>Überschrift</h2><p>Text...</p>` |
| **Inhalt_Russisch** | Artikel-Text mit HTML | `<h2>Заголовок</h2><p>Текст...</p>` |
| **Kategorie** | Eine von: business, property, international, family, tax, general | business |
| **Autor** | Name des Autors | Dr. Maxim Petrov |
| **Lesezeit_Minuten** | Geschätzte Lesezeit | 7 |

### HTML-Formatierung für Inhalt-Spalten:

**Einfach diese HTML-Tags verwenden:**

```html
<h2>Überschrift</h2>
<h3>Unter-Überschrift</h3>
<p>Normaler Text-Absatz.</p>
<p><strong>Fetter Text</strong></p>
<ul>
  <li>Listenpunkt 1</li>
  <li>Listenpunkt 2</li>
</ul>
```

### Schritt 3: Datei speichern

Speichere die CSV-Datei (Excel → "Speichern unter" → CSV UTF-8).

### Schritt 4: Upload ausführen

Öffne PowerShell im Projektordner und führe aus:

```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED='0'; npx -y tsx upload-from-csv.ts
```

Fertig! Artikel ist online.

---

## Verfügbare Kategorien

| Kategorie | Wert in CSV |
|-----------|-------------|
| Business | `business` |
| Immobilien | `property` |
| International | `international` |
| Familie | `family` |
| Steuern | `tax` |
| Allgemein | `general` |

---

## Beispiel-Zeile (komplett):

```
Steuerliche Aspekte,Налоговые аспекты,steuerliche-aspekte-2026,"Wichtige Steuertipps für 2026.","Важные налоговые советы на 2026 год.","<h2>Einleitung</h2><p>Steuern sind wichtig...</p>","<h2>Введение</h2><p>Налоги важны...</p>",tax,Dr. Maxim Petrov,5
```

---

✅ **So einfach!** Keine JSON, kein TypeScript, nur Excel!
