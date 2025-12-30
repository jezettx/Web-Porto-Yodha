// app/experience/technologies/page.tsx
import Link from "next/link";
import Card from "@/components/ui/Card";

// CHANGED: Added logo mapping for technologies
const logoMap: Record<string, string> = {
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Lua": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "IntelliJ IDEA": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Sublime Text": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sublimetext.svg",
};

// CHANGE: bukan “Technologies I Use” (skill wall),
// tapi “Tools I’ve used to build and run systems” (kontekstual).

const groups = [
  {
    title: "Software & Systems",
    desc: "Core technologies used to build products and system behavior.",
    items: [
      { name: "Next.js", note: "Web projects and structured content delivery." },
      { name: "Flutter", note: "Mobile app development (Remote Alarm)." },
      { name: "Firebase", note: "Messaging paths, triggers, and realtime coordination." },
      { name: "Java", note: "Coursework and foundational programming practice." },
    ],
  },
  {
    title: "Programming & Tooling",
    desc: "Languages used for scripting, automation, and performance-oriented work.",
    items: [
      { name: "Lua", note: "Game scripting and rapid prototyping." },
      { name: "C++", note: "Low-level, performance-focused programming and tooling." },
      { name: "Python", note: "Automation scripts and practical tooling." },
    ],
  },
  {
    title: "Workflow & Environment",
    desc: "Tools that improve speed, clarity, and iteration.",
    items: [
      { name: "Android Studio", note: "Android development and device testing." },
      { name: "VS Code", note: "Primary editor for day-to-day work." },
      { name: "IntelliJ IDEA", note: "Java development and coursework projects." },
      { name: "Docker", note: "Reproducible local environments for development." },
      { name: "Git & GitHub", note: "Versioning and collaboration workflow." },
      {name : "Sublime Text", note: "Lightweight text editing and quick file edits."},
    ],
  },
];



export default function TechnologiesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 md:px-8 md:py-14">
      {/* TOP NAV */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
        >
          ← Back to Experience
        </Link>
      </div>

      {/* HEADER */}
      <header className="mt-8 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Technologies & Tools
        </h1>

        <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
          I use tools as enablers, not as goals. Each item below is listed because it
          supports a real workflow constraint or delivery requirement.
        </p>
      </header>

      {/* CONTENT */}
      <section className="mt-10 space-y-4">
        {groups.map((g) => (
          <Card key={g.title} className="rounded-3xl p-6 md:p-7">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-white">{g.title}</h2>
              <p className="text-sm text-white/65">{g.desc}</p>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {g.items.map((it) => (
                <div
                  key={it.name}
                  // CHANGED: Added flex layout to position logo on the right
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{it.name}</div>
                    <div className="mt-1 text-sm text-white/70">{it.note}</div>
                  </div>
                  {/* CHANGED: Display technology logo on the right side */}
                  {logoMap[it.name] && (
                    <div className="ml-4 shrink-0">
                      <img
                        src={logoMap[it.name]}
                        alt={`${it.name} logo`}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain filter invert"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
