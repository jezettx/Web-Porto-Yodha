"use client";

import Link from "next/link"; // CHANGE
import { useState } from "react";
import Card from "@/components/ui/Card";
import { experienceCategories } from "@/lib/data/experience";

type CategoryKey = (typeof experienceCategories)[number]["key"];

export default function ExperienceSection() {
  const [active, setActive] = useState<CategoryKey>(experienceCategories[0].key);
  const current = experienceCategories.find((c) => c.key === active)!;

  return (
    <section id="experience" className="mt-10">
      {/* MOBILE CATEGORY CHIPS */}
      <div className="mb-6 md:hidden">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {experienceCategories.map((c) => {
            const isActive = c.key === active;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={[
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
                  isActive
                    ? "bg-blue-500/20 text-blue-200"
                    : "bg-white/5 text-white/70 hover:bg-white/10",
                ].join(" ")}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[260px_1fr]">
        {/* SIDEBAR */}
        <Card className="hidden p-3 md:block">
          <div className="space-y-1">
            {experienceCategories.map((c) => {
              const isActive = c.key === active;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={[
                    "relative w-full rounded-xl px-3 py-2 pl-6 text-left text-sm transition",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/5",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute left-2 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full",
                      isActive ? "bg-blue-400" : "bg-transparent",
                    ].join(" ")}
                  />
                  {c.title}
                </button>
              );
            })}
          </div>
        </Card>

        {/* CONTENT */}
        <Card className="p-6">
          {/* HEADER + CTA (ala Stevan, tapi kontekstual) */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm font-medium text-white">
              {current.title}
            </div>

            <Link
              href="/experience/technologies"
              className="
                inline-flex items-center gap-2
                rounded-xl border border-white/10 bg-white/5
                px-4 py-2 text-xs text-white/75
                transition hover:bg-white/10 hover:text-white
              "
            >
              Technologies &amp; Tools →
            </Link>
          </div>

          <ul className="space-y-2 text-sm text-white/75">
            {current.items.map((item) => (
              <li
                key={`${item.title}-${item.meta}`}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-3"
              >
                <div className="text-sm font-medium text-white">
                  {item.title}
                </div>
                <div className="mt-0.5 text-xs text-white/60">
                  {item.meta}
                </div>
                <div className="mt-1 text-sm text-white/75">
                  {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
// CHANGE: Link pakai next/link untuk konsisten