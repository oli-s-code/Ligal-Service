# 🚀 EmailJS - Schnellstart

Diese Kurzanleitung fasst die wichtigsten Schritte zusammen.  
Für Details siehe: [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

---

## ✅ Was bereits gemacht wurde

- ✅ EmailJS Bibliothek installiert
- ✅ ContactPage.tsx mit EmailJS-Integration aktualisiert
- ✅ Fehlerbehandlung und Loading-States hinzugefügt

---

## 📝 Was SIE noch tun müssen

### 1️⃣ EmailJS Account einrichten (10 Minuten)

1. **Account erstellen:** https://www.emailjs.com/
2. **Email-Service verbinden** (Gmail empfohlen)
3. **Template erstellen** mit folgenden Variablen:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{reply_to}}`
4. **3 IDs notieren:**
   - Service ID (z.B. `service_abc123`)
   - Template ID (z.B. `template_xyz789`)
   - Public Key (z.B. `XYZ123abc-def456`)

### 2️⃣ IDs in Code eintragen

Öffnen Sie: `src/app/components/ContactPage.tsx`

Ersetzen Sie (ca. Zeile 25-30):

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // ← Hier Ihre Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // ← Hier Ihre Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // ← Hier Ihr Public Key
```

### 3️⃣ Testen

```bash
npm run dev
```

Navigieren Sie zu **Kontakt** und senden Sie eine Test-Nachricht!

---

## 📧 Email-Template (Vorschlag)

**Betreff:**
```
Neue Kontaktanfrage von {{from_name}}: {{subject}}
```

**Inhalt (HTML):**
```html
<h2>Neue Kontaktanfrage</h2>
<p><strong>Von:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefon:</strong> {{phone}}</p>
<p><strong>Betreff:</strong> {{subject}}</p>
<hr>
<h3>Nachricht:</h3>
<p>{{message}}</p>
```

**Empfänger (To Email):**
```
info@rechtsberatung-petrova.de
```
⚠️ Ersetzen mit Ihrer echten Email!

**Reply To:**
```
{{reply_to}}
```

---

## 🔒 Sicherheit

Domain-Whitelist einrichten unter **Account → Security**:
```
localhost
ihre-domain.de
www.ihre-domain.de
```

---

## 🆘 Bei Problemen

1. **Browser-Console prüfen** (F12)
2. **EmailJS Dashboard → History** prüfen
3. Siehe detaillierte Anleitung: [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

---

## 📊 Limits

- **Free Plan:** 200 Emails/Monat
- **Personal Plan ($15):** 1,000 Emails/Monat

Für die meisten Websites reicht der Free Plan völlig aus.

---

**Viel Erfolg! 🎉**
