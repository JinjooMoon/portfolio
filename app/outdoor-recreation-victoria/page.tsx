import { notFound } from "next/navigation";
import { ProjectPageTemplate } from "../components/project-page/project-page-template";
import { projects } from "../data/projects";

export default function OutdoorRecreationVictoriaPage() {
  const project = projects["outdoor-recreation-victoria"];
  if (!project) notFound();
  return <ProjectPageTemplate project={project} />;
}