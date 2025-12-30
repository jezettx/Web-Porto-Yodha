// components/ui/Card.tsx
import { cx } from "@/lib/cx";
import { colors } from "@/lib/colors";

type Props = {
  className?: string;
  hover?: boolean;
  children: React.ReactNode;
};

export default function Card({ className, hover, children }: Props) {
  return (
    <div
      className={cx(
        // CHANGE: base card lebih soft & bersih
        "rounded-2xl border backdrop-blur",
        `border-[rgb(${colors.borderSoft})] bg-[rgb(${colors.surface.base})]`,

        // CHANGE: hover behavior natural (angkat dikit, shadow dalam)
        hover &&
          [
            "transition-all duration-200 ease-out",
            "hover:-translate-y-1",
            `hover:bg-[rgb(${colors.surface.hover})]`,
            `hover:border-[rgb(${colors.borderHover})]`,
            "hover:shadow-2xl hover:shadow-black/35",
          ].join(" "),

        className
      )}
    >
      {children}
    </div>
  );
}
// CHANGE: hover effect ditingkatkan untuk UX lebih baik