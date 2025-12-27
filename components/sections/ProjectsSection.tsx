import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { projects } from "@/lib/data/projects";
import { cx } from "@/lib/cx";

export default function ProjectsSection() {
  return (
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} hover className="p-6">
            <span
              className={cx(
                "inline-block rounded-full px-3 py-1 text-xs font-medium",
                p.tag === "Rentalan" && "bg-blue-500/15 text-blue-300",
                p.tag === "Android Projects" &&
                  "bg-emerald-500/15 text-emerald-300"
              )}
            >
              {p.tag}
            </span>

            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.summary}</p>

            <ul className="mt-4 space-y-1 text-sm text-white/75">
              {p.highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
  );
}
