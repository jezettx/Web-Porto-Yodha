type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
};

export default function PageHeader({
  eyebrow,
  title,
  desc,
  align = "left",
}: PageHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={
        isCenter
          ? "flex flex-col items-center text-center"
          : "flex flex-col md:flex-row md:items-end md:justify-between"
      }
    >
      <div>
        {eyebrow && (
          <p className="text-xs tracking-widest uppercase text-white/50">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h1>

        {desc && (
          <p className="mt-3 max-w-2xl text-white/70">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
