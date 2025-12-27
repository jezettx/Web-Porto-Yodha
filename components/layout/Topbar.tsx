// components/layout/Topbar.tsx
"use client";

import { colors } from "@/lib/colors";

export default function Topbar({ onMenu }: { onMenu?: () => void }) {
  return (
    <div
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        // sedikit lebih gelap dari background baru, tapi masih biru
        backgroundColor: `rgba(${colors.bg}, 0.86)`,

        // wash biru tipis banget, jangan “ngecat”
        backgroundImage:
          "linear-gradient(180deg, rgba(36,150,237,0.09) 0%, rgba(36,150,237,0.03) 55%, rgba(0,0,0,0) 100%)",

        // garis pemisah halus, biar topbar jelas tapi ga ganggu
        borderBottom: "1px solid rgba(255,255,255,0.07)",

        //Shadow halus biar topbar “ngambang”
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          {onMenu ? (
            <button
              onClick={onMenu}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            >
              ☰
            </button>
          ) : null}

          <p className="text-sm font-semibold tracking-wide text-white">
            YODHA.
          </p>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-white/70 hover:text-white transition" href="/">
            Home
          </a>
          <a className="text-sm text-white/70 hover:text-white transition" href="/projects">
            Projects
          </a>
          <a className="text-sm text-white/70 hover:text-white transition" href="/experience">
            Experience
          </a>
          <a className="text-sm text-white/70 hover:text-white transition" href="/contact">
            Contact
          </a>
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
    </div>
  );
}
