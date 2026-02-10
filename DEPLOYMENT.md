# Deployment auf Vercel

## Schnellstart

1. **Auf Vercel registrieren:** https://vercel.com
2. **"New Project" klicken**
3. **GitHub-Repository importieren:** `oli-s-code/Ligal-Service`
4. **Automatisch erkannt:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy klicken** 🚀

## Lokale Build-Vorschau

```bash
npm run build    # Erstellt Production Build
npm run preview  # Startet lokalen Preview-Server
```

## Automatisches Deployment

- **Jeder Push zum `main` Branch** → automatisches Production Deployment
- **Pull Requests** → automatische Preview-URL
- **Branches** → automatische Preview-Deployments

## Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Domain hinzufügen
3. DNS-Records konfigurieren (wird automatisch angezeigt)
4. SSL-Zertifikat wird automatisch erstellt ✓

## Umgebungsvariablen

Falls du Environment Variables brauchst (z.B. für EmailJS):
1. Vercel Dashboard → Settings → Environment Variables
2. Variablen hinzufügen
3. Neu deployen

## Features

✅ SPA-Routing (alle Routen zu index.html)
✅ Security Headers
✅ Cache-Optimierung für Assets
✅ Automatisches SSL
✅ CDN weltweit
