# 🚀 Quick Deployment Guide

## Deploy to Vercel (Easiest - Recommended)

### Method 1: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project
cd /home/user/edupractice-pro

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? edupractice-pro
# - Directory? ./
# - Override settings? No

# Your app will be live at: https://edupractice-pro.vercel.app
```

### Method 2: Via GitHub + Vercel Dashboard

1. **Push to GitHub:**
```bash
# If you haven't created a GitHub repo yet:
# 1. Go to github.com and create a new repository
# 2. Then run:

git remote add origin https://github.com/YOUR_USERNAME/edupractice-pro.git
git branch -M main
git push -u origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your app is live

## Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod

# Follow prompts and your site will be live
```

## Deploy as Static Site

```bash
# Update next.config.js
echo "module.exports = { output: 'export' }" > next.config.js

# Build static files
npm run build

# The static files will be in 'out' directory
# Upload 'out' directory to any static host:
# - GitHub Pages
# - Cloudflare Pages
# - AWS S3 + CloudFront
# - Firebase Hosting
```

## Environment Variables (Optional)

If you want to set NVIDIA API key server-side:

**Vercel:**
- Go to Project Settings → Environment Variables
- Add: `NVIDIA_API_KEY` = your key

**Netlify:**
- Go to Site Settings → Environment Variables
- Add: `NVIDIA_API_KEY` = your key

## Post-Deployment Checklist

- [ ] Visit your deployed URL
- [ ] Test navigation between pages
- [ ] Try a practice quiz
- [ ] Check progress tracking
- [ ] Test on mobile device
- [ ] Share with friends!

## Troubleshooting

**Build fails:**
- Run `npm run build` locally first
- Check for TypeScript errors
- Ensure all dependencies are installed

**404 on routes:**
- Make sure you're not using static export if you need dynamic routes
- Vercel handles dynamic routes automatically

**Slow performance:**
- Enable Vercel Analytics
- Check bundle size with `npm run build`
- Consider adding React Server Components

## Custom Domain (Optional)

**On Vercel:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

**On Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

---

**Your EduPractice Pro is ready to go live! 🎉**

For questions: Open an issue on GitHub
