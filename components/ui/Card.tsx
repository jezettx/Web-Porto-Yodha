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
        // CHANGE: border dibuat lebih soft biar gak keliatan “garis putih”
        "rounded-2xl border backdrop-blur",
        `border-[rgb(${colors.borderSoft})] bg-[rgb(${colors.surface.base})]`,

        // CHANGE: hover juga sekalian ngangkat + shadow halus (biar kerasa clickable)
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
