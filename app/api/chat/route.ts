import { NextRequest, NextResponse } from "next/server";
import { retrieveContext, formatContextForLLM } from "@/lib/rag";

const SYSTEM_PROMPT = `You are the portfolio assistant for Chidozirim Ahuakagha. Answer only from the portfolio context supplied below. Keep answers concise, specific, and professional. Mention dates, tools, projects, or roles only when they appear in the supplied context. Do not add companies, clients, metrics, qualifications, or claims that are not in the context. If the context does not support an answer, say that you could not find that information in the portfolio and suggest a related question.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

function sectionHref(id: string) {
  if (id === "project-chainpulse") return "#chainpulse";
  if (id === "project-carlink") return "#carlink";
  if (id === "video-channels") return "#video";
  if (id.startsWith("project-")) return "#projects";
  if (id.startsWith("exp-")) return "#experience";
  if (id.startsWith("skills-")) return "#skills";
  if (id === "education" || id === "certifications") return "#skills";
  if (id === "contact") return "#contact";
  return "#about";
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
    const systemMessage = `${SYSTEM_PROMPT}\n\n${formattedContext}`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 500,
        temperature: 0.35,
        messages: [
          { role: "system", content: systemMessage },
          ...messages.map((message: Message) => ({ role: message.role, content: message.content })),
        ],
      }),
    });

    if (!response.ok) {
      const errorPayload = await response.json();
      throw new Error(errorPayload.error?.message || `Groq API error: ${response.status}`);
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
