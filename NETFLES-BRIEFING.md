# 🎬 NETFLES — Project Briefing for Claude (VS Code)

> **Hey Claude!** This file contains everything you need to know to help set up NETFLES from scratch. Read this entire file before doing anything. Follow each step in order.

---

## ⚠️ Rules for Claude — Follow These Before Doing Anything

These 3 rules are non-negotiable. They exist to minimize errors and save time.

### Rule 1 — Read First, Edit Second
Before touching ANY file:
- Open and read the full file first
- Identify ALL the places that need changing
- Then and only then — make the edits
- Never assume what's inside a file without reading it

### Rule 2 — Test After Each Step
After completing each major Step in this briefing, run:
```bash
npm run dev
```
- If it runs without errors → move to the next step ✅
- If there are errors → fix them before moving forward ❌
- Never stack new changes on top of broken code

### Rule 3 — Search Before Replacing
Before doing any rebranding, run this first to find EVERY file that mentions "Streambert":
```bash
grep -r "Streambert" src/ --include="*.jsx" --include="*.js" --include="*.html" -l
```
Also check root level files:
```bash
grep -r "Streambert" . --exclude-dir=node_modules --exclude-dir=.git -l
```
This gives the exact list of files to edit — no guessing, no missing hidden instances.

---

## 🔧 Before Starting — VS Code Setup

### Disable Permission Prompts (Auto-Approve)
Claude Code asks for permission before every action by default. To avoid constant interruptions, disable it at the start of the session using ONE of these methods:

**Option 1 — Tell Claude at the start of the session:**
> "Auto approve all actions for this session"

**Option 2 — Run Claude Code with this flag in the terminal:**
```bash
claude --dangerously-skip-permissions
```

**Option 3 — VS Code Settings:**
1. Open Settings (`Ctrl + ,`)
2. Search for **"Claude"**
3. Find **"Auto Approve"** toggle → turn it ON

### ⚠️ Safety Net — Always Have Git Ready
With auto-approve on, Claude will edit files without asking. If something goes wrong, use these to undo:
```bash
# Undo ALL uncommitted changes
git checkout .

# See what files were changed
git status

# Undo a specific file only
git checkout -- path/to/file.jsx
```
> 💡 This is why we set up Git first before doing anything else. It's your undo button. 😄

---

## 💡 Session Management — How to Handle Claude's Usage Limit

> ⚠️ Claude: This is a medium-heavy session. There is a real chance the usage limit gets hit before everything is done. Follow these rules to make sure no progress is ever lost.

### Rule — Commit After Every Completed Step
After finishing EACH step in this briefing, immediately run:
```bash
# Stage all changes
git add .

# Commit with a clear message
git commit -m "Step X done — [brief description]"

# Push to GitHub
git push origin main
```

Use these exact commit messages so it's easy to track progress:
```bash
git commit -m "Step 1 done — cloned and installed"
git commit -m "Step 2 done — rebranded to NETFLES"
git commit -m "Step 3 done — removed Electron and downloads"
git commit -m "Step 4 done — pushed to GitHub"
git commit -m "Step 5 done — GitHub Pages deployed"
git commit -m "Step 6 done — upstream sync set up"
git commit -m "Step 7 done — branding files protected"
```

### If the Usage Limit Hits Mid-Session
Don't panic! 😄 Just:
1. Finish the current file or task cleanly
2. Run `git add . && git commit -m "WIP — paused at Step X" && git push`
3. Wait for the limit to reset OR open a new Claude session
4. In the new session, say:

> *"Read NETFLES-BRIEFING.md in this project. We already completed Steps 1 through X. Please continue from Step Y."*

Claude will pick up exactly where we left off. ✅

### Priority Order — Most Important First
If time or limit is running short, do steps in this order:
1. ✅ Rebrand to NETFLES (Step 2) — quick
2. ✅ Remove Electron + downloads (Step 3) — most critical
3. ✅ Get running in browser (`npm run dev`) — proof of concept
4. ✅ Push to GitHub (Step 4) — saves everything
5. ✅ GitHub Pages (Step 5) — live link
6. ✅ Responsive design (Step 3f) — can be done in a separate session
7. ✅ Upstream sync (Step 6) — can be done in a separate session
8. ✅ CODEOWNERS (Step 7) — can be done in a separate session

---

## 🧠 Context — What Are We Building?

We are taking an open source Electron desktop app called **Streambert** and:
1. Rebranding it to **NETFLES**
2. Converting it from a desktop (Electron) app to a **web app** (runs in any browser)
3. Hosting it on **GitHub Pages** so it's accessible on any device — phone, tablet, PC — via a simple link like `YOUR_USERNAME.github.io/netfles`
4. Setting up **automated upstream sync** so when Streambert pushes updates, a Pull Request is automatically created on the NETFLES repo for review before merging
5. **Protecting NETFLES branding files** so upstream updates never accidentally overwrite them

**This is for personal use only. Not being distributed or sold.**

---

## 📋 Table of Contents

1. [What is NETFLES?](#1-what-is-netfles)
2. [How Content Works](#2-how-content-works)
3. [Requirements](#3-requirements)
4. [Step 1 — Clone Streambert](#4-step-1--clone-streambert)
5. [Step 2 — Rebrand to NETFLES](#5-step-2--rebrand-to-netfles)
6. [Step 3 — Convert from Electron to Web App](#6-step-3--convert-from-electron-to-web-app)
7. [Step 4 — Push to Your Own GitHub Repo](#7-step-4--push-to-your-own-github-repo)
8. [Step 5 — Deploy via GitHub Pages](#8-step-5--deploy-via-github-pages)
9. [Step 6 — Set Up Upstream Sync (Auto-Update)](#9-step-6--set-up-upstream-sync-auto-update)
10. [Step 7 — Protect Your Branding Files](#10-step-7--protect-your-branding-files)
11. [How to Review & Merge Updates](#11-how-to-review--merge-updates)
12. [How New Movies Appear Automatically](#12-how-new-movies-appear-automatically)
13. [Files to Never Let Streambert Overwrite](#13-files-to-never-let-streambert-overwrite)
14. [Running the App Locally](#14-running-the-app-locally)
15. [Summary Checklist](#15-summary-checklist)

---

## 1. What is NETFLES?

NETFLES is a personal rebranded version of **Streambert** (https://github.com/truelockmc/streambert) — rebuilt as a **web app** accessible from any browser on any device via a GitHub Pages link.

Features inherited from Streambert:
- 🎦 Stream any Movie, TV Series, or Anime (via VidSrc, videasy.net, 2Embed)
- 📥 Download anything with multithreading
- 📃 Download and manage Subtitles
- 📚 Track watch history and manage downloads
- ✨ Discover trending content daily — updated automatically via TMDB API
- 🛡️ Zero Ads and Zero Tracking
- 📱 Accessible on phone, tablet, and PC via browser link

---

## 2. How Content Works

> ⚠️ Claude, make sure the user understands this — they do NOT need to update the repo for new movies to appear.

```
User opens NETFLES in browser
        ↓
App calls TMDB API in real time
        ↓
TMDB returns latest movies, shows & anime
        ↓
Fresh content appears automatically ✅
```

| What updates | How | Action needed |
|---|---|---|
| New movies / shows appearing | TMDB API — live, real time | ❌ None |
| New app features / bug fixes | Upstream sync from Streambert | ✅ Review & merge PR |
| Branding / logo | Only the owner changes this | ✅ Manual |

---

## 3. Requirements

Make sure these are installed/ready before starting:

- [ ] [Node.js](https://nodejs.org/) v22.12.0 or higher
- [ ] [Git](https://git-scm.com/) installed
- [ ] A free [TMDB API key](https://www.themoviedb.org/) — [Guide here](https://github.com/truelockmc/streambert/blob/main/tmdb-tutorial.md)
- [ ] A [GitHub](https://github.com) account
- [ ] GitHub Pages enabled on the repo (free, no extra account needed)

> ✅ ffmpeg and vid-dl-cli-only are NOT needed — download feature is intentionally removed from NETFLES.

---

## 4. Step 1 — Clone Streambert

```bash
# Clone the original Streambert repo
git clone https://github.com/truelockmc/streambert.git

# Rename the folder to netfles
mv streambert netfles

# Go into the folder
cd netfles

# Install dependencies
npm install
```

---

## 5. Step 2 — Rebrand to NETFLES

> ⚠️ Claude: Only touch these specific files for rebranding. Do NOT change anything else. Keeping changes minimal reduces the chance of conflicts when Streambert pushes future updates.

---

### 📄 `package.json`
```json
{
  "name": "netfles",
  "productName": "NETFLES",
  ...
}
```

---

### 📄 `index.html`
```html
<title>NETFLES</title>
```

---

### 📄 `src/components/Sidebar.jsx`
Find every instance of "Streambert" and replace with "NETFLES":
```jsx
// Before
<span>Streambert</span>

// After
<span>NETFLES</span>
```
Also update any tagline text (e.g. change to "Stream Everything").

---

### 📄 `src/components/WindowTitlebar.jsx`
Find any hardcoded "Streambert" text and replace with "NETFLES".

---

### 📄 `public/logo.svg`
Replace with the NETFLES logo file:
```bash
cp /path/to/your/logo.svg public/logo.svg
```
If no custom logo yet, leave as is and update later.

---

## 6. Step 3 — Convert from Electron to Web App + Make it Responsive

> ⚠️ Claude: This is the most important technical step. Streambert is built as an Electron desktop app. We need to:
> 1. Strip out Electron and make the React/Vite frontend run as a standalone web app in the browser
> 2. Make the app **fully responsive** (also called mobile-friendly / mobile-optimized) so it works beautifully on phones, tablets, and desktops — not just desktop screens

### 6a. Remove Electron
```bash
npm uninstall electron electron-builder
```

### 6b. Update `package.json` scripts
Remove all Electron/dist scripts and replace with standard Vite scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 6c. Remove Electron main process files
These files are only needed for Electron desktop — they are NOT needed for the web app:
- `index.js` — Electron main process (delete or leave, it won't affect the web build)
- `preload.js` — Electron preload script (delete or leave)
- `popout-preload.js` — Electron popout preload (delete or leave)

### 6d. Remove Electron IPC calls from the frontend
The `src/ipc/` folder contains Electron IPC handlers that won't work in a browser. Here's how to handle each file:

| File | Action |
|---|---|
| `src/ipc/downloads.js` | ❌ Delete entirely — download feature removed |
| `src/ipc/player.js` | 🔄 Rewrite with browser-compatible fetch calls |
| `src/ipc/storage.js` | 🔄 Rewrite using `localStorage` instead |
| `src/ipc/subtitles.js` | 🔄 Rewrite with browser-compatible fetch calls |
| `src/ipc/allmanga.js` | 🔄 Rewrite with browser-compatible fetch calls |
| `src/ipc/blockStats.js` | 🔄 Rewrite using `localStorage` instead |

Also remove any UI components related to downloads:
- `src/components/DownloadModal.jsx` — ❌ Delete or hide
- `src/pages/DownloadsPage.jsx` — ❌ Delete or hide
- Remove the Downloads link from `src/components/Sidebar.jsx`

### 6e. Update `vite.config.js`
Make sure it's configured for a standard web build (not Electron). It should look something like:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/netfles/', // Important for GitHub Pages!
})
```

> ⚠️ The `base: '/netfles/'` is critical for GitHub Pages to work correctly. The repo name must match.

### 6f. Make the App Responsive (Mobile-Friendly)

> ⚠️ Claude: Streambert was designed for desktop only. We need to make NETFLES work great on mobile screens too. Go through the CSS and components and apply these changes:

**Sidebar — collapse on mobile:**
```css
/* On small screens, hide sidebar and show a bottom navigation bar or hamburger menu instead */
@media (max-width: 768px) {
  .sidebar {
    display: none; /* or transform into a slide-out drawer */
  }
}
```

**Cards grid — adjust columns for small screens:**
```css
/* Desktop: 5 columns, Tablet: 3 columns, Phone: 2 columns */
.cards-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

@media (max-width: 1024px) {
  .cards-row { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .cards-row { grid-template-columns: repeat(2, 1fr); }
}
```

**Video player — full width on mobile:**
```css
@media (max-width: 768px) {
  .player-container {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
  }
}
```

**Touch-friendly tap targets:**
- All buttons and clickable elements should be at least **44px tall** on mobile
- Add `touch-action: manipulation` to interactive elements to remove tap delay

**Add viewport meta tag** (if not already in `index.html`):
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**General approach:**
- Use **CSS media queries** throughout for responsive breakpoints
- Use **relative units** (`rem`, `%`, `vw`, `vh`) instead of fixed `px` where possible
- Test at these breakpoints: 375px (iPhone), 768px (iPad), 1280px (Desktop)

### 6h. Test it in the browser
```bash
npm run dev
```
Open `http://localhost:5173` — the app should load in the browser with no Electron errors.

Also test responsiveness:
- Open Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
- Test at iPhone (375px), iPad (768px), and Desktop (1280px)
- Make sure sidebar, cards, and player all look good on each size

---

## 7. Step 4 — Push to Your Own GitHub Repo

1. Go to [github.com](https://github.com) and create a **new empty public repository** called `netfles`
2. Then run:

```bash
# Remove the link to Streambert's repo
git remote remove origin

# Add YOUR new GitHub repo as origin
git remote add origin https://github.com/YOUR_USERNAME/netfles.git

# Keep Streambert as "upstream" for future code updates
git remote add upstream https://github.com/truelockmc/streambert.git

# Verify remotes
git remote -v
# origin    https://github.com/YOUR_USERNAME/netfles.git
# upstream  https://github.com/truelockmc/streambert.git

# Stage all changes
git add .
git commit -m "Initial NETFLES setup — rebranded from Streambert"

# Push to your repo
git push -u origin main
```

---

## 8. Step 5 — Deploy via GitHub Pages

This gives NETFLES a live link like `YOUR_USERNAME.github.io/netfles` accessible on any device.

### 8a. Add GitHub Pages deploy workflow
Create this file:
```
.github/workflows/deploy.yml
```

```yaml
name: Deploy NETFLES to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build
        env:
          VITE_TMDB_API_KEY: ${{ secrets.VITE_TMDB_API_KEY }}

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 8b. Add TMDB API key as GitHub Secret
1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Name: `VITE_TMDB_API_KEY`
4. Value: your TMDB API key
5. Click **Save**

### 8c. Enable GitHub Pages
1. Go to your GitHub repo → **Settings** → **Pages**
2. Under **Source** → select **"GitHub Actions"**
3. Save

### 8d. Trigger the first deploy
```bash
git push origin main
```
GitHub Actions will build and deploy automatically. Your live link will be:
```
https://YOUR_USERNAME.github.io/netfles
```

> ✅ Every time you push to `main`, GitHub Pages auto-redeploys. No manual steps needed.

---

## 9. Step 6 — Set Up Upstream Sync (Auto-Update)

This GitHub Action runs **daily at midnight UTC**, checks if Streambert has new code updates, and **automatically opens a Pull Request** on the NETFLES repo for review.

Create this file:
```
.github/workflows/sync-upstream.yml
```

```yaml
name: Sync Upstream Streambert

on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight UTC
  workflow_dispatch:       # Can also be triggered manually

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout NETFLES repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Fetch upstream Streambert
        run: |
          git remote add upstream https://github.com/truelockmc/streambert.git || true
          git fetch upstream

      - name: Create sync branch
        run: |
          git checkout -b upstream-sync-$(date +%Y%m%d) || git checkout upstream-sync-$(date +%Y%m%d)
          git merge upstream/main --no-commit --no-ff || true

      - name: Open Pull Request
        uses: peter-evans/create-pull-request@v6
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          branch: upstream-sync-${{ github.run_number }}
          title: "⬆️ Upstream Sync: Streambert Update"
          body: |
            ## Streambert has been updated!
            
            This PR was automatically created by the upstream sync workflow.
            
            ### ⚠️ Before merging, check these protected NETFLES branding files:
            - [ ] `package.json` — contains app name "NETFLES"
            - [ ] `index.html` — contains `<title>NETFLES</title>`
            - [ ] `public/logo.svg` — NETFLES logo
            - [ ] `src/components/Sidebar.jsx` — displays NETFLES in UI
            - [ ] `src/components/WindowTitlebar.jsx` — displays NETFLES in titlebar
            - [ ] `vite.config.js` — contains `base: '/netfles/'` for GitHub Pages
            
            If **any of the above are touched** → review carefully before merging ⚠️
            If **none of the above are touched** → safe to merge ✅
            
            > 💡 Reminder: New movies/shows are NOT related to this. Content comes live from TMDB API automatically.
          labels: upstream-sync
```

---

## 10. Step 7 — Protect Your Branding Files

Create this file:
```
.github/CODEOWNERS
```

```
# NETFLES branding & config — always review before merging
package.json @YOUR_USERNAME
index.html @YOUR_USERNAME
public/logo.svg @YOUR_USERNAME
vite.config.js @YOUR_USERNAME
src/components/Sidebar.jsx @YOUR_USERNAME
src/components/WindowTitlebar.jsx @YOUR_USERNAME
```

---

## 11. How to Review & Merge Updates

When the automation opens a Pull Request:

1. Go to GitHub repo → **Pull Requests tab**
2. Open PR titled `⬆️ Upstream Sync: Streambert Update`
3. Click **"Files changed"** tab
   - 🟢 Green lines = new code added by Streambert
   - 🔴 Red lines = code removed by Streambert
4. Check if any protected branding files are touched
5. **Safe** → click **"Merge Pull Request"** ✅
6. **Branding files touched** → click **"Close Pull Request"**, fix manually ⚠️

> 📱 This can all be done from the **GitHub mobile app** on your phone!

---

## 12. How New Movies Appear Automatically

> No action needed from the repo owner for new content to appear.

NETFLES fetches content from **TMDB API** in real time on every page load. TMDB updates daily with new releases, trending titles, and updated metadata. The app just pulls from it live — zero repo changes needed.

---

## 13. Files to Never Let Streambert Overwrite

| File | Why It's Protected |
|---|---|
| `package.json` | App name "NETFLES" |
| `index.html` | `<title>NETFLES</title>` |
| `public/logo.svg` | NETFLES logo |
| `vite.config.js` | `base: '/netfles/'` for GitHub Pages |
| `src/components/Sidebar.jsx` | NETFLES name in UI |
| `src/components/WindowTitlebar.jsx` | NETFLES in titlebar |

**Beyond the table — the web-vs-Electron guards that must survive every sync:**

| Guard | Where | Why |
|---|---|---|
| `<iframe>` instead of `<webview>` | `TVPage.jsx`, `MoviePage.jsx` | `<webview>` is Electron-only; using it is the TV black-player bug |
| `if (!window.electron) return` before AllManga resolve | `TVPage.jsx`, `MoviePage.jsx` | resolve runs over main-process IPC the web build lacks |
| `if (!wv.executeJavaScript) return` | `TVPage.jsx` skip-controls effect | iframes have no `executeJavaScript` |
| `isElectron` gate on desktop-only Settings sections | `SettingsPage.jsx` | e.g. Anime Intro Skip, download folder |
| `.hero-brand { display: none }` | `global.css` | hides upstream's Streambert wordmark |
| No downloads feature | everywhere | no `DownloadsPage`, no `setDownloaderFolder` — drop any upstream code referencing them |

Upstream keeps re-adding all of the above. Expect to re-insert them by hand on
each sync; a clean auto-merge is the exception, not the rule.


---

## 14. Running the App Locally

```bash
# Development mode (live preview in browser at localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🗒️ Quick Reference — Commands

```bash
# Run NETFLES locally
npm run dev

# Manually check if Streambert has new updates
git fetch upstream
git log HEAD..upstream/main --oneline

# Push changes to GitHub (triggers GitHub Pages redeploy)
git push origin main
```

---

## 15. ✅ Summary Checklist

> Claude: Use this checklist to track progress with the user. Go through each item one by one.

### Setup
- [x] Cloned Streambert → renamed folder to `netfles`
- [x] Ran `npm install`

### Rebranding
- [x] `package.json` → name: "netfles", productName: "NETFLES"
- [x] `index.html` → `<title>NETFLES</title>`
- [x] `src/components/Sidebar.jsx` → "NETFLES"
- [x] `src/components/WindowTitlebar.jsx` → "NETFLES"
- [x] NETFLES wordmark in top navbar (desktop) — red, Bebas Neue, letter-spaced
- [x] NETFLES brand label on hero (mobile) — large, red, top-left
- [ ] `public/logo.svg` → replaced with custom NETFLES logo

### Electron → Web App
- [x] Removed Electron (`npm uninstall electron electron-builder`)
- [x] Updated `package.json` scripts for Vite web build
- [x] Updated `vite.config.js` with `base: '/netfles/'`
- [x] Converted `<webview>` to `<iframe>` in MoviePage + TVPage (browser compatible)
- [x] Guarded `window.electron.resolveAllManga` — shows friendly error in browser instead of crashing
- [x] `.env.local` created for local dev (gitignored — never pushed)
- [x] Deleted `src/ipc/downloads.js` — download feature removed
- [x] Deleted `src/components/DownloadModal.jsx`
- [x] Deleted `src/pages/DownloadsPage.jsx`
- [x] Removed all download state, buttons, and nav from App, MoviePage, TVPage, Sidebar
- [x] Made app fully responsive (mobile-friendly)
- [x] Tested locally with `npm run dev` — app loads in browser
- [x] Tested responsiveness in Chrome DevTools at 375px, 768px, 1280px

### UI Redesign (Netflix-modern)
- [x] Sidebar → transparent top navbar (turns solid on scroll)
- [x] Hero: 82vh cinematic, subtle zoom-out on hover, stronger gradient
- [x] Cards: Netflix scale-up hover effect, no border
- [x] Buttons: bolder, smoother hover with scale
- [x] Section titles: clean sans-serif (no separator line)
- [x] Detail pages: padding clears navbar, better poster shadow
- [x] Library & Settings: top padding clears navbar
- [x] Mobile bottom nav: icon + label layout, red active state

### GitHub
- [x] Created GitHub repo `netfles` (public)
- [x] Set `origin` → your repo (aasshop100/netfles.git)
- [x] Set `upstream` → Streambert repo
- [x] Pushed to GitHub

### GitHub Pages
- [x] Added `.github/workflows/deploy.yml`
- [x] Added `VITE_TMDB_API_KEY` as GitHub Secret
- [x] Enabled GitHub Pages → Source: GitHub Actions
- [x] Pushed to trigger first deploy
- [x] Live link working: `https://aasshop100.github.io/netfles`
- [x] Tested on phone 📱

### Automation
- [x] Added `.github/workflows/sync-upstream.yml`
- [x] Added `.github/CODEOWNERS`
- [x] Tested upstream sync workflow manually — green 2026-09-01 (runs 33471748161, 33471946855). Note: only the early-exit path is proven; the merge→PR path first runs when upstream is actually ahead.

### Performance
- [x] Default source changed from Vidking → **Videasy** (smoother, fewer ads)
- [x] Preconnect + dns-prefetch hints added in `index.html` for Videasy, Vidking, VidSrc, TMDB (faster load)

### How Content Works (Reference)
- TMDB controls what **appears** in the app (movie list, posters, descriptions)
- Videasy / VidSrc / Vidking control whether the video **actually plays**
- New movies appear automatically — no repo changes needed
- If a movie shows but won't play → try switching sources (Videasy → VidSrc → Vidking)
- If a source has a video but TMDB doesn't list it → it will never appear in the app

### Anime & Sources
- [x] Anime series and movies now play in browser via Videasy (no longer crashes)
- [x] Browser auto-detects anime content → uses Videasy instead of AllManga
- [x] AllManga still used on Electron desktop app (unchanged)
- [x] Sources researched from GitHub open-source streaming projects

#### Full Source List (9 sources)
| Source | ID | Anime | Notes |
|--------|----|-------|-------|
| Videasy | `videasy` | ✅ | Default — smoothest, fewest ads |
| VidSrc | `vidsrc` | ✅ | Reliable fallback |
| Vidking | `vidking` | ✅ | General purpose |
| VidSrc 2 | `vidsrc2` | ✅ | vidsrc.xyz — large library |
| EmbedSU | `embedsu` | ✅ | embed.su |
| Vidlink Pro | `vidlink` | ✅ | vidlink.pro — widely used |
| AutoEmbed | `autoembed` | ✅ | autoembed.co — great for anime |
| 2Embed | `2embed` | ✅ | 2embed.stream — very reliable |
| MultiEmbed | `multiembed` | ✅ | multiembed.mov — aggregates streams |
| AllManga | `allmanga` | ✅ | Desktop Electron app only |

- ℹ️ AllManga shows a friendly error if selected in browser — expected behavior
- ℹ️ No single source has every title. If one fails → tap source button and try the next
- ℹ️ Recommended order for anime: Videasy → AutoEmbed → Vidlink Pro → VidSrc 2 → 2Embed

### Bug Fixes (from full codebase audit)
- [x] **Critical** — TVPage `<webview>` replaced with `<iframe>` — TV series were completely broken in browser (black player)
- [x] **Critical** — TVPage `did-finish-load`/`did-fail-load` events replaced with `onLoad`/`onError` on iframe
- [x] **Critical** — All `executeJavaScript` calls in TVPage guarded with `if (wv.executeJavaScript)` — were crashing silently on every progress tick
- [x] **Medium** — AniSkip injection guarded — only runs in Electron desktop app
- [x] **Low** — Toast/episode-check pill position fixed (`var(--sidebar)` → `24px`)
- [x] **Low** — Stale DownloadsPage comments cleaned up
- [x] English subtitles set as default — VidSrc and VidSrc 2 auto-select English via `ds_lang=en`

### Still To Do / Known Limitations
- [ ] `public/logo.svg` — replace with a custom NETFLES logo if desired
- [ ] Test upstream sync workflow manually via GitHub → Actions tab → Run workflow
- [ ] Ads on streaming sources — cannot block in browser (Electron-only). Workarounds: AdGuard DNS (`94.140.14.14`) on phone, or Firefox + uBlock Origin

---

## 📱 Phone Test Checklist (test on `https://aasshop100.github.io/netfles`)

> Run through these every time a new session of changes is made.

- [ ] Home page loads — hero shows, trending rows visible
- [ ] NETFLES branding visible top-left on hero
- [ ] Bottom nav works — Home, Search, History, Settings all navigate
- [ ] Search works — type a movie/anime name, results appear
- [ ] Movie plays — tap a movie → Play → video loads (try Videasy first)
- [ ] TV series plays — tap a series → pick episode → video loads ✅ *fixed this session*
- [ ] Anime plays — tap an anime series → video loads via Videasy ✅ *fixed this session*
- [ ] Source switching works — tap source button in player, switch to VidSrc 2 or AutoEmbed
- [ ] English subtitles — on VidSrc / VidSrc 2, CC should default to English
- [ ] Save/bookmark — tap Save on a movie, check Library tab
- [ ] History — after watching, check History tab

---

## 🗒️ Session Log

| Date | Changes |
|------|---------|
| 2026-06-03 | Full setup: clone, rebrand, Electron removal, GitHub Pages, upstream sync |
| 2026-06-03 | UI redesign (Netflix-modern), download feature removed |
| 2026-06-03 | 9 streaming sources added, anime browser fix, English subtitle default |
| 2026-06-03 | **Critical bug fix** — TV series black player (webview→iframe), all Electron guards |
| 2026-07-10 | Custom home-screen icon (Lester's photo) + fullscreen PWA (manifest + Apple meta tags) |
| 2026-07-10 | Homepage rows redesigned as Netflix-style swipe rows (new `ScrollRow` component) |
| 2026-07-10 | Mobile bottom nav restyled as a floating rounded bar; hid keyboard-shortcuts "?" on mobile |
| 2026-07-10 | Settings trimmed for web: hid desktop-only sections + dead sub-controls (all `isElectron`-gated) |
| 2026-09-01 | **Upstream sync** — merged 17 Streambert commits (security fixes #149, Mac fixes #150, Discord RPC #156, TV series status #161, autoplay-next); 8 files conflicted, resolved by hand |
| 2026-09-01 | **Fixed `sync-upstream.yml`** — had failed 90/90 scheduled runs and never opened a PR; rewritten with plain git + `gh` |
| 2026-09-01 | Bumped `actions/checkout` v4→v5 in all 4 workflows (Node 20 deprecation) |
| 2026-09-01 | Untracked `.claude/settings.json` + gitignored it (public repo, machine-specific paths) |

---

## 🗒️ 2026-07-10 Session — Mobile/Web Polish (details)

All changes below are live on `https://aasshop100.github.io/netfles` and were verified
with clean production builds + successful GitHub Pages deploys. **Auto-update untouched**
(TMDB live content + `sync-upstream.yml` daily PRs both confirmed intact).

### 1. Custom home-screen icon + fullscreen PWA
- Generated `public/apple-touch-icon.png` (180×180, from Lester's photo), plus `icon-192.png` / `icon-512.png`
- Added `public/manifest.json` (`display: standalone`) + Apple/PWA meta tags in `index.html`
- Result: home-screen icon shows the photo and the app launches fullscreen (no Safari bars)
- ⚠️ To change the icon: replace the PNGs in `public/`, rebuild, push, then **delete & re-add** the
  home-screen shortcut on iOS (iOS caches the old icon)

### 2. Netflix-style swipe rows
- New file `src/components/ScrollRow.jsx` — horizontal swipe/scroll rows with hover arrows (desktop)
  and native touch swipe (mobile); reuses `MediaCard`
- Replaced the auto-rotating `TrendingCarousel` on all 6 homepage rows in `HomePage.jsx`
- `TrendingCarousel` kept in the codebase for easy revert; new CSS scoped to `.srow-*`

### 3. Floating bottom nav + cleaner mobile bar
- Mobile bottom nav (`.sidebar` in the `max-width:768px` media query) restyled as a floating
  rounded bar (detached edges, rounded corners, shadow, blur, red-highlight active tab)
- Hid the keyboard-shortcuts "?" button on mobile (no keyboard on phones) — desktop still shows it

### 4. Settings trimmed for web (all `isElectron`-gated — desktop app keeps everything)
- Hidden **sections** on web: Updates & API, Subtitles (download), Downloads, Notifications
- Hidden **dead sub-controls** on web: Anime Intro Skip (AllManga/desktop only), Font Size
  (Electron zoom only), Install Location, Delete All Downloads
- Remaining 6 sections all fully functional on web: Age Rating, Playback, Interface, Library,
  Backup & Restore, Storage & Data

### Note on subtitles (investigated, no code change)
- Default source **Videasy has no subtitle URL parameter** — captions can't be force-defaulted on it.
- Only VidSrc / VidSrc 2 honor `ds_lang=en` (already wired). Per-title fix: switch that title's
  source to VidSrc via the in-player Source button. Decision: kept Videasy default, no change.

---

*Last updated: 2026-07-10 — Briefing maintained with Claude Code (claude.ai). Good luck Lester! 🚀*

---

## 🗒️ 2026-09-01 Session — Upstream Sync + Workflow Repair (details)

Triggered by a GitHub email warning that the scheduled sync workflow would be
disabled. That email was the least important thing it turned up.

### 1. The sync workflow had never worked

`.github/workflows/sync-upstream.yml` had run **90 times and failed 90 times**,
never once opening a sync PR.

**Root cause:** it checked out a local `upstream-sync-$(date)` branch and *then*
handed off to `peter-evans/create-pull-request`. That action derives its working
base from `HEAD`, so it ran `git reset --hard origin/upstream-sync-<date>`
against a branch that existed only locally → `exit 128`. Every run died there.

**Second latent bug:** it requested the label `upstream-sync`, which does not
exist in this repo — the next failure it would have hit.

**Rewritten** with plain `git` + `gh` (no third-party action):
- one stable `upstream-sync` branch, updated in place, instead of a new dated branch daily
- early exit when upstream is 0 commits ahead
- merge conflicts `--abort` cleanly and report to `$GITHUB_STEP_SUMMARY` instead of pushing a broken tree
- creates the `upstream-sync` label if missing
- explicit `permissions:` block
- PR body moved to `.github/upstream-sync-pr-body.md` — a column-0 heredoc inside
  a `run: |` block scalar is **invalid YAML** (it breaks out of the block)

> ⚠️ About the email itself: GitHub disables scheduled workflows after **60 days
> of repo inactivity**. Any push resets the clock. Nothing to fix in code.

### 2. Merged 17 upstream commits (8 conflicts)

Included the security fixes (#149) and Mac fixes (#150), Discord RPC (#156),
TV series status (#161), Codeberg as a second update source (#147), and the
autoplay-next-episode feature.

**The pattern behind almost every conflict:** NETFLES is a **web** build, upstream
is Electron. Take upstream's improvement, then re-insert the NETFLES guard.

| File | Resolution |
|---|---|
| `package.json` | NETFLES name + web-only vite scripts kept; version → 2.6.0 |
| `package-lock.json` | Regenerated from resolved `package.json`, not hand-merged |
| `App.jsx` | Took `checkForUpdatesWithFallback` + `onEpisodeChange`; dropped `DownloadsPage` / downloads props |
| `Sidebar.jsx` | Kept NETFLES wrapper; rejected upstream's `StreambertLogo` + seasonal overlay |
| `MoviePage.jsx` | Upstream auto-failover + re-inserted `!window.electron` bail |
| `TVPage.jsx` | Autoplay "Up Next" overlay kept — but on NETFLES's `<iframe>`, not `<webview>` |
| `SettingsPage.jsx` | New Autoplay section added; Intro Skip stays `isElectron`-gated |
| `global.css` | Upstream theme-aware hero gradient; `.hero-brand` stays `display:none` |

### 3. ⚠️ Two upstream dependencies deliberately NOT taken

Upstream's `7ed2a56 version bump` added `approve@^0.0.12` and `scripts@^0.1.0`
to `dependencies`. **Neither is imported anywhere in upstream's own tree.**
Unused deps with names like that read as an accidental install. They are
excluded here — **re-check this on every future sync**, they will keep coming
back until upstream removes them.

### 4. Housekeeping

- `actions/checkout` v4 → **v5** in all 4 workflows (v4 targets deprecated Node 20;
  confirmed the deprecation annotation disappeared afterward)
- `.claude/settings.json` **untracked + gitignored** — this repo is public and the
  file held `C:\Users\...` paths and an unrelated project directory. It still works
  locally. Older versions remain in git history (paths only, no secrets).

### Verification performed

- `npm run build` passes
- Dev server exercised across home, settings, TV detail, the player, and movie
  detail — **zero console errors**
- Confirmed the new Autoplay section renders and Intro Skip computes
  `display: none` on web
- Sync workflow triggered manually twice, green both times

### Still unproven

The workflow's **merge → push → PR path** has never executed. It only runs when
upstream is actually ahead. Given this sync needed 8 files resolved by hand,
expect the conflict-abort path more often than a clean auto-PR.
