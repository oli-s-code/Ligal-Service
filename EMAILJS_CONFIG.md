# 📧 EmailJS Konfiguration - Schnellanleitung

## ✅ Was bereits erledigt ist:

- E-Mail-Adresse: **u3461019064@id.gle** ist konfiguriert
- `.env` Datei erstellt
- Code angepasst für Environment Variables

---

## 🚀 Nächste Schritte (ca. 10 Minuten):

### 1. EmailJS Account erstellen

1. Gehe zu: https://www.emailjs.com
2. Klicke auf **"Sign Up"**
3. Registriere dich mit **u3461019064@id.gle** oder einem Google-Account

### 2. Email Service verbinden

1. Im Dashboard: **"Email Services"** → **"Add New Service"**
2. Wähle deinen Email-Provider:
   - **Gmail** (wenn du Gmail verwendest)
   - **Outlook** (wenn du Outlook verwendest)
   - **Other** (für u3461019064@id.gle - wahrscheinlich Gmail oder custom SMTP)
3. Verbinde den Account und notiere dir die **Service ID**

### 3. Email Template erstellen

1. Dashboard: **"Email Templates"** → **"Create New Template"**
2. Template-Name: z.B. "Kontaktformular"
3. Verwende folgendes Template:

```
Neue Nachricht von der Website:

Von: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}
Betreff: {{subject}}

Nachricht:
{{message}}
```

4. Setze **To Email** auf: **u3461019064@id.gle**
5. Speichere und notiere die **Template ID**

### 4. Public Key holen

1. Dashboard: **"Account"** → **"General"**
2. Kopiere den **Public Key**

### 5. Werte in .env eintragen

Öffne die Datei `.env` und ersetze die Platzhalter:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
VITE_CONTACT_EMAIL=u3461019064@id.gle
```

### 6. Testen

```bash
npm run dev
```

Öffne http://localhost:5173 und teste das Kontaktformular!

---

## 📝 Wichtige Hinweise:

- **Kostenlos:** 200 Emails pro Monat
- **Test-Emails:** Prüfe nach Test-Versand dein u3461019064@id.gle Postfach
- **Spam-Ordner:** Erste Email landet oft im Spam
- **Vercel Deployment:** Umgebungsvariablen auch in Vercel eintragen!

---

## 🔧 Vercel Umgebungsvariablen setzen:

1. Vercel Dashboard → Dein Projekt
2. **Settings** → **Environment Variables**
3. Füge die 4 Variablen hinzu:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_CONTACT_EMAIL`
4. **Redeploy** das Projekt

---

Bei Fragen siehe ausführliche Anleitung: **EMAILJS_SETUP.md**
