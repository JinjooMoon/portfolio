import { notFound } from "next/navigation";
import { ProjectPageTemplate } from "../components/project-page/project-page-template";
import { projects } from "../data/projects";

export default function LocalCouncilsSAPage() {
  const project = projects["local-councils-sa"];
  if (!project) notFound();
  return <ProjectPageTemplate project={project} />;
}
