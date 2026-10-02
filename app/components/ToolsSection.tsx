const groups = [
  { title: "Design", tools: ["Figma", "Canva"] },
  { title: "Development", tools: ["Python", "TypeScript", "React", "FastAPI", "Git"] },
  { title: "Automation", tools: ["n8n", "APIs", "Webhooks"] },
  { title: "AI", tools: ["LLM integrations", "LangGraph", "AI evaluation workflows"] },
  { title: "Data", tools: ["SQLite"] },
];

export function ToolsSection() {
  return (
    <section id="tools" className="section-shell">
      <div className="site-container">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Tools</p>
            <h2 className="section-heading">A curated toolkit for the work I do.</h2>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[8px] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((group) => (
            <div key={group.title} className="bg-[var(--color-surface)] p-5">
              <p className="text-[12px] font-semibold">{group.title}</p>
              <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-[var(--color-muted)]">
                {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
