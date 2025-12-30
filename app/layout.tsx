// app/layout.tsx
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "Yodha — Portfolio",
  description: "Portfolio of Frydan Yodha Pratama",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      {/* CHANGE: hapus bg hardcode; background di-handle globals.css biar konsisten */}
      <body className="min-h-screen text-white antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
