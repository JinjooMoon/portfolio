import type { ProjectImageItem } from "../../components/project-image-row";
import type { ProjectPageConfig } from "../../components/project-page/project-page-types";

const asset = (name: string) => `/images/agriculture-victoria/${name}`;
const image = (name: string, width: number, height: number, alt: string, caption?: string, widthPercent?: number): ProjectImageItem => ({ src: asset(name), width, height, alt, caption, widthPercent });

export const agricultureVictoria: ProjectPageConfig = {
  slug: "agriculture-victoria",
  title: "Agriculture Victoria",
  description: "Making complex agricultural information easier to navigate.",
  contribution: "Visual design, page templates, responsive design and design system",
  tags: ["Design thinking", "Clarity through design"],
  status: "In development",
  year: "2025-2026",
  heroTone: "#111314",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [{ paragraphs: ["The project focused on redesigning the experience within the existing information architecture, exploring clearer page layouts and wireframes to help users find the right information more easily. We also explored a more editorial and modern visual direction, with a strong focus on the overall look and feel."] }],
      imageRows: [{ variation: "single", images: [image("overview-current-site.png", 840, 222, "Agriculture Victoria current site overview", "Current Agriculture Victoria site experience.")] }],
    },
    {
      id: "the-opportunity",
      title: "The opportunity",
      intro: [{ paragraphs: ["The current site has a deep content structure, making users navigate through multiple levels to find information. Inconsistencies across the experience also create confusion and make it harder for users to know where to go next. The key challenge was to help users find the right information quickly, while giving them a clear sense of where they are and how the content is structured within the current IA."] }],
      content: [
        { heading: "01 / Inconsistent pattern within the same page level", paragraphs: ["Different layouts and content patterns make the experience less predictable."] },
        { heading: "02 / Difficult to prioritise", paragraphs: ["The visual hierarchy was often diluted by the competing use of content and decorative elements. Inconsistent use of shapes and visual treatments could draw attention away from key information, making it harder for users to identify what matters most."] },
        { heading: "03 / Deep content structure", paragraphs: ["Finding the right information requires navigating through multiple levels of content."] },
      ],
      imageRows: [
        { variation: "three", images: [
          image("opportunity-banner-plantations.png", 264, 82, "Plantations and farm forestry level two banner", "Level 2 page banner (Plantations and farm forestry): Key links are included alongside the page introduction."),
          image("opportunity-banner-genebank.png", 264, 82, "Australian Grains Genebank level two banner", "Level 2 page banner (Australian Grains Genebank): No key links; an icon is used above the heading."),
          image("opportunity-banner-workforce.png", 264, 82, "Workforce and harvest level two banner", "Level 2 page banner (Workforce and harvest): No key links or supporting content within the banner."),
        ] },
        { variation: "single", images: [image("opportunity-prioritise.png", 842, 507, "Agriculture Victoria content hierarchy example", "Multiple content types compete for attention, making it harder for users to identify the most relevant starting point.")] },
        { variation: "single", images: [image("opportunity-deep-content.png", 840, 95, "Agriculture Victoria deep content structure example", "Finding the right information often requires navigating through multiple levels of content.")] },
      ],
    },
    {
      id: "key-design-decisions",
      title: "Key design decisions",
      content: [
        { heading: "01 / Creating a consistent page system", paragraphs: ["We created dedicated templates for each page level, carrying visual elements from the parent section through the hierarchy. Related pages use the same imagery to create a stronger visual connection, while distinct banner and page structures give users subtle cues about where they are within the site. This also simplifies content maintenance by removing the need to manually select and add imagery for each page."] },
        { heading: "02 / Creating a clearer visual hierarchy and a visual direction", paragraphs: ["We refined the use of the brand’s signature shapes, using them more selectively and subtly so they supported rather than competed with the content. We also introduced larger, more editorial imagery to create a more elevated and contemporary feel, while strengthening the visual impact of the brand."] },
      ],
      imageRows: [
        { variation: "three", images: [
          image("decision-level-1.png", 1440, 692, "Level one Agriculture Victoria page design", "Level 1 page using a wide-format image as the visual anchor."),
          image("decision-level-2.png", 1440, 578, "Level two Agriculture Victoria page design", "Level 2 page carrying through the background imagery from its Level 1 parent page."),
          image("decision-level-3.png", 1440, 578, "Level three Agriculture Victoria page design", "Level 3 page carrying through the background imagery from its Level 1 parent page."),
        ] },
        { variation: "single", images: [image("decision-hero-banner.png", 1440, 700, "Agriculture Victoria hero banner design", "Hero banner: Subtle use of the signature shape")] },
        { variation: "single", images: [image("decision-footer.png", 1440, 455, "Agriculture Victoria footer design", "Footer: Subtle use of the signature shape")] },
      ],
    },
    {
      id: "homepage-before-after",
      title: "Homepage before and after",
      intro: [{ paragraphs: ["We reimagined the homepage to create a clearer, more focused starting point for users. A refined visual hierarchy, more subtle use of the brand’s signature shapes and larger editorial imagery help key content stand out, while creating a more modern and elevated visual experience."] }],
      comparisons: [
        {
          before: image("before-homepage.png", 1920, 3679, "Existing Agriculture Victoria homepage", "Decorative shapes and content compete for attention, creating multiple visual focal points and making it harder to identify what matters most."),
          after: image("after-homepage.png", 1402, 4096, "Proposed Agriculture Victoria homepage", "Subtle use of the signature shapes allows the content to take priority, while larger imagery creates a clear focal point for each section and helps users quickly scan and prioritise information."),
          layout: "weighted",
        },
      ],
    },
    {
      id: "key-page-templates",
      title: "Key page templates",
      intro: [{ paragraphs: [
        "To address the inconsistent page patterns across the site, we developed a flexible template system that provides a consistent foundation across different page levels and content types. Rather than creating a single layout for every page, each template was designed around the needs of its content while maintaining shared visual and structural patterns.",
        "The key pages below show how these templates work together across the hierarchy. Distinct banner and page structures help users recognise different levels of the site, while shared imagery and visual elements create a stronger connection between parent and child pages.",
        "The system was also designed to accommodate sections with their own visual identity. These pages retain the same underlying layout and structure while introducing their own colour palette, allowing them to feel distinctive without breaking the overall experience.",
      ] }],
      imageRows: [{ variation: "four", className: "agvic-template-row", images: [
        image("template-section-page.png", 1440, 3143, "Agriculture Victoria level one landing page", "Level 1 landing page"),
        image("template-topic-page.png", 1440, 2137, "Agriculture Victoria level two landing page", "Level 2 landing page"),
        image("template-subtopic-page.png", 1440, 1779, "Agriculture Victoria level three landing page", "Level 3 landing page"),
        image("template-branded-page.png", 1440, 3143, "Agriculture Victoria branded landing page", "Branded level 1 landing page"),
      ] }],
    },
    {
      id: "responsive-design",
      title: "Responsive design",
      intro: [{ paragraphs: ["The page templates were designed to provide a consistent experience across desktop and mobile, adapting the layout and content hierarchy to suit each screen size. We considered how navigation, banners, imagery, cards and content sections would scale, stack and reflow, while maintaining a consistent visual language across breakpoints. Typography, imagery, shapes and other brand elements were carefully adapted to ensure the experience remained cohesive, with large editorial imagery retaining its visual impact without compromising usability."] }],
      imageRows: [
        { variation: "two-device", images: [
          image("responsive-mega-menu.png", 1440, 1000, "Agriculture Victoria desktop mega menu", "The mega menu is simplified into a drill-down mobile navigation pattern for easier access to content.", 77.4),
          image("responsive-mobile-menu.png", 375, 850, "Agriculture Victoria mobile menu", undefined, 19.8),
        ] },
        { variation: "two-device", images: [
          image("responsive-events.png", 1390, 4096, "Agriculture Victoria events desktop page", "Images were removed on mobile to prevent them from pushing key content further down the page, while maintaining a consistent visual language across breakpoints.", 77.4),
          image("responsive-events-mobile.png", 375, 900, "Agriculture Victoria mobile events filters", undefined, 19.8),
        ] },
      ],
    },
  ],
  outcome: { title: "Outcome", paragraphs: [
    "The design direction was very well received by the client and successfully progressed through multiple rounds of government review and approval. Despite the complexity of the approval process, we were able to build strong stakeholder alignment and establish a clear direction for the next phase of the project.",
    "The project is currently in development, with the new experience expected to launch in early 2027.",
  ] },
  relatedProjects: [
    { title: "Penrith City Council",
      href: "/penrith-city-council", 
      image: "/images/penrith-city-council-thumbnail.png", 
      alt: "Penrith City Council website design", 
      description: "Building a connected digital ecosystem across five sites.",
      tags: ["Design ecosystem", "Leading Collaboration"] },
    { title: "Business Victoria",
      href: "/business-victoria", 
      image: "/images/business-victoria-thumbnail.png", 
      alt: "Business Victoria website design", 
      description: "Refreshing the experience while improving content discovery.",
      tags: ["Co-design", "Solving complex problems"] },
    { title: "Outdoor Recreation Victoria",
      href: "/outdoor-recreation-victoria", 
      image: "/images/outdoor-recreation-victoria-thumbnail.png", 
      alt: "Outdoor Recreation Victoria website design", 
      description: "Creating a scalable design system for a growing digital ecosystem.",
      tags: ["Design under constraints"] },
  ],
};