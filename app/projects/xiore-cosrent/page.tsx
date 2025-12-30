// app/projects/xiore-cosrent/page.tsx
import Link from "next/link";
import Image from "next/image"; // NOTE: pakai next/image biar optimized
import Card from "@/components/ui/Card";

const tags = [
  "operations",
  "customer flow",
  "fulfillment",
  "multi-city",
  "quality control",
];

export default function XioreCosrentProjectPage() {
  return (
    // NOTE: relative biar glow absolute bisa nempel ke container ini
    <main className="relative mx-auto w-full max-w-4xl px-5 py-10 md:px-8 md:py-14">
      {/* NOTE: subtle glow background */}
      <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.10),transparent_50%)]" />

      {/* NOTE: content harus di atas glow */}
      <div className="relative z-10">
        {/* top nav */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* header */}
        <header className="mt-8">
          {/* NOTE:
              - jangan pakai flex untuk header, karena logo gampang "nyempil"
              - grid bikin posisi logo bener-bener "kanan" di desktop
          */}
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
            {/* NOTE: mobile logo di atas biar ga aneh */}
            <div className="flex md:hidden">
              <Image
                src="/assets/LogoXiore.png"
                alt="Xiore Cosrent"
                width={72}
                height={72}
                className="h-16 w-16 rounded-xl object-contain opacity-90 drop-shadow-lg"
                priority
              />
            </div>

            {/* title + meta */}
            <div className="min-w-0">
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Xiore Cosrent Cosplay Rental Platform
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Built an operating system for cosplay rental: catalog → booking → QC → delivery/event
                usage → return. The goal was operational clarity and reliable execution, not “feature
                overload”.
              </p>

              {/* tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* instagram link */}
              <div className="mt-4">
                <a
                  href="https://www.instagram.com/xiore.cosrent"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15 hover:text-white"
                >
                  Instagram →
                </a>
              </div>
            </div>

            {/* NOTE: desktop logo bener-bener di kanan */}
            <div className="hidden md:block">
              <Image
                src="/assets/LogoXiore.png"
                alt="Xiore Cosrent"
                width={80}
                height={80}
                className="h-50 w-50 rounded-xl object-contain opacity-90 drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </header>

        {/* content */}
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
                Prioritized <span className="text-white/85">clarity of states</span> (booking → prepared →
                delivered → returned) over adding extra UI features.
              </li>
              <li>
                Put <span className="text-white/85">QC as a gate</span> before delivery to reduce conflict
                and rework.
              </li>
              <li>
                Designed flow to support <span className="text-white/85">event-day execution</span> where
                timing is strict.
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
      </div>
    </main>
  );
}

// NOTE: InfoCard pakai Card global biar konsisten
function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="rounded-3xl p-6 md:p-7">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed">{children}</div>
    </Card>
  );
}

// NOTE: FlowRow biar step tampil konsisten
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
