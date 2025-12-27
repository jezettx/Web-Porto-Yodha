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
        // keep cards soft; avoid harsh outlines that make everything look "boxed"
        "rounded-2xl border backdrop-blur",
        hover && "transition-colors",
        hover && `hover:bg-[rgb(${colors.surface.hover})] hover:border-[rgb(${colors.border})]`,
        `border-[rgb(${colors.borderSoft})] bg-[rgb(${colors.surface.base})]`,
        className
      )}
    >
      {children}
    </div>
  );
}
