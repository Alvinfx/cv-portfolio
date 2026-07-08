# ⚡ Quick Start (3 steps)

## 1️⃣ Get API Key
https://huggingface.co/settings/tokens → Create token → Copy

## 2️⃣ Set Up Local
```bash
npm install
echo "HUGGINGFACE_API_KEY=your_token_here" > .env.local
npm run dev
```

## 3️⃣ Deploy
```bash
npm i -g vercel && vercel
# Add your HUGGINGFACE_API_KEY when prompted
```

**Done!** Your portfolio is live.

---

## Common Customizations

### Change CV Content
Edit: `data/cv/cv-data.ts`
- Update `cvData` array with your sections
- Change `contactInfo` with your details

### Change Colors
Search & replace in components:
- `amber-500` → your color
- `slate-900` → your background color

### Change LLM Model
Edit: `app/api/chat/route.ts`
- Find: `mistralai/Mistral-7B-Instruct-v0.1`
- Replace with any HuggingFace model

---

## Links

- 📖 Full Docs: `README.md`
- 🚀 Deployment: `DEPLOYMENT.md`
- 💬 Chat API: `app/api/chat/route.ts`
- 📋 CV Data: `data/cv/cv-data.ts`
- 🎨 Styles: `app/globals.css`
