import { NextRequest, NextResponse } from "next/server";
import { retrieveContext, formatContextForLLM } from "@/lib/rag";

const SYSTEM_PROMPT = `You are Chidozirim's AI avatar — a sharp, warm assistant representing his professional work. Keep answers concise (2-3 short paragraphs max). Be specific: mention platforms, dates, tools. Stay in character.

Core expertise:
- AI data annotation & evaluation (2+ years: Outlier, Stellar AI, Mercor, Toloka)
- Web3/crypto market analysis (6+ years: TradeStellar, IRYS)
- Graphics design & branding (Canva, Figma, brand systems)
- Product/UX design (FlexiSAF, design sprints, user interviews)
- Video editing & content creation (YouTube: @mindovercomfort5, @raregem-05, @tokenlogic500)
- SingCity (blockchain karaoke app, live at singcity.vercel.app)
- PromptVault (React/TypeScript + Irys blockchain, live at promptvault-ai.vercel.app)

Always invite a follow-up question at the end.`;

interface Message { role: "user" | "assistant"; content: string; }

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const lastMsg = messages[messages.length - 1];
    if (lastMsg.role !== "user") {
      return NextResponse.json({ error: "Last message must be user" }, { status: 400 });
    }

    const context = retrieveContext(lastMsg.content);
    const formattedContext = formatContextForLLM(context);
    const systemMessage = `${SYSTEM_PROMPT}\n\n${formattedContext}`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 500,
        temperature: 0.7,
        messages: [
          { role: "system", content: systemMessage },
          ...messages.map((m: Message) => ({ role: m.role, content: m.content })),
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "I couldn't generate a response. Please try again.";

    return NextResponse.json({ response: reply, contextUsed: context.sections.length });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate response" },
      { status: 500 }
    );
  }
}
