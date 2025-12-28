import PageHeader from "@/components/ui/PageHeader";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Selected Projects"
        desc="A curated set of systems I’ve built — focused on clarity, flow, and real-world delivery."
        align="center"
      />
      <ProjectsSection />
    </>
  );
}
