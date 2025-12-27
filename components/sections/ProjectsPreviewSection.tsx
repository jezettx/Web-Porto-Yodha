// components/sections/ProjectsPreviewSection.tsx
import Card from "@/components/ui/Card";
import { colors } from "@/lib/colors";

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
    href: "/projects/xiore",
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
      {/* section label */}
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
        Selected projects where these principles were applied
      </p>

      {/* projects */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.href} className="group block">
            <Card className="h-full p-6 md:p-7" hover>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <TypeLabel type={p.type} />
                  <h3 className="mt-2 text-base font-semibold leading-snug text-white md:text-lg">
                    {p.title}
                  </h3>
                </div>

                <span
                  className="shrink-0 text-sm font-medium transition-transform group-hover:translate-x-1"
                  style={{ color: `rgb(${colors.accent.base})` }}
                >
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
          </a>
        ))}
      </div>

      {/* CTA row */}
      <div className="pt-4">
        <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:mx-auto sm:grid-cols-3 sm:items-center">
          <a
            href="/experience"
            className="order-2 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white sm:order-1"
          >
            Experience &amp; Roles
          </a>

          <a
            href="/projects"
            className="order-1 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:order-2"
          >
            Explore Projects
          </a>

          <a
            href="/contact"
            className="order-3 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
