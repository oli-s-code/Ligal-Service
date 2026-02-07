# 📧 EmailJS Setup-Anleitung

Diese Anleitung führt Sie Schritt für Schritt durch die Einrichtung von EmailJS für das Kontaktformular.

---

## 📋 Übersicht

Nach dem Setup werden Kontaktformular-Nachrichten automatisch an Ihre Email-Adresse gesendet, wenn Besucher das Formular ausfüllen.

**Zeitaufwand:** ca. 10-15 Minuten  
**Kosten:** Kostenlos (200 Emails/Monat)

---

## 🚀 Schritt 1: EmailJS Account erstellen

1. **Öffnen Sie:** https://www.emailjs.com
2. **Klicken Sie:** "Sign Up" (oben rechts)
3. **Wählen Sie eine Methode:**
   - Mit Google-Account anmelden (empfohlen)
   - ODER mit Email-Adresse registrieren
4. **Bestätigen Sie** Ihre Email-Adresse (falls per Email registriert)

✅ **Ergebnis:** Sie sind jetzt im EmailJS Dashboard eingeloggt

---

## 📮 Schritt 2: Email-Service verbinden

### 2.1 Service hinzufügen

1. Im Dashboard: **"Email Services"** im linken Menü klicken
2. **"Add New Service"** Button klicken
3. **Email-Provider auswählen:**

#### **Option A: Gmail (Empfohlen für Privatpersonen)**
   - Klicken Sie auf **"Gmail"**
   - Klicken Sie **"Connect Account"**
   - Melden Sie sich mit Ihrem Gmail-Account an
   - Erteilen Sie die erforderlichen Berechtigungen
   
#### **Option B: Outlook/Office365 (Für Business)**
   - Klicken Sie auf **"Outlook"**
   - Folgen Sie dem Login-Prozess
   
#### **Option C: Custom SMTP (Für eigenen Mail-Server)**
   - Klicken Sie auf **"Other"**
   - Geben Sie Ihre SMTP-Daten ein:
     - SMTP Server (z.B. mail.ihr-provider.de)
     - Port (meist 587 oder 465)
     - Username (Ihre Email-Adresse)
     - Password (Ihr Email-Passwort)

4. **Service-Name vergeben** (z.B. "Rechtsberatung Kontaktformular")
5. **"Create Service"** klicken

### 2.2 Service ID notieren

Nach dem Erstellen sehen Sie eine **Service ID** (z.B. `service_abc123xyz`)

⚠️ **WICHTIG:** Notieren Sie diese Service ID! Sie wird später im Code benötigt.

✅ **Ergebnis:** Ihr Email-Account ist jetzt verbunden

---

## 📝 Schritt 3: Email-Template erstellen

### 3.1 Neues Template anlegen

1. Im Dashboard: **"Email Templates"** im linken Menü klicken
2. **"Create New Template"** Button klicken

### 3.2 Template-Namen vergeben

**Template Name:** `contact_form`  
(Dieser Name erscheint nur im Dashboard)

### 3.3 Template konfigurieren

#### **A) Empfänger-Email einstellen (To Email)**

```
info@rechtsberatung-petrova.de
```

⚠️ **WICHTIG:** Ersetzen Sie dies mit Ihrer echten Email-Adresse, an die die Kontaktanfragen gesendet werden sollen!

Sie können auch **mehrere Empfänger** angeben (mit Komma getrennt):
```
info@rechtsberatung-petrova.de, backup@example.com
```

#### **B) Absender-Name (From Name)**

```
{{from_name}}
```

#### **C) Antwort-An (Reply To)**

```
{{reply_to}}
```

Dies stellt sicher, dass Sie direkt auf die Email des Absenders antworten können.

#### **D) Betreff (Subject)**

```
Neue Kontaktanfrage von {{from_name}}: {{subject}}
```

#### **E) Nachrichteninhalt (Content/Message)**

**Für HTML-Template:**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4F46E5;">Neue Kontaktanfrage</h2>
  
  <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Von:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Telefon:</strong> {{phone}}</p>
    <p><strong>Betreff:</strong> {{subject}}</p>
  </div>
  
  <div style="margin-top: 20px;">
    <h3 style="color: #334155;">Nachricht:</h3>
    <p style="white-space: pre-line;">{{message}}</p>
  </div>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #E2E8F0;">
  
  <p style="color: #64748B; font-size: 12px;">
    Diese Email wurde über das Kontaktformular auf rechtsberatung-petrova.de gesendet.
  </p>
</div>
```

**ODER für Nur-Text-Template:**

```
Neue Kontaktanfrage über das Kontaktformular
============================================

Von: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}
Betreff: {{subject}}

Nachricht:
----------
{{message}}


---
Diese Email wurde über das Kontaktformular gesendet.
```

### 3.4 Template speichern

1. **"Save"** Button klicken
2. **Template ID notieren** (z.B. `template_xyz789abc`)

### 3.5 Test-Email senden (Optional aber empfohlen)

1. Klicken Sie auf **"Test It"**
2. Füllen Sie die Test-Werte aus:
   ```
   from_name: Max Test
   from_email: test@example.com
   phone: +49 123 456789
   subject: Test-Nachricht
   message: Dies ist eine Test-Nachricht
   reply_to: test@example.com
   ```
3. Klicken Sie **"Send Test"**
4. **Prüfen Sie Ihr Email-Postfach** - Sie sollten die Test-Email erhalten haben

✅ **Ergebnis:** Template ist erstellt und funktioniert

---

## 🔑 Schritt 4: Public Key (API Key) holen

1. Im Dashboard: Klicken Sie auf **"Account"** im linken Menü
2. Wählen Sie **"General"** Tab
3. Finden Sie **"Public Key"** (z.B. `XYZ123abc-defg456`)
4. **Notieren Sie diesen Key**

✅ **Ergebnis:** Sie haben jetzt alle 3 benötigten IDs

---

## 🔒 Schritt 5: Domain-Whitelist einrichten (Sicherheit)

### 5.1 Zugriff beschränken

1. Im Dashboard: **"Account"** → **"Security"**
2. **"Allowed Domains"** aktivieren
3. **Domains hinzufügen:**

```
localhost
rechtsberatung-petrova.de
www.rechtsberatung-petrova.de
```

⚠️ **WICHTIG:** Ersetzen Sie `rechtsberatung-petrova.de` mit Ihrer echten Domain!

**Für Entwicklung:** Lassen Sie `localhost` in der Liste, damit es lokal funktioniert.

### 5.2 Rate Limiting (optional)

- **"Requests per minute"**: 10 (Standard ist gut)
- Verhindert Spam/Missbrauch

✅ **Ergebnis:** Nur Ihre Website kann das Formular nutzen

---

## 💻 Schritt 6: IDs in den Code eintragen

Jetzt müssen Sie die 3 IDs in Ihrer Website eintragen.

### 6.1 Datei öffnen

Öffnen Sie die Datei:
```
src/app/components/ContactPage.tsx
```

### 6.2 IDs eintragen

Finden Sie diese Zeilen (ca. Zeile 25-30):

```typescript
// ⚠️ WICHTIG: Diese Werte müssen Sie nach dem EmailJS-Setup ersetzen!
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

**Ersetzen Sie die Platzhalter** mit Ihren echten Werten:

```typescript
const EMAILJS_SERVICE_ID = 'service_abc123xyz';      // Ihre Service ID aus Schritt 2
const EMAILJS_TEMPLATE_ID = 'template_xyz789abc';    // Ihre Template ID aus Schritt 3
const EMAILJS_PUBLIC_KEY = 'XYZ123abc-defg456';      // Ihr Public Key aus Schritt 4
```

### 6.3 Datei speichern

**Speichern Sie die Datei** (Strg+S / Cmd+S)

✅ **Ergebnis:** Die Konfiguration ist abgeschlossen

---

## 🧪 Schritt 7: Funktionalität testen

### 7.1 Entwicklungsserver läuft?

Stellen Sie sicher, dass der Dev-Server läuft:
```bash
npm run dev
```

### 7.2 Seite im Browser öffnen

Öffnen Sie: http://localhost:5173

### 7.3 Zum Kontaktformular navigieren

Klicken Sie in der Navigation auf **"Kontakt"**

### 7.4 Test-Nachricht senden

Füllen Sie das Formular aus:
- **Name:** Test Benutzer
- **Email:** ihre-email@example.com (Ihre echte Email!)
- **Telefon:** +49 123 456789
- **Betreff:** Test-Nachricht
- **Nachricht:** Dies ist eine Test-Nachricht vom Kontaktformular.

Klicken Sie **"Nachricht senden"**

### 7.5 Überprüfung

1. **Im Browser:** Sie sollten eine Erfolgsbestätigung sehen
2. **In Ihrer Email:** Prüfen Sie Ihr Postfach - Sie sollten die Nachricht erhalten haben
   - ⚠️ Prüfen Sie auch den Spam-Ordner!
3. **Bei Problemen:** Öffnen Sie die Browser-Console (F12) und prüfen Sie auf Fehlermeldungen

✅ **Erfolg!** Das Kontaktformular funktioniert jetzt!

---

## 🎯 Häufige Probleme & Lösungen

### ❌ Problem: "Invalid Public Key"

**Lösung:** 
- Prüfen Sie, ob alle 3 IDs korrekt kopiert wurden
- Keine Leerzeichen vor/nach den IDs
- Keine Anführungszeichen in den IDs selbst

### ❌ Problem: Email kommt nicht an

**Lösung:**
1. Prüfen Sie den Spam-Ordner
2. Überprüfen Sie die "To Email" Adresse im Template
3. Testen Sie das Template direkt im EmailJS Dashboard

### ❌ Problem: "Domain not allowed"

**Lösung:**
- Fügen Sie `localhost` zur Domain-Whitelist hinzu
- Für Production: Fügen Sie Ihre echte Domain hinzu

### ❌ Problem: Zu viele Anfragen (Rate Limit)

**Lösung:**
- EmailJS Free Plan: max. 200 Emails/Monat
- Warten Sie oder upgraden Sie Ihren Plan

---

## 📊 EmailJS Dashboard nutzen

Nach dem Setup können Sie im Dashboard:

### ✉️ Emails überwachen
- **"History"** zeigt alle gesendeten Emails
- Status: Erfolg/Fehler
- Zeitstempel und Details

### 📈 Statistiken ansehen
- Anzahl gesendeter Emails
- Verbleibende Emails im Monat
- Fehlerrate

### 🔔 Benachrichtigungen einrichten
- Email bei Fehler
- Warnung bei hoher Nutzung

---

## 💰 Upgrade (optional)

Wenn Sie mehr als 200 Emails/Monat benötigen:

| Plan | Preis | Emails/Monat |
|------|-------|--------------|
| Free | $0 | 200 |
| Personal | $15 | 1,000 |
| Professional | $50 | 10,000 |

Upgrade unter: **Dashboard → Billing**

---

## ✅ Checkliste

- [ ] EmailJS Account erstellt
- [ ] Email-Service verbunden (Gmail/Outlook/SMTP)
- [ ] Email-Template erstellt und konfiguriert
- [ ] Test-Email erfolgreich versendet
- [ ] Service ID notiert
- [ ] Template ID notiert
- [ ] Public Key notiert
- [ ] Domain-Whitelist eingerichtet
- [ ] IDs in ContactPage.tsx eingetragen
- [ ] Datei gespeichert
- [ ] Kontaktformular getestet
- [ ] Email erfolgreich empfangen

---

## 🆘 Support

**EmailJS Dokumentation:** https://www.emailjs.com/docs/  
**Support:** https://www.emailjs.com/support/

Bei Problemen mit dieser Integration:
- Prüfen Sie die Browser-Console auf Fehler
- Überprüfen Sie das EmailJS Dashboard "History"
- Stellen Sie sicher, dass alle IDs korrekt sind

---

## 🎉 Geschafft!

Ihr Kontaktformular ist jetzt voll funktionsfähig und sendet echte Emails!

Vergessen Sie nicht:
- Tauschen Sie die Platzhalter-Email-Adressen aus
- Testen Sie das Formular regelmäßig
- Überwachen Sie das EmailJS Dashboard
