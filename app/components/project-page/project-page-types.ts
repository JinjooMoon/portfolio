import type { ProjectImageItem } from "../project-image-row";

export type ProjectTextBlock = {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
};

export type ProjectImageRowConfig = {
  variation: import("../project-image-row").ProjectImageRowVariation;
  images: ProjectImageItem[];
  className?: string;
};

export type ProjectComparison = {
  before: ProjectImageItem;
  after: ProjectImageItem;
  layout?: "equal" | "weighted";
};

export type ProjectProcessGroup = {
  label: string;
  className?: string;
  steps: string[];
  imageRows?: ProjectImageRowConfig[];
};


export type DynamicExperienceGroup = {
  heading: string;
  text: string;
  imageRow: ProjectImageRowConfig;
};

export type ProjectSection = {
  id: string;
  title: string;
  tocTitle?: string;
  displayTitle?: string;
  intro?: ProjectTextBlock[];
  content?: ProjectTextBlock[];
  imageRows?: ProjectImageRowConfig[];
  comparisons?: ProjectComparison[];
  processGroups?: ProjectProcessGroup[];
  subsections?: ProjectSection[];
  dynamicExperience?: {
    colour: DynamicExperienceGroup;
    layout: DynamicExperienceGroup;
    visualDetails: DynamicExperienceGroup;
  };
};

export type ProjectPageConfig = {
  slug: string;
  title: string;
  description?: string;
  contribution?: string;
  tags: string[];
  status: string;
  year: string;
  heroTone: string;
  liveUrl?: string;
  heroGraphic?: string;
  tocItems?: Array<{ label: string; targetId: string }>;
  sections: ProjectSection[];
  outcome?: { title: string; paragraphs: string[]; linkLabel?: string; linkUrl?: string };
  relatedProjects: Array<{
      title: string;
      image: string;
      alt: string;
      description?: string;
      tags: string[];
      href: string;
  }>;
};
