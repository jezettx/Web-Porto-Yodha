// components/layout/Topbar.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { colors } from "@/lib/colors";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Topbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        backgroundColor: `rgba(${colors.bg}, 0.86)`,
        backgroundImage:
          "linear-gradient(180deg, rgba(36,150,237,0.09) 0%, rgba(36,150,237,0.03) 55%, rgba(0,0,0,0) 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          {/* mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            aria-label="Open menu"
            aria-expanded={open}
          >
            ☰
          </button>

          <p className="text-sm font-semibold tracking-wide text-white">
            YODHA.
          </p>
        </div>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition"
                style={{
                  color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.70)",
                  borderBottom: active ? `2px solid rgb(${colors.accent.base})` : "2px solid transparent",
                  paddingBottom: 6,
                }}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <a
          href="/contact"
          className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition"
          style={{ backgroundColor: `rgb(${colors.accent.base})` }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `rgb(${colors.accent.hover})`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `rgb(${colors.accent.base})`;
          }}
        >
          Hire / Collab
        </a>
      </div>

      {/* mobile dropdown */}
      {open ? (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur">
            <div className="p-2">
              {links.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-white/5"
                    style={{
                      color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.75)",
                    }}
                  >
                    <span>{l.label}</span>
                    {active ? (
                      <span
                        className="text-xs font-semibold"
                        style={{ color: `rgb(${colors.accent.base})` }}
                      >
                        ●
                      </span>
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
