// components/sections/ProjectsPreviewSection.tsx
import Link from "next/link";
import Card from "@/components/ui/Card";

type Project = {
  type: "business system" | "software";
  title: string;
  desc: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    type: "business system",
    title: "Xiore Cosrent Cosplay Rental Platform",
    desc: "Built the operating system for a costume rental: catalog, booking, QC, delivery, and customer handling.",
    tags: ["operations", "customer flow", "fulfillment"],
    href: "/projects/xiore-cosrent",
  },
  {
    type: "software",
    title: "Remote Alarm — Cross-device Trigger",
    desc: "Trigger alarms across devices; handling background/kill reliability constraints.",
    tags: ["flutter", "firebase", "reliability"],
    href: "/projects/remote-alarm",
  },
];

// CHANGE: type label dibuat lebih subtle (bukan badge)
function TypeLabel({ type }: { type: Project["type"] }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-white/20" />
      <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
        {type}
      </span>
    </div>
  );
}

// CHANGE: tag BUKAN pill/badge, tapi context metadata
function MetaTag({ children }: { children: string }) {
  return (
    <span className="text-[11px] text-white/55">
      {children}
    </span>
  );
}

export default function ProjectsPreviewSection() {
  return (
    <div className="space-y-8">
      {/* CHANGE: heading kecil tetap */}
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
        Selected projects where these principles were applied
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <Card hover className="h-full p-6 md:p-7">
              <div className="flex h-full flex-col">
                
                {/* HEADER */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 space-y-2">
                    <TypeLabel type={p.type} />

                    <h3 className="text-base font-semibold leading-snug text-white md:text-lg">
                      {p.title}
                    </h3>
                  </div>

                  {/* CHANGE: arrow jadi secondary hint */}
                  <span className="shrink-0 text-sm font-medium text-white/40 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* DESC */}
                <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-[15px]">
                  {p.desc}
                </p>

                {/* TAGS */}
                {/* CHANGE: tags ditaruh sebagai metadata, bukan badge */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                  {p.tags.map((t) => (
                    <MetaTag key={t}>{t}</MetaTag>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="pt-4">
        <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:mx-auto sm:grid-cols-3 sm:items-center">
          <Link
            href="/experience"
            className="order-2 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white sm:order-1"
          >
            Experience &amp; Roles
          </Link>

          <Link
            href="/projects"
            className="order-1 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:order-2"
          >
            Explore Projects
          </Link>

          <Link
            href="/contact"
            className="order-3 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
// CHANGE: Link pakai next/link untuk konsisten