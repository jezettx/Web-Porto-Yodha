// app/projects/xiore-cosrent/page.tsx
import Link from "next/link";
import Card from "@/components/ui/Card"; // CHANGE

const tags = ["operations", "customer flow", "fulfillment", "multi-city", "quality control"];

export default function XioreCosrentProjectPage() {
  return (
    // CHANGE: max-w diperkecil biar desktop gak “kegedean”
    <main className="mx-auto w-full max-w-4xl px-5 py-10 md:px-8 md:py-14">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
        >
          ← Back to Projects
        </Link>

        <div className="text-xs text-white/45">/projects/xiore-cosrent</div>
      </div>

      <header className="mt-8 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Xiore Cosrent — Rental Operations & Customer Flow
        </h1>

        <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
          Built an operating system for cosplay rental: catalog → booking → QC → delivery/event usage → return.
          The goal was operational clarity and reliable execution, not “feature overload”.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <InfoCard title="Problem">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>Rental flow is easy to break: double booking, missing items, unclear QC, messy returns.</li>
            <li>Event-day operations amplify risk: once it fails, recovery is expensive and visible.</li>
            <li>Multi-city coordination adds inventory + delivery complexity.</li>
          </ul>
        </InfoCard>

        <InfoCard title="My Role">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>Co-founded and designed the end-to-end operational flow.</li>
            <li>Defined SOP for QC, delivery handoff, and return verification.</li>
            <li>Acted as ops stabilizer: anticipate bottlenecks 2–3 steps ahead.</li>
          </ul>
        </InfoCard>

        <InfoCard title="System Flow (High Level)">
          <div className="space-y-3 text-white/70">
            <FlowRow step="1" text="Catalog & availability checks (prevent overlap)" />
            <FlowRow step="2" text="Booking confirmation + customer handling (clear state transitions)" />
            <FlowRow step="3" text="QC checklist before handoff (reduce disputes & missing parts)" />
            <FlowRow step="4" text="Delivery / event usage coordination (time-based control)" />
            <FlowRow step="5" text="Return verification + cleaning/repair routing" />
          </div>
        </InfoCard>

        <InfoCard title="Key Decisions">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>
              Prioritized <span className="text-white/85">clarity of states</span> (booking → prepared → delivered → returned)
              over adding extra UI features.
            </li>
            <li>
              Put <span className="text-white/85">QC as a gate</span> before delivery to reduce conflict and rework.
            </li>
            <li>
              Designed flow to support <span className="text-white/85">event-day execution</span> where timing is strict.
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Outcome">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>Operational steps became auditable and repeatable.</li>
            <li>Reduced ambiguity during busy events (handoff/return is clearer).</li>
            <li>Better team coordination because the flow is explicit, not “in someone’s head”.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Next Improvements">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>Inventory status dashboard per-city (ready / rented / maintenance).</li>
            <li>Checklist templates per costume set for faster QC.</li>
            <li>Event calendar integration to forecast load and delivery schedules.</li>
          </ul>
        </InfoCard>
      </section>
    </main>
  );
}

// CHANGE: pakai Card global biar style konsisten + border gak “garis putih”
function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="rounded-3xl p-6 md:p-7">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed">{children}</div>
    </Card>
  );
}

function FlowRow({ step, text }: { step: string; text: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-white/75">
        {step}
      </div>
      <div className="text-sm text-white/70">{text}</div>
    </div>
  );
}
// CHANGE: Link pakai next/link
// CHANGE: Card hover handling di dalam Card component
// CHANGE: perbaikan route Xiore Cosrent
// CHANGE: tombol bawah pake border & bg varian white/10
// CHANGE: penambahan tombol Get in Touch