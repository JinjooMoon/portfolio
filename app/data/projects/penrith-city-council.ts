import type { ProjectImageItem } from "../../components/project-image-row";
import type { ProjectPageConfig } from "../../components/project-page/project-page-types";

const asset = (name: string) => `/images/penrith/${name}`;
const image = (name: string, width: number, height: number, alt: string, caption?: string, widthPercent?: number): ProjectImageItem => ({ src: asset(name), width, height, alt, caption, widthPercent });

export const penrithCityCouncil: ProjectPageConfig = {
  slug: "penrith-city-council",
  title: "Penrith City Council",
  description: "Building a connected digital ecosystem across five sites.",
  contribution: "Wireframes, visual design, design system and stakeholder collaboration",
  tags: ["Design ecosystem", "Leading collaboration"],
  status: "In development",
  year: "2026",
  heroTone: "#194239",
  heroGraphic: asset("hero-abstract.svg"),
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [{ paragraphs: [
        "Penrith City Council was looking to refresh its digital experience across its main website and five satellite sites, each with different audiences and visual identities. The project focused on creating a flexible and cohesive design approach that could be adapted across these experiences while maintaining accessibility, consistency and the individuality of each site.",
        "I contributed to the discovery and ideation phases with a senior UX designer, then led the design from wireframing through to visual design. I also facilitated design briefing and concept sessions to establish and align on the visual direction with the client.",
      ] }],
    },
    {
      id: "challenge",
      title: "The challenge",
      content: [{ heading: "Finding opportunities within constraints", paragraphs: [
        "The project was primarily focused on adapting the new main-site design across five different sites, each with its own brand guidelines. While the scope focused on the main site and didn’t allow for a full UX or content review of the five sub-sites, I still looked for opportunities to make small, meaningful improvements that could make the experience clearer and easier to navigate.",
      ] }],
    },
    {
      id: "approach",
      title: "The Approach - One ecosystem, five experiences",
      intro: [{ heading: "Understanding the wider ecosystem", paragraphs: [
        "Before starting the main-site design, I facilitated a design briefing session with stakeholders to understand the broader needs of the Penrith digital ecosystem. Using a Mural board, we explored the visual direction for the main site and also discussed the individual sub-sites, including their specific needs, priorities and considerations. These insights helped inform the main-site design and provided context for adapting the resulting foundation across the five sub-sites.",
      ] }],
      imageRows: [{ variation: "single", images: [image("mural-board.png", 1544, 341, "Mural board used during the design briefing session", "Mural board used to facilitate the design briefing session and align stakeholders on the visual direction.")] }],
    },
    {
      id: "design-process",
      title: "Design process",
      processGroups: [
        {
          label: "01 / Main site: Establishing the foundation",
          steps: ["Discovery & ideation", "Wireframes", "Design briefing session", "Visual designs"],
          imageRows: [
            { variation: "single", images: [image("wireframes.png", 1224, 429, "Penrith City Council wireframes", "Wireframes were used to align with stakeholders on the proposed page structure and content hierarchy before moving into visual design.")] },
            { variation: "single", images: [image("main-site-exploration.png", 1330, 341, "Penrith City Council main site design exploration", "Penrith City Council main site designs: Exploring the core visual direction for the main site.")] },
          ],
        },
        { label: "02 / Sub-sites: Adapting the foundation", steps: ["Brand adaptation & content / layout review", "Design refinement"] },
      ],
    },
    {
      id: "key-design-decisions",
      title: "Key design decisions",
      intro: [{ heading: "Designing around content and user needs", paragraphs: ["Across the project, I explored different ways to make complex or content-heavy experiences easier to scan and navigate."] }],
      content: [
        { heading: "Example 01 / Simplifying long-form content", paragraphs: ["Rather than presenting a long landing page as one continuous experience, I restructured related content into cards and dedicated content pages. This created a more scannable experience and gave users clearer pathways to find and explore the information they needed."] },
        { heading: "Example 02 / Creating clearer content hierarchy", paragraphs: ["I refined the content hierarchy and layout to help users quickly understand what was available and where to go next. For example, The Quarter’s homepage was originally very text-heavy, so I restructured the content to make it more scannable and turned it into a clearer wayfinding tool."] },
      ],
      comparisons: [
        {
          before: image("before-landing-page.png", 504, 4096, "Existing landing page", "Before: The existing landing page."),
          after: image("after-landing-page.png", 1440, 3048, "Proposed landing page", "After: Proposed design for the existing landing page."),
          layout: "weighted",
        },
        {
          before: image("before-quarter-homepage.png", 1920, 3007, "Existing Quarter homepage", "Before: The existing homepage."),
          after: image("after-quarter-homepage.png", 1261, 4096, "Quarter homepage for wayfinding", "After: Homepage for wayfinding."),
          layout: "weighted",
        },
      ],
    },
    {
      id: "final-experience",
      title: "The final experience",
      intro: [{ paragraphs: ["The main-site foundation was adapted across five satellite sites, with each experience tailored to its own brand, content and purpose. The result is a connected ecosystem where each site feels distinct while remaining part of the wider Penrith digital experience."] }],
      imageRows: [
        { variation: "single", images: [image("main-site-homepage.png", 1388, 4096, "Penrith main site homepage", "Main site - homepage")] },
        { variation: "three", images: [image("main-site-landing-page.png", 1440, 3395, "Penrith main site landing page", "Main site - Landing page"), image("main-site-listing-page.png", 1440, 3975, "Penrith main site listing page", "Main site - Listing page"), image("main-site-events-page.png", 1135, 4096, "Penrith main site events content page", "Main site - Content page")] },
      ],
      subsections: [{ id: "sub-sites", title: "02 / Sub-sites: Adapting the foundation", imageRows: [{ variation: "five", images: [image("visit-penrith-homepage.png", 1025, 4096, "Visit Penrith homepage", "Visit Penrith Homepage"), image("quarter-homepage.png", 1191, 4096, "The Quarter homepage", "The Quarter Homepage"), image("childcare-services-homepage.png", 1423, 4096, "Penrith childcare services homepage", "The childcare services Homepage"), image("ripples-homepage.png", 1332, 4096, "Ripples homepage", "The Ripples Homepage"), image("divisional-assurance-homepage.png", 1440, 2729, "Divisional Assurance homepage", "Divisional Assurance Homepage")] }] }],
    },
  ],
  outcome: { title: "Outcome", paragraphs: [
    "The design direction was well received by the client and successfully progressed through multiple rounds of government review and approval. Despite having multiple stakeholders and different requirements across the subsites, we were able to establish a clear direction and build alignment for the next phase of the project.",
    "The project resulted in a connected ecosystem of five satellite sites, each designed around its own audience and purpose while remaining visually and structurally connected to the broader Penrith digital experience.",
    "The project is currently in development, with the new experience expected to launch in early 2027.",
  ] },
  relatedProjects: [
    { title: "Agriculture Victoria",
      href: "/agriculture-victoria", 
      image: "/images/agriculture-victoria-thumbnail.png", 
      alt: "Agriculture Victoria website design", 
      description: "Making complex agricultural information easier to navigate.",
      tags: ["Design thinking", "Clarity through design"] },
    { title: "Business Victoria",
      href: "/business-victoria", 
      image: "/images/business-victoria-thumbnail.png", 
      alt: "Business Victoria website design", 
      description: "Refreshing the experience while improving content discovery.",
      tags: ["Visual refresh", "Solving complex problems"] },
    { title: "Outdoor Recreation Victoria",
      href: "/outdoor-recreation-victoria", 
      image: "/images/outdoor-recreation-victoria-thumbnail.png", 
      alt: "Outdoor Recreation Victoria website design", 
      description: "Creating a scalable design system for a growing digital ecosystem.",
      tags: ["Design under constraints"] },
  ],
};
