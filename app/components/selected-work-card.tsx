import Image from "next/image";
import Link from "next/link";
import { ExternalLinkArrow } from "./external-link-arrow";

export type SelectedWorkCardProject = {
  title: string;
  image: string;
  alt: string;
  tags: string[];
  href: string;
  description?: string;
};

export function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`pill${dark ? " pill-dark" : ""}`}>{children}</span>;
}

export function SelectedWorkCard({ project, variant }: { project: SelectedWorkCardProject; variant?: "project-related" }) {
  return (
    <Link className={`project-card${variant ? ` project-card--${variant}` : ""}`} href={project.href}>
      <div className="project-media">
        <Image className="project-image" src={project.image} alt={project.alt} width={397} height={298} />
        <span className="project-card__overlay" aria-hidden="true">
          <span>View this project</span>
          <ExternalLinkArrow />
        </span>
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        {project.description && (
          <p className="selected-work-card__description">
            {project.description}
          </p>
        )}
        <div className="tag-list">
          {project.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
        </div>
        
      </div>
    </Link>
  );
}