import PageHeader from "@/components/ui/PageHeader";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsPreviewSection from "@/components/sections/ProjectsPreviewSection";

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-20">
      {/* HERO */}
      <section className="space-y-4 md:space-y-8">
        <PageHeader
          title="Hi, I'm Frydan Yodha Pratama."
          desc="I build software and operational systems that turn messy workflows into clear, shippable solutions from rental platforms to event ops."
          align="center"
        />

        <p className="text-sm md:text-base text-white/70 text-center">
          Focused on clarity, flow, and real-world delivery.
        </p>

        <HeroSection />
      </section>

      <ProjectsPreviewSection />
    </div>
  );
}