import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "Yodha — Portfolio",
  description: "Portfolio of Frydan Yodha Pratama",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#070b1a] text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
