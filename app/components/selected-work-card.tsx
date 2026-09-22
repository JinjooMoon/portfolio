import Image from "next/image";
import Link from "next/link";

export type SelectedWorkCardProject = {
  title: string;
  image: string;
  alt: string;
  tags: string[];
  href: string;
};

export function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`pill${dark ? " pill-dark" : ""}`}>{children}</span>;
}

export function SelectedWorkCard({ project }: { project: SelectedWorkCardProject }) {
  return (
    <Link className="project-card" href={project.href}>
      <div className="project-media">
        <Image className="project-image" src={project.image} alt={project.alt} width={397} height={298} />
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <div className="tag-list">
          {project.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
        </div>
      </div>
    </Link>
  );
}