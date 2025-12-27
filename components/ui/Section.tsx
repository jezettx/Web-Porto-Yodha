// components/ui/Section.tsx
import { cx } from "@/lib/cx";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  flush?: boolean; // NEW
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, className, flush, children }: Props) {
  return (
    <section
      id={id}
      className={cx(
        flush
          ? "py-10 scroll-mt-24"
          : "w-full py-12", // keep old
        className
      )}
    >
      {title && <h2 className="text-2xl font-semibold text-center">{title}</h2>}
      {subtitle && <p className="mx-auto mt-2 max-w-2xl text-white/70 text-center">{subtitle}</p>}
      {children}
    </section>
  );
}