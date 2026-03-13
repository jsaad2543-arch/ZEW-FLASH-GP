# APNA AI ZAIN

Installable black-theme AI web app demo.

## Features
- Q&A mode
- Video planning mode
- Image prompt mode
- Auto Insight suggestions
- Install support on mobile + desktop browsers (PWA)

## Run locally
```bash
python3 -m http.server 4173
```
Open: `http://localhost:4173`

## Deploy on GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**.
4. Select `main` branch and `/ (root)`.
5. Save and wait for deployment.
6. Your live URL will be:
   `https://YOUR_GITHUB_USERNAME.github.io/ZEW-FLASH-GP/`

## Free website banane ka easy plan (Roman Urdu)
Agar aap poori tarah free website banana chahte ho, yeh fastest route hai:

1. **Code ready karo**
   - Is project jaisi static files (`index.html`, `styles.css`, `script.js`) use karo.
2. **GitHub account banao**
   - Naya repo create karo aur files push karo.
3. **GitHub Pages enable karo**
   - `Settings -> Pages -> Deploy from branch -> main / root` select karo.
4. **Live link mil jayega**
   - URL format: `https://username.github.io/repo-name/`
5. **Free custom domain (optional)**
   - Freenom jaisi service se free domain mil sakta hai (availability par depend karta hai),
     ya subdomain use karo.
6. **Agar backend chahiye**
   - Free tiers: Render / Railway / Fly.io (limits ke sath).
7. **Agar Minecraft-style panel banana ho**
   - Frontend free host karo (GitHub Pages / Vercel).
   - Backend free tier pe rakho (Render/Railway).
   - Start me "shared resources + queue" model rakho taki free plan stable rahe.

## One-command launch + test (Roman Urdu)
Aap ne bola tha "launch karo, link do, test karo" — is ke liye scripts add ki gayi hain:

1. **Launch local live server**
```bash
./scripts/launch_local.sh
```
Live local link: `http://127.0.0.1:4173`

2. **Smoke test run karo** (dusri terminal mein)
```bash
./scripts/smoke_test.sh
```
Ye `index`, `script.js`, aur `manifest` check karta hai.

3. **Agar error aaye**
- Port busy ho to:
  ```bash
  ./scripts/launch_local.sh 5173
  ./scripts/smoke_test.sh 5173
  ```
- Browser cache clear karo (PWA/service-worker stale cache issue ke liye).

> Note: Public internet "live" link (GitHub Pages/Vercel) tab milega jab repo remote pe push hoga.

## Google visibility note
Google indexing can take time. To improve discoverability for queries like `apna ai zain download`:
- Keep the site live and public.
- Share the URL on social profiles.
- Add it in Google Search Console and request indexing.
