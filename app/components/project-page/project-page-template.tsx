import Image from "next/image";
import { Fragment } from "react";
import { SiteHeader } from "../site-header";
import { SelectedWorkCard } from "../selected-work-card";
import { BackToTop } from "./back-to-top";
import { ProjectComparison } from "./project-comparison";
import { ProjectImageRow } from "../project-image-row";
import type { ProjectPageConfig, ProjectSection, ProjectTextBlock } from "./project-page-types";

const projectSectionIds = ["project-top"];

function ExternalLinkArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectHeroContent({ project }: { project: ProjectPageConfig }) {
  return (
    <div className="project-hero__copy">
      <h1>{project.title}</h1>
      <div className="project-hero__tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-hero__meta">
        <span><strong>Status</strong>{project.status}</span>
        <span><strong>Year</strong>{project.year}</span>
      </div>
      {project.liveUrl ? (
        <a className="project-hero__live-link" href={project.liveUrl} target="_blank" rel="noreferrer">
          Click to view the live site <ExternalLinkArrow />
        </a>
      ) : null}
    </div>
  );
}

function PenrithHero({ project }: { project: ProjectPageConfig }) {
  return (
    <section className="project-hero" style={{ backgroundColor: project.heroTone }}>
      <div className="project-container project-hero__inner">
        <ProjectHeroContent project={project} />
        {project.heroGraphic ? <Image className="project-hero__graphic" src={project.heroGraphic} alt="" width={311} height={154} priority /> : null}
      </div>
    </section>
  );
}

function AgricultureVictoriaHero({ project }: { project: ProjectPageConfig }) {
  return (
    <section className="project-hero agvic-hero">
      <div className="project-container project-hero__inner agvic-hero__inner">
        <ProjectHeroContent project={project} />
      </div>
      <div className="agvic-hero__art" aria-hidden="true">
        <Image className="agvic-hero__layer agvic-hero__layer--a" src="/images/agriculture-victoria/hero-mask-group-a.png" alt="" width={543} height={350} priority />
        <Image className="agvic-hero__layer agvic-hero__layer--b" src="/images/agriculture-victoria/hero-mask-group-b.png" alt="" width={543} height={350} priority />
      </div>
    </section>
  );
}

function BusinessVictoriaHero({ project }: { project: ProjectPageConfig }) {
  return (
    <section className="project-hero business-hero">
      <div className="project-container project-hero__inner business-hero__inner">
        <ProjectHeroContent project={project} />
      </div>
      <Image className="business-hero__pattern" src="/images/business-victoria/hero-pattern.svg" alt="" width={619} height={654} priority />
    </section>
  );
}

function OutdoorRecreationVictoriaHero({ project }: { project: ProjectPageConfig }) {
  return (
    <section className="project-hero orv-hero">
      <div className="project-container project-hero__inner orv-hero__inner">
        <ProjectHeroContent project={project} />
      </div>
      <div className="orv-hero__art" aria-hidden="true">
        <div className="orv-hero__art-inner">
          <Image className="orv-hero__colour" src="/images/outdoor-recreation-victoria/colour-block.svg" alt="" width={4245} height={1889} priority />
          <Image className="orv-hero__contour" src="/images/outdoor-recreation-victoria/contour.svg" alt="" width={4245} height={1677} priority />
        </div>
      </div>
    </section>
  );
}

function LocalCouncilsSAHero({ project }: { project: ProjectPageConfig }) {
  return (
    <section className="project-hero lcsa-hero">
      <div className="project-container project-hero__inner lcsa-hero__inner">
        <ProjectHeroContent project={project} />
      </div>
      <div className="lcsa-hero__pins" aria-hidden="true">
        <Image className="lcsa-hero__pin lcsa-hero__pin--01" src="/images/local-councils-sa/brand-map-pin-01.png" alt="" width={323} height={169} priority />
        <Image className="lcsa-hero__pin lcsa-hero__pin--02" src="/images/local-councils-sa/brand-map-pin-02.png" alt="" width={323} height={433} priority />
        <Image className="lcsa-hero__pin lcsa-hero__pin--03" src="/images/local-councils-sa/brand-map-pin-03.png" alt="" width={323} height={316} priority />
      </div>
    </section>
  );
}

function ProjectHero({ project }: { project: ProjectPageConfig }) {
  if (project.slug === "local-councils-sa") return <LocalCouncilsSAHero project={project} />;
  if (project.slug === "outdoor-recreation-victoria") return <OutdoorRecreationVictoriaHero project={project} />;
  if (project.slug === "business-victoria") return <BusinessVictoriaHero project={project} />;
  if (project.slug === "agriculture-victoria") return <AgricultureVictoriaHero project={project} />;
  return <PenrithHero project={project} />;
}

function SectionDivider() {
  return <div className="project-section-divider" aria-hidden="true" />;
}

function RenderTextBlocks({ blocks = [] }: { blocks?: ProjectTextBlock[] }) {
  return blocks.map((block, index) => (
    <div className="project-copy-block" key={`${block.heading ?? block.subheading ?? "block"}-${index}`}>
      {block.heading ? <h3>{block.heading}</h3> : null}
      {block.subheading ? <h3>{block.subheading}</h3> : null}
      {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  ));
}

function BusinessVictoriaVisualRefresh({ section }: { section: ProjectSection }) {
  const focusAreas = [
    "Explored CTA combinations using the new colour palette, checking text and background combinations to maintain sufficient colour contrast and accessibility.",
    "To create a more modern visual feel, I explored larger image treatments with reduced spacing between images, creating a more connected and immersive experience.",
    "Headings and supporting copy were kept aligned to the left to create a consistent reading line and improve readability across content-heavy layouts.",
  ];

  return (
    <section id={section.id} className="project-content-section business-visual-refresh">
      <h2>{section.title}</h2>
      <RenderTextBlocks blocks={section.content} />
      <div className="business-focus-group">
        <h3>Key focus areas</h3>
        <div className="business-focus-list">
          {focusAreas.map((item) => <p key={item}><Image src="/images/business-victoria/marker.svg" alt="" width={6} height={24} />{item}</p>)}
        </div>
      </div>
      <div className="business-refresh-grid">
        <figure className="business-refresh-stack">
          {["colour-combination-1.png", "colour-combination-2.png", "colour-combination-3.png", "colour-combination-4.png"].map((src) => (
            <Image key={src} src={`/images/business-victoria/${src}`} alt="Business Victoria accessible colour combination exploration" width={1440} height={500} />
          ))}
          <figcaption>Accessible colour combinations</figcaption>
        </figure>
        <div className="business-refresh-stack business-refresh-stack--right">
          <figure>
            <Image src="/images/business-victoria/immersive-imagery.png" alt="Business Victoria immersive imagery example" width={1440} height={958} />
            <figcaption>Larger, more immersive imagery</figcaption>
          </figure>
          <figure>
            <Image src="/images/business-victoria/content-hierarchy.png" alt="Business Victoria clearer content hierarchy example" width={1440} height={722} />
            <figcaption>Clearer content hierarchy</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function BusinessVictoriaFinalDesigns({ section }: { section: ProjectSection }) {
  return (
    <section id={section.id} className="project-content-section business-final-designs">
      <h2>{section.title}</h2>
      <RenderTextBlocks blocks={section.intro} />
      <h3>Homepage</h3>
      {section.comparisons?.map((comparison, index) => <ProjectComparison key={`${section.id}-comparison-${index}`} {...comparison} />)}
      <h3>Learning &amp; Advice</h3>
      {section.imageRows?.map((row, index) => <ProjectImageRow key={`${section.id}-row-${index}`} {...row} />)}
    </section>
  );
}

function LocalCouncilsSADynamicExperience({ section }: { section: ProjectSection }) {
  const groups = section.dynamicExperience
    ? [section.dynamicExperience.colour, section.dynamicExperience.layout, section.dynamicExperience.visualDetails]
    : [];

  return (
    <section id={section.id} className="project-content-section lcsa-dynamic-experience">
      <h2>{section.title}</h2>
      <RenderTextBlocks blocks={section.content} />
      {groups.map((group) => (
        <div className="lcsa-dynamic-group" key={group.heading}>
          <h3>{group.heading}</h3>
          <p>{group.text}</p>
          <ProjectImageRow {...group.imageRow} />
        </div>
      ))}
    </section>
  );
}

function OutdoorRecreationVictoriaApproach({ section }: { section: ProjectSection }) {
  return (
    <section id={section.id} className="project-content-section orv-approach-section">
      <h2>{section.displayTitle ?? section.title}</h2>
      <RenderTextBlocks blocks={section.content} />
      <div className="orv-approach-grid">
        <figure>
          <div className="orv-approach-crop"><Image src="/images/outdoor-recreation-victoria/existing-experience-review.png" alt="Existing outdoor recreation website review" width={844} height={790} /></div>
          <figcaption>Reviewing the existing experiences helped surface what stakeholders valued and what could be improved or left behind.</figcaption>
        </figure>
        <figure>
          <div className="orv-approach-crop"><Image src="/images/outdoor-recreation-victoria/reference-examples.png" alt="Outdoor recreation reference examples" width={833} height={460} /></div>
          <figcaption>Examples from other organisations helped provide a shared reference point for discussing different approaches to content, navigation and visual design.</figcaption>
        </figure>
      </div>
      {section.imageRows?.map((row, index) => <ProjectImageRow key={`${section.id}-row-${index}`} {...row} />)}
    </section>
  );
}

function RenderSection({ section, projectSlug }: { section: ProjectSection; projectSlug: string }) {
  if (projectSlug === "local-councils-sa" && section.id === "creating-dynamic-experience") return <LocalCouncilsSADynamicExperience section={section} />;
  if (projectSlug === "outdoor-recreation-victoria" && section.id === "the-approach") return <OutdoorRecreationVictoriaApproach section={section} />;
  if (projectSlug === "business-victoria" && section.id === "visual-refresh") return <BusinessVictoriaVisualRefresh section={section} />;
  if (projectSlug === "business-victoria" && section.id === "final-designs") return <BusinessVictoriaFinalDesigns section={section} />;

  const hasDecisionGrid = section.id === "key-design-decisions" && section.comparisons?.length;

  if (hasDecisionGrid) {
    return (
      <section id={section.id} className="project-content-section project-decision-section">
        <h2>{section.displayTitle ?? section.title}</h2>
        <RenderTextBlocks blocks={section.intro} />
        <div className="project-decisions">
          {section.content?.map((block, index) => (
            <article className="project-decision" key={`${block.heading ?? block.subheading ?? "decision"}-${index}`}>
              {block.heading ? <h3>{block.heading}</h3> : null}
              {block.subheading ? <h3>{block.subheading}</h3> : null}
              {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.comparisons?.[index] ? <ProjectComparison {...section.comparisons[index]} layout="weighted" /> : null}
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id={section.id} className="project-content-section">
      <h2>{section.displayTitle ?? section.title}</h2>
      <RenderTextBlocks blocks={section.intro} />
      <RenderTextBlocks blocks={section.content} />
      {section.processGroups?.map((group) => (
        <div className={`project-process-group ${group.className ?? ""}`.trim()} key={group.label}>
          <h3>{group.label}</h3>
          <div className="project-process-steps">
            {group.steps.map((step, index) => (
              <Fragment key={step}>
                <span>{step}</span>
                {index < group.steps.length - 1 ? <b aria-hidden="true">→</b> : null}
              </Fragment>
            ))}
          </div>
          {group.imageRows?.map((row, index) => <ProjectImageRow key={`${group.label}-row-${index}`} {...row} />)}
        </div>
      ))}
      {section.imageRows?.map((row, index) => <ProjectImageRow key={`${section.id}-row-${index}`} {...row} />)}
      {section.comparisons?.map((comparison, index) => <ProjectComparison key={`${section.id}-comparison-${index}`} {...comparison} />)}
      {section.subsections?.map((subsection) => <RenderSection key={subsection.id} section={subsection} projectSlug={projectSlug} />)}
    </section>
  );
}

export function ProjectPageTemplate({ project }: { project: ProjectPageConfig }) {
  return (
    <main id="project-top" className="project-page">
      <SiteHeader sectionIds={projectSectionIds} variant="project" />
      <ProjectHero project={project} />
      <div className="project-container project-toc">
        <h2>Table of content</h2>
        <nav aria-label="Project sections">
          {project.tocItems
            ? project.tocItems.map((item) => <a key={`${item.label}-${item.targetId}`} href={`#${item.targetId}`}>{item.label}</a>)
            : project.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.tocTitle ?? section.title}</a>)}
          {!project.tocItems && project.outcome ? <a href="#outcome">Outcome</a> : null}
        </nav>
      </div>
      {project.sections.map((section) => (
        <div key={section.id}><SectionDivider /><div className="project-container"><RenderSection section={section} projectSlug={project.slug} /></div></div>
      ))}
      {project.outcome ? (
        <>
          <SectionDivider />
          <section id="outcome" className="project-container project-content-section project-outcome-section">
            <h2>{project.outcome.title}</h2>
            {project.outcome.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {project.outcome.linkUrl ? (
              <a className="project-outcome__link" href={project.outcome.linkUrl} target="_blank" rel="noreferrer">
                {project.outcome.linkLabel ?? "Click to view the live site"} <ExternalLinkArrow />
              </a>
            ) : null}
          </section>
        </>
      ) : null}
      <section className="project-related-section">
        <h2>Would you like to see more of my selected work?</h2>
        <div className="project-related-grid">{project.relatedProjects.map((related) => <SelectedWorkCard key={related.title} project={related} />)}</div>
      </section>
      <BackToTop />
      <footer className="project-footer"><div className="project-shell project-footer__inner"><div><strong>Jin Moon</strong><span>© 2026</span></div><p>Thanks for stopping by!</p></div></footer>
    </main>
  );
}
