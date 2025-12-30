// components/layout/Topbar.tsx
"use client";

import Link from "next/link"; // CHANGE
import { useState } from "react";
import { usePathname } from "next/navigation";

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
      // CHANGE: inline style dibuang, pakai css var dari globals.css
      className="
        sticky top-0 z-40 backdrop-blur
        border-b border-white/10
        bg-[rgb(var(--bg)/0.86)]
        shadow-[0_6px_18px_rgba(0,0,0,0.18)]
      "
      style={{
        // CHANGE: gradient tipis, tapi masih aman (tetap inline kecil)
        backgroundImage:
          "linear-gradient(180deg, rgba(36,150,237,0.09) 0%, rgba(36,150,237,0.03) 55%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            aria-label="Open menu"
            aria-expanded={open}
          >
            ☰
          </button>

          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            YODHA.
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "text-sm transition pb-1",
                  active ? "text-white" : "text-white/70 hover:text-white/90",
                  // CHANGE: underline pakai accent var
                  active ? "border-b-2 border-[rgb(var(--accent))]" : "border-b-2 border-transparent",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* CHANGE: tombol accent tanpa onMouseEnter */}
        <Link
          href="/contact"
          className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition btn-accent"
        >
          Let’s talk
        </Link>
      </div>

      {open ? (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="p-2">
              {links.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-white/5",
                      active ? "text-white" : "text-white/75",
                    ].join(" ")}
                  >
                    <span>{l.label}</span>
                    {active ? (
                      <span className="text-xs font-semibold text-[rgb(var(--accent))]">●</span>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
// CHANGE: inline style dibuang, pakai css var dari globals.css
// CHANGE: gradient tipis, tapi masih aman (tetap inline kecil)
// CHANGE: tombol accent tanpa onMouseEnter