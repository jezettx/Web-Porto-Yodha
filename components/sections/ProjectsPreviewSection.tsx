// components/sections/ProjectsPreviewSection.tsx
import Link from "next/link"; // CHANGE
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
    title: "Xiore Cosrent — Rental Operations & Customer Flow",
    desc: "Built the operating system for a costume rental: catalog, booking, QC, delivery, and customer handling.",
    tags: ["operations", "customer flow", "fulfillment"],
    href: "/projects/xiore-cosrent", // CHANGE: fix route (sebelumnya /projects/xiore)
  },
  {
    type: "software",
    title: "Remote Alarm — Cross-device Trigger",
    desc: "Trigger alarms across devices; handling background/kill reliability constraints.",
    tags: ["flutter", "firebase", "reliability"],
    href: "/projects/remote-alarm",
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
      {children}
    </span>
  );
}

function TypeLabel({ type }: { type: Project["type"] }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
      {type}
    </span>
  );
}

export default function ProjectsPreviewSection() {
  return (
    <div className="space-y-8">
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
            {/* CHANGE: hover “ngangkat” udah ditangani Card hover */}
            <Card className="h-full p-6 md:p-7" hover>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <TypeLabel type={p.type} />
                  <h3 className="mt-2 text-base font-semibold leading-snug text-white md:text-lg">
                    {p.title}
                  </h3>
                </div>

                <span className="shrink-0 text-sm font-medium text-[rgb(var(--accent))] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-[15px]">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>

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
// CHANGE: Link pakai next/link
// CHANGE: Card hover handling di dalam Card component
// CHANGE: perbaikan route Xiore Cosrent
// CHANGE: tombol bawah pake border & bg varian white/10
// CHANGE: penambahan tombol Get in Touch