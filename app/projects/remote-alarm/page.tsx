// app/projects/remote-alarm/page.tsx
import Link from "next/link";
import Card from "@/components/ui/Card";
import type { ReactNode } from "react";

const tags = ["flutter", "firebase", "android", "background execution", "reliability"];

const githubUrl = "https://github.com/jezettx/alarmuntukkarin.git"; // ganti kalau perlu

export default function RemoteAlarmProjectPage() {
  return (
    <main className="relative isolate mx-auto w-full max-w-4xl px-5 py-10 md:px-8 md:py-14">
      {/* background glow (di dalam page, bukan global) */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.10),transparent_50%)]" />

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
      <header className="mt-8 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Remote Alarm: Cross-device Trigger System
        </h1>

        <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
          A personal alarm system designed to reliably trigger alarms across devices, even when the Android app
          is killed or restricted by the OS. This project prioritizes delivery reliability over UI complexity.
        </p>

        <div className="flex flex-wrap items-end justify-between gap-4 pt-1">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            GitHub Repository →
          </a>
        </div>
      </header>

      {/* content */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <InfoCard title="Problem">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>Android aggressively limits background execution and kills apps under memory or battery pressure.</li>
            <li>Typical real-time listeners stop working once the app is removed from recent tasks.</li>
            <li>Cross-device alarm delivery must work without relying on the UI being open.</li>
          </ul>
        </InfoCard>

        <InfoCard title="My Role">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>Designed system behavior around Android OS constraints.</li>
            <li>Implemented cross-device triggering and delivery acknowledgment.</li>
            <li>Tested real failure cases: app killed, background restricted, network changes.</li>
          </ul>
        </InfoCard>

        <InfoCard title="System Approach (High Level)">
          <div className="space-y-3 text-white/70">
            <FlowRow step="1" text="Device A sends a trigger request (event intent)" />
            <FlowRow step="2" text="Backend dispatches push notification as a reliable wake-up path" />
            <FlowRow step="3" text="Device B receives trigger and activates alarm logic" />
            <FlowRow step="4" text="Device B sends delivery acknowledgment" />
          </div>
        </InfoCard>

        <InfoCard title="Key Decisions">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>
              Treated Android as a <span className="text-white/85">hostile environment</span> by default.
            </li>
            <li>
              Prioritized <span className="text-white/85">delivery reliability</span> over UI polish.
            </li>
            <li>
              Added explicit <span className="text-white/85">acknowledgment</span> to avoid silent failures.
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Outcome">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>Alarms can be triggered across devices even when the app is not running.</li>
            <li>Failure cases are observable instead of “silent and unknown”.</li>
            <li>System behavior aligns with real-world Android constraints.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Next Improvements">
          <ul className="list-disc space-y-2 pl-5 text-white/70">
            <li>Retry and backoff strategy for offline devices.</li>
            <li>User-facing guidance for OEM battery optimization settings.</li>
            <li>Delivery timeline logging for debugging and analysis.</li>
          </ul>
        </InfoCard>
      </section>
    </main>
  );
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
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
