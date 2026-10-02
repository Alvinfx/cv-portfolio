import { NextRequest, NextResponse } from "next/server";
import { formatContextForLLM, retrieveContext } from "@/lib/rag";

const SYSTEM_PROMPT = "You are the portfolio assistant for Chidozirim Ahuakagha, whose current professional positioning is Product Designer & AI Automation Developer. Answer only from the verified portfolio context supplied below. Keep answers concise, useful, and professional. Mention projects, dates, tools, responsibilities, status, or outcomes only when they appear in the supplied context. Do not fabricate experience, metrics, clients, tools, revenue, conversion results, project completion states, or technical capabilities. Do not infer private or undisclosed projects. If the supplied context does not contain the requested information, clearly say that the portfolio does not contain information about that topic. Older verified experience such as AI evaluation, Web3, TradeStellar, FlexiSAF, IRYS, graphic design, and content work can be discussed when it appears in the supplied context.";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function sectionHref(id: string) {
  if (id === "project-ace-one-autos") return "/work/ace-one-autos";
  if (id === "project-epsilon-ai") return "/work/epsilon-ai";
  if (id === "project-promptvault") return "/work/promptvault";
  if (id === "project-chainpulse") return "/work/chainpulse";
  if (id === "project-carlink") return "/work/carlink";
  if (id.startsWith("project-")) return "/#projects";
  if (id.startsWith("exp-")) return "/#about";
  if (id.startsWith("skills-")) return "/#tools";
  if (id === "education" || id === "certifications") return "/#about";
  if (id === "contact") return "/#contact";
  return "/#about";
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json({ error: "Last message must be from the user" }, { status: 400 });
    }

    const context = retrieveContext(lastMessage.content);
    const formattedContext = formatContextForLLM(context);
    const systemMessage = SYSTEM_PROMPT + "\n\n" + formattedContext;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.GROQ_API_KEY,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        max_tokens: 500,
        temperature: 0.2,
        messages: [
          { role: "system", content: systemMessage },
          ...messages.map((message: Message) => ({ role: message.role, content: message.content })),
        ],
      }),
    });

    if (!response.ok) {
      const errorPayload = await response.json();
      throw new Error(errorPayload.error?.message || "Groq API error: " + response.status);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "I could not generate a response. Please try again.";
    const sources = context.sections
      .filter((section) => section.id !== "summary")
      .slice(0, 4)
      .map((section) => ({ id: section.id, title: section.title, href: sectionHref(section.id) }));

    return NextResponse.json({
      response: reply,
      contextUsed: context.sections.length,
      relevanceScore: context.relevanceScore,
      sources,
    });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate response" },
      { status: 500 },
    );
  }
}
