// components/sections/ProjectsSection.tsx
import Link from "next/link"; // CHANGE
import Card from "@/components/ui/Card";
import { projects } from "@/lib/data/projects";
import { cx } from "@/lib/cx";

export default function ProjectsSection() {
  return (
    <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <Link
          key={p.title}
          href={p.href}
          className="group block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
        >
          {/* CHANGE: hover & “ngangkat” dari Card hover */}
          <Card hover className="h-full p-6 md:p-7">
            <div className="flex h-full flex-col">
              <span
                className={cx(
                  "inline-block w-fit rounded-full px-3 py-1 text-xs font-medium",
                  p.tag === "Rentalan" && "bg-blue-500/15 text-blue-300",
                  p.tag === "Android Projects" && "bg-emerald-500/15 text-emerald-300"
                )}
              >
                {p.tag}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.summary}</p>

              <ul className="mt-4 space-y-1 text-sm text-white/75">
                {p.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>

              {/* CHANGE: CTA nempel bawah */}
              <div className="mt-auto pt-5">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition group-hover:text-white/85">
                  <span>Open details</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
// CHANGE: Link pakai next/link