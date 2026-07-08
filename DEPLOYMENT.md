# 🚀 Deployment Guide

Deploy your portfolio to Vercel in **5 minutes**.

## Step 1: Get HuggingFace API Key (1 min)

1. Go to **https://huggingface.co/settings/tokens**
2. Sign up or log in (free account)
3. Click **"New token"**
4. Name it: `cv-portfolio`
5. Select role: **`read`**
6. Click **Create token**
7. **Copy the token** (you'll need it next)

## Step 2: Push to GitHub

```bash
# Inside cv-portfolio folder
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cv-portfolio.git
git push -u origin main
```

Or just upload to GitHub manually via the web interface.

## Step 3: Deploy to Vercel (2 min)

### Option A: Using Vercel CLI (Easiest)

```bash
npm i -g vercel
vercel
```

Follow prompts:
- Link to your GitHub repo? → **Yes**
- Set project name? → Press enter
- Production branch? → **main**

### Option B: Using Vercel Dashboard

1. Go to **https://vercel.com/new**
2. Import your GitHub repository
3. Click **Import**

## Step 4: Add Environment Variable

### If using CLI:
You'll be prompted to add environment variables. Paste your HuggingFace API key.

### If using Dashboard:
1. Go to your Vercel project
2. **Settings** → **Environment Variables**
3. Add:
   - **Name**: `HUGGINGFACE_API_KEY`
   - **Value**: *(paste your token)*
4. Click **Add**
5. Click **Redeploy**

## Step 5: Verify Deployment

Your site is live at: `https://cv-portfolio-XXXX.vercel.app`

Test the chatbot:
1. Ask: _"Tell me about your AI annotation work"_
2. It should respond with CV context

## ✅ Done!

Your portfolio is live and searchable. Share the link!

---

## 🔄 Making Changes

After deployment, changes are automatic:

```bash
# Make changes locally
nano app/components/ChatInterface.tsx

# Push to GitHub
git add .
git commit -m "Update chatbot colors"
git push

# Vercel auto-deploys from main branch
# Check status at vercel.com/dashboard
```

## 🆘 Troubleshooting

### "HuggingFace API key not found"
- Go to Vercel **Settings** → **Environment Variables**
- Verify `HUGGINGFACE_API_KEY` is added
- Redeploy

### "Chatbot not responding"
- Check API key is correct
- Wait 30 seconds (cold start)
- Check HuggingFace status: https://status.huggingface.co

### "Rate limit exceeded"
- HuggingFace free tier limits to ~30 req/min
- Wait a few minutes before retrying
- Consider upgrading to paid tier

---

**Your portfolio is now live!** 🎉

Next, consider:
1. Adding a custom domain in Vercel settings
2. Updating your LinkedIn with the portfolio link
3. Enhancing the CV data with more projects
