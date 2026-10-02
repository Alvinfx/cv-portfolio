import type { Metadata } from "next";
import { Icon } from "@/app/components/Icon";
import { WorkPageShell } from "@/app/components/WorkPageShell";

export const metadata: Metadata = {
  title: "Ace One Autos Ltd | Chidozirim Ahuakagha",
  description: "Product design, full-stack development, and deployment case study for Ace One Autos Ltd.",
};

const scope = [
  "UI/UX design",
  "Website structure and user journeys",
  "Frontend development",
  "Backend development",
  "Responsive implementation",
  "Form and customer interaction flows",
  "Testing",
  "Production deployment",
];

const liveFeatures = [
  "Vehicle stock browsing",
  "Part-exchange enquiries",
  "Test-drive booking",
  "Vehicle sourcing and request-a-vehicle flows",
  "General customer enquiries",
  "Business and contact information",
  "WhatsApp contact",
  "Responsive navigation and layouts",
];

export default function AceOneAutosPage() {
  return (
    <WorkPageShell
      eyebrow="Featured Client Project"
      title="Ace One Autos Ltd"
      description="A complete website redesign and development project for a UK automotive business."
      meta={[
        { label: "Client", value: "Ace One Autos Ltd" },
        { label: "Location", value: "Glasgow, United Kingdom" },
        { label: "Role", value: "Product Designer & Full-Stack Developer" },
        { label: "Status", value: "Live" },
      ]}
      actions={
        <a href="https://aceoneautosltd.co.uk" target="_blank" rel="noopener noreferrer" className="button-accent">
          View Live Site <Icon name="external" size={15} />
        </a>
      }
    >
      <section className="section-shell">
        <div className="site-container grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="section-heading">End-to-end responsibility from design to deployment.</h2>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.75] text-[var(--color-ink-2)]">
            <p>Ace One Autos Ltd is a Glasgow-based automotive business selling used vehicles to customers across the UK.</p>
            <p>I worked on the project from product and interface design through frontend development, backend development, and production deployment.</p>
            <p>The project gave me end-to-end responsibility for turning the business requirements into a working digital product.</p>
          </div>
        </div>

        <div className="site-container mt-12 overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-paper)]">
          <div className="flex h-9 items-center gap-1.5 border-b border-[var(--color-line)] px-4">
            <span className="h-2 w-2 rounded-full bg-[#df6a62]" />
            <span className="h-2 w-2 rounded-full bg-[#dfb858]" />
            <span className="h-2 w-2 rounded-full bg-[#5dad78]" />
            <span className="ml-4 text-[10px] text-[var(--color-muted)]">aceoneautosltd.co.uk</span>
          </div>
          <div className="site-preview-frame h-[500px] md:h-[620px]">
            <iframe src="https://aceoneautosltd.co.uk/" title="Ace One Autos live website" loading="lazy" tabIndex={-1} />
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--color-surface)]">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Starting Point</p>
            <h2 className="section-heading">A website improvement that became a broader redesign and rebuild.</h2>
            <p className="body-copy mt-6">The project began as an improvement to the company&apos;s existing website.</p>
            <p className="body-copy mt-4">As I reviewed the existing experience and the way customers interacted with the business, the scope developed into a broader redesign and rebuild.</p>
            <p className="body-copy mt-4">The goal was to create a clearer customer journey while giving the business a stronger foundation for handling vehicle enquiries and other customer actions online.</p>
          </div>
          <div>
            <p className="eyebrow">My Role</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {scope.map((item) => <div key={item} className="surface-card p-4 text-[13px] font-medium">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Current Live Experience</p>
              <h2 className="section-heading">Customer journeys available on the deployed site.</h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {liveFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-[var(--color-line)] pb-3 text-[13px] text-[var(--color-ink-2)]">
                    <Icon name="check" size={15} className="mt-0.5 shrink-0 text-[var(--color-accent-deep)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Design Approach</p>
              <div className="space-y-4 text-[15px] leading-[1.75] text-[var(--color-ink-2)]">
                <p>The interface direction focused on clear navigation, vehicle presentation, simple enquiry journeys, mobile usability, consistent interface patterns, clear calls to action, and easy access to important business information.</p>
                <p>After establishing the product and design direction, I implemented the customer-facing frontend and the required backend as part of the same project.</p>
                <p>I also deployed the finished product to production.</p>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[10px] border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-7 md:p-9">
            <p className="eyebrow">Outcome</p>
            <p className="max-w-[850px] text-[22px] font-semibold leading-[1.35] tracking-[-.025em] text-[var(--color-ink)]">
              The project resulted in a fully deployed website that customers can use to browse vehicles and interact with the business online.
            </p>
          </div>
        </div>
      </section>
    </WorkPageShell>
  );
}
