# Chidozirim Ahuakagha Portfolio

Portfolio for Chidozirim Ahuakagha, positioned around product design, software development, AI development, and workflow automation.

The site is a single Next.js application with focused project case studies and a floating RAG-based Portfolio Assistant.

## Current stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Groq chat completions API
- Custom local retrieval over verified portfolio data
- Vercel deployment

## Portfolio structure

The homepage is intentionally curated around current commercially relevant work:

1. Hero
2. Selected Work
3. About
4. Services
5. How I Work
6. Tools
7. Contact
8. Footer

Featured project routes:

- /work/ace-one-autos
- /work/epsilon-ai
- /work/promptvault
- /work/chainpulse
- /work/carlink

Historical verified work remains available in the RAG knowledge base even when it is not featured prominently on the homepage.

## Portfolio Assistant architecture

The assistant preserves the existing local RAG architecture:

1. A visitor asks a question through the floating assistant.
2. POST /api/chat receives the conversation.
3. lib/rag.ts maps the question to relevant verified entries in data/cv/cv-data.ts.
4. The retrieved portfolio context is injected into a grounded system prompt.
5. Groq generates a response using openai/gpt-oss-120b.
6. The API returns the answer plus source links to the relevant portfolio section or case-study route.

The system prompt instructs the assistant not to invent experience, clients, tools, metrics, project outcomes, or private projects. If the portfolio does not support an answer, it must say that the information is unavailable.

## Environment

Create .env.local in the project root:

    GROQ_API_KEY=your_groq_api_key_here

Never commit .env.local or API keys.

The repository includes .env.example as the safe variable template.

## Local development

    npm install
    npm run dev

Open http://localhost:3000.

## Validation

    npm run lint
    npm run build

A GitHub Actions workflow also runs lint and build checks for pushes and pull requests.

## Deployment

The production site is deployed on Vercel from the GitHub repository.

Required production environment variable:

    GROQ_API_KEY

After updating main, Vercel can build and deploy the current application using the configured environment variable.

## Key files

    app/
    ├── api/chat/route.ts
    ├── components/
    │   ├── FloatingChat.tsx
    │   ├── HeroSection.tsx
    │   ├── ProjectsSection.tsx
    │   ├── AboutSection.tsx
    │   ├── ServicesSection.tsx
    │   ├── ProcessSection.tsx
    │   ├── ToolsSection.tsx
    │   └── ContactSection.tsx
    ├── work/
    │   ├── ace-one-autos/page.tsx
    │   ├── epsilon-ai/page.tsx
    │   ├── promptvault/page.tsx
    │   ├── chainpulse/page.tsx
    │   └── carlink/page.tsx
    ├── globals.css
    ├── layout.tsx
    └── page.tsx

    data/cv/cv-data.ts
    lib/rag.ts
    public/

## Updating portfolio knowledge

Use data/cv/cv-data.ts as the factual portfolio knowledge source.

When adding a verified project or skill:

1. Add or update the relevant CVSection.
2. Add retrieval terms in lib/rag.ts.
3. Add a project-specific source route in app/api/chat/route.ts when appropriate.
4. Test both direct questions and broad questions before deployment.

Do not add unverified metrics, clients, outcomes, tools, or completion states.
