import Card from "@/components/ui/Card";

const heroCards = [
  {
    label: "Starting Point",
    title: "Worst-Case First",
    desc:
      "I begin by imagining where users might struggle, fail, or feel frustrated.\n" +
      "Bottlenecks, friction, and performance are addressed before anything looks polished.",
  },
  {
    label: "Approach",
    title: "Systems That Hold",
    desc:
      "I design systems for real conditions, messy workflows, handoffs, human limits, and operational pressure.\n" +
      "Not demos. Not ideal cases. Systems that actually work.",
  },
  {
    label: "Measure",
    title: "User Experience as Outcome",
    desc:
      "A system succeeds when users feel guided, comfortable, and confident using it.\n" +
      "If they can move without friction, the system is doing its job.",
  },
];


export default function HeroSection() {
  return (
    <div className="grid gap-4 md:gap-6 md:grid-cols-3">
      {heroCards.map((c) => (
        <Card
          key={c.title}
          className="
            rounded-2xl
            border border-white/8
            bg-white/4
            p-4 md:p-7
            transition
            hover:bg-white/8
          "
        >
          <p className="text-[11px] font-semibold tracking-wider text-white/50 uppercase">
            {c.label}
          </p>

          <h3 className="mt-2 md:mt-3 text-lg md:text-xl font-semibold text-white leading-tight">
            {c.title}
          </h3>

          <p className="mt-2 md:mt-3 whitespace-pre-line text-sm md:text-[15px] leading-relaxed text-white/60">
            {c.desc}
          </p>
        </Card>
      ))}
    </div>
  );
}
