"use client";

import Topbar from "./Topbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { colors } from "@/lib/colors";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noBox = pathname === "/contact";

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: `rgb(${colors.bg})`,
        // kuncinya: ada "wash" di tengah (bukan cuma glow pojok)
        backgroundImage:
          // top wash (biar area header + hero ga pekat)
          "linear-gradient(180deg, rgba(36,150,237,0.18) 0%, rgba(36,150,237,0.06) 28%, rgba(0,0,0,0) 60%)," +
          // center wash (ngangkat bagian konten)
          "radial-gradient(900px 520px at 50% 28%, rgba(36,150,237,0.22), transparent 62%)," +
          // left highlight
          "radial-gradient(1100px 650px at 18% -10%, rgba(36,150,237,0.22), transparent 60%)," +
          // right highlight
          "radial-gradient(900px 520px at 85% 0%, rgba(36,150,237,0.14), transparent 55%)," +
          // bottom subtle
          "radial-gradient(900px 520px at 50% 115%, rgba(36,150,237,0.10), transparent 62%)",
      }}
    >
      <Topbar />

      <main className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-8">
        {noBox ? (
          <>
            {children}
            <Footer />
          </>
        ) : (
          <>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.42)]">
              <div className="p-8 md:p-10 lg:p-12">{children}</div>
            </div>
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}
