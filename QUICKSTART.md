# ⚡ Quick Start Guide

Get Ahmed Ragab's portfolio up and running in 3 steps!

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## Step 2: Run Locally (10 seconds)

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

## Step 3: Deploy to Vercel (2 minutes)

### Option A: Git + Vercel (Easiest)

```bash
git add .
git commit -m "Ahmed Ragab Portfolio"
git push origin main
```

Then go to [vercel.com/new](https://vercel.com/new) and connect your GitHub repo.

### Option B: Vercel CLI (Fastest)

```bash
npm install -g vercel
vercel
```

Answer the prompts and your site goes live instantly! 🚀

---

## Next: Customization

1. **Update Name & Info**: Edit `src/components/Hero.js`
2. **Change Colors**: Edit `tailwind.config.js`
3. **Update Projects**: Edit `src/components/Experience.js`
4. **Add Your Email**: Edit `src/components/Contact.js`

---

## Folder Overview

```
📁 src/
├─ components/          ← All page sections
├─ App.js              ← Main component
└─ index.css           ← Global styles

📄 package.json        ← Dependencies
📄 tailwind.config.js  ← Style configuration
📄 README.md           ← Full documentation
📄 DEPLOYMENT_GUIDE.md ← Detailed deployment
```

---

## Commands Cheat Sheet

| Command         | Purpose               |
| --------------- | --------------------- |
| `npm start`     | Run locally           |
| `npm run build` | Build for production  |
| `npm test`      | Run tests             |
| `vercel`        | Deploy with CLI       |
| `git push`      | Auto-deploy on Vercel |

---

## Common Customizations

### Change Hero Title

**File**: `src/components/Hero.js` (Line 10)

```jsx
Full Stack .NET Developer | Navigation Science Student | Cybersecurity Enthusiast
```

### Update Project Links

**File**: `src/components/Experience.js` (Around Line 7-8)

```jsx
github: "https://github.com/your-username/project-name",
```

### Modify Color Theme

**File**: `tailwind.config.js` (Around Line 12-20)

```javascript
colors: {
  navy: { 900: "#001F3F" },  // Main color
  // ... other colors
}
```

### Change Social Links

**File**: `src/components/Header.js` & `src/components/Footer.js`

```jsx
href = "https://github.com/your-username";
```

---

## Deployment Status

| Platform     | Status      | URL              | Time     |
| ------------ | ----------- | ---------------- | -------- |
| Vercel       | ✅ Ready    | vercel.com       | 2-5 min  |
| GitHub Pages | ✅ Possible | pages.github.com | 5-10 min |
| Netlify      | ✅ Possible | netlify.com      | 2-5 min  |

---

## Troubleshooting

**"Cannot find module 'react'"**

```bash
npm install
```

**"Port 3000 already in use"**

```bash
npm start -- --port 3001
```

**"Changes not showing after git push"**

```bash
vercel --prod  # Redeploy manually
```

**"Form not submitting"**

- Form needs backend integration (see DEPLOYMENT_GUIDE.md)

---

## Need Help?

- 📖 **Full Docs**: Read `README.md`
- 🚀 **Deployment**: Check `DEPLOYMENT_GUIDE.md`
- 💬 **Issues**: Create GitHub issue
- 🔗 **Vercel Help**: https://vercel.com/docs

---

## Success Checklist

- [ ] Ran `npm install` ✅
- [ ] Ran `npm start` and saw site locally ✅
- [ ] Customized your info ✅
- [ ] Deployed to Vercel ✅
- [ ] Shared portfolio link! 🎉

---

**That's it! Your professional portfolio is live!** 🚀

Need to go deeper? Read the full [README.md](README.md) or [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md).
