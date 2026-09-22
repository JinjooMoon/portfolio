import { notFound } from "next/navigation";
import { ProjectPageTemplate } from "../components/project-page/project-page-template";
import { projects } from "../data/projects";

export default function AgricultureVictoriaPage() {
  const project = projects["agriculture-victoria"];
  if (!project) notFound();
  return <ProjectPageTemplate project={project} />;
}