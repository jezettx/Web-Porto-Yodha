import PageHeader from "@/components/ui/PageHeader";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="experience"
        title="Experience Dashboard"
        desc="A structured view of my organizational, business, and technical experience."
        align="center"
      />
      <ExperienceSection />
    </>
  );
}
