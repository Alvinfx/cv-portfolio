# Chidozirim's Interactive AI Portfolio

A full-featured interactive portfolio with an AI chatbot powered by HuggingFace's free LLM tier. Ask about AI annotation, Web3 research, graphics design, and more.

## 🎨 Design Approach

- **Two-column layout**: Chat on left, contextual content on right
- **RAG-powered chatbot**: Conversations drive discovery through your CV
- **Zero-cost stack**: Vercel free tier + HuggingFace free inference
- **Mobile responsive**: Chat-first on mobile, side-by-side on desktop

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **LLM**: HuggingFace Inference API (Mistral-7B, free tier)
- **RAG**: Custom keyword-based retrieval system
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ and npm
- HuggingFace API key (free, from https://huggingface.co/settings/tokens)
- Vercel account (optional, for deployment)

## 🚀 Quick Start

### 1. Clone & Install

```bash
cd cv-portfolio
npm install
```

### 2. Set Up Environment

Create `.env.local` in the project root:

```env
HUGGINGFACE_API_KEY=your_api_key_here
```

**Get your HuggingFace API Key:**
1. Go to https://huggingface.co/settings/tokens
2. Click "New token"
3. Give it a name, select "read" role
4. Copy the token to `.env.local`

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

During setup:
1. Link your GitHub repo
2. Add environment variable: `HUGGINGFACE_API_KEY=your_key`
3. Deploy

## 📁 Project Structure

```
cv-portfolio/
├── app/
│   ├── api/
│   │   └── chat/route.ts          # Chat API endpoint
│   ├── components/
│   │   ├── ChatInterface.tsx       # Chat UI
│   │   └── ContentPanel.tsx        # Right sidebar content
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                    # Main layout
├── data/
│   └── cv/
│       └── cv-data.ts             # Your CV data + contact info
├── lib/
│   └── rag.ts                      # RAG retrieval system
├── public/
├── .env.example                    # Copy to .env.local
└── package.json
```

## 🔧 Customization

### Update Your CV Data

Edit `data/cv/cv-data.ts`:
- **`cvData`**: Add/remove CV sections
- **`contactInfo`**: Update contact details
- **`coreDomains`**: Update your 3 core professional areas

### Change Colors/Theme

Edit Tailwind classes in components:
- Primary accent: Change `amber-500` to your preferred color
- Background: Change `slate-*` colors

### Update LLM Model

In `app/api/chat/route.ts`:
```typescript
model: "mistralai/Mistral-7B-Instruct-v0.1",  // Change this
```

Other free options:
- `meta-llama/Llama-2-7b-chat-hf`
- `tiiuae/falcon-7b-instruct`

## 💡 How the RAG System Works

1. **User asks a question** in the chat
2. **RAG retrieves relevant CV sections** using keyword matching
3. **LLM generates response** with CV context injected
4. **Context sections shown** below each message

Keyword map in `lib/rag.ts` connects queries to CV sections. Extend it for better retrieval.

## ⚠️ Important: HuggingFace Rate Limits

The free tier has limits:
- ~30 requests/minute per token
- First response may take 2-5 seconds (cold start)
- Hitting limits returns `429 error`

**For production**: Use paid HuggingFace tier or self-host LLM.

## 🎯 Future Enhancements

1. **Database RAG**: Migrate to Supabase + pgvector for semantic search
2. **Voice Input**: Add speech-to-text
3. **Dashboard Stats**: Show token usage, popular questions
4. **Theme Toggle**: Light/dark mode
5. **Analytics**: Track conversation topics

## 📝 API Reference

### POST `/api/chat`

Request:
```json
{
  "messages": [
    { "role": "user", "content": "Tell me about your AI work" }
  ]
}
```

Response:
```json
{
  "response": "...",
  "contextUsed": 3,
  "relevanceScore": 85
}
```

## 🐛 Troubleshooting

**"Failed to generate response"**
- Check HuggingFace API key is correct
- Verify internet connection
- Check rate limits (wait a few minutes)

**"Chatbot responses are generic"**
- Check CV data in `data/cv/cv-data.ts` has relevant sections
- Add keywords to `lib/rag.ts` keyword map

**"Mobile layout looks broken"**
- Content panel is hidden on mobile (expected)
- Chat uses full width on small screens

## 📄 License

Personal portfolio - all content is yours to customize.

## 🤝 Support

- Next.js: https://nextjs.org/docs
- HuggingFace: https://huggingface.co/docs
- Tailwind: https://tailwindcss.com/docs

---

**Built with ❤️ | Zero-cost AI portfolio**
