import type { ProjectImageItem } from "../../components/project-image-row";
import type { ProjectPageConfig } from "../../components/project-page/project-page-types";

const asset = (name: string) => `/images/business-victoria/${name}`;
const image = (name: string, width: number, height: number, alt: string, caption?: string, widthPercent?: number): ProjectImageItem => ({ src: asset(name), width, height, alt, caption, widthPercent });

export const businessVictoria: ProjectPageConfig = {
  slug: "business-victoria",
  title: "Business Victoria",
  tags: ["Visual refresh", "Solving complex problems"],
  status: "In development",
  year: "2026",
  heroTone: "#201547",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [{ heading: "Refreshing the Business Victoria experience", paragraphs: ["I worked on the redesign of Business Victoria, primarily focusing on a visual refresh across the website, with a deeper UX/UI focus on the Learning & Advice experience."] }],
    },
    {
      id: "the-challenge",
      title: "The challenge",
      content: [
        { heading: "Elevating visual engagement while solving discoverability for time-poor users.", paragraphs: [
          "Business Victoria wanted to move towards a more dynamic and engaging digital experience. During the project, the visual direction evolved, introducing a refreshed colour palette and new visual treatments.",
          "For Learning & Advice, the challenge was more than visual. The experience needed to better support the needs of its primary users - small business owners who are often time-poor and need to find relevant information quickly.",
          "This created two opportunities:",
        ] },
        { heading: "01 / Refresh the overall visual experience", paragraphs: ["Translate an evolving brand identity into a cohesive, WCAG compliant design language."] },
        { heading: "02 / Improve content discovery", paragraphs: ["Restructure user pathways so business owners can evaluate commitment upfront (duration, cost, outcome) without deep navigation friction."] },
      ],
    },
    {
      id: "visual-refresh",
      title: "Visual refresh",
      content: [{ heading: "Evolving the visual language", paragraphs: [
        "I translated the evolving brand direction into the website, primarily through UI improvements across the homepage and other key areas.",
        "The new direction introduced more energy and personality while maintaining clarity, accessibility and consistency.",
      ] }],
    },
    {
      id: "ux-deep-dive",
      title: "UX deep dive - Learning & Advice",
      content: [
        { heading: "Understanding the users - supporting time-poor small business owners", paragraphs: ["As part of the discovery process, I participated in discovery sessions and user journey workshops, supporting the team and contributing to the discussions. The workshops helped us understand that many of the users are small business owners who are time-poor and need to find useful information quickly. The user journeys also highlighted a number of dead ends and unclear pathways, particularly when users were trying to explore courses, events and other learning opportunities. A key insight was that users need to understand the practical commitment upfront before deciding whether something is relevant to them."] },
        { heading: "How might we help time-poor business owners quickly understand whether an opportunity is relevant and worth their time?", paragraphs: [] },
      ],
    },
    {
      id: "from-insights-to-wireframes",
      title: "From insights to wireframes",
      content: [{ heading: "Translating workshop insights into design", paragraphs: [
        "I used the insights from the discovery and user journey workshops to explore potential solutions through wireframes.",
        "The focus was on creating clearer pathways and surfacing important information earlier, so users could scan and evaluate courses, events and other content without having to navigate through multiple layers.",
        "The wireframes helped test different ways of structuring and presenting the content before moving into the final UI.",
      ] }],
      processGroups: [{ label: "The process:", steps: ["Identify users and pain points", "User journey mapping", "Wireframe exploration"] }],
      imageRows: [
        { variation: "single", images: [image("discovery-workshop.png", 1519, 374, "Discovery workshop board", "Discovery workshop: Identifying users and pain points")] },
        { variation: "single", images: [image("user-journey-mapping.png", 1036, 793, "User journey mapping board", "User journey mapping")] },
        { variation: "single", images: [image("wireframes.png", 1139, 373, "Business Victoria wireframes", "Wireframes")] },
      ],
    },
    {
      id: "final-designs",
      title: "Final designs",
      intro: [{ paragraphs: ["The final designs brought together the refreshed visual direction and the UX improvements explored for Learning & Advice."] }],
      comparisons: [{
        before: image("homepage-before.png", 1920, 3679, "Business Victoria homepage before", "Homepage Before"),
        after: image("homepage-after.png", 971, 4096, "Business Victoria refreshed homepage", "Homepage After: A refreshed visual direction creates a stronger and more engaging entry point into the Business Victoria experience."),
        layout: "weighted",
      }],
      imageRows: [{ variation: "three", className: "business-learning-row", images: [
        image("learning-advice-banner.png", 1007, 4096, "Learning and Advice landing page", "Learning & Advice landing page: A clearer entry point helps users understand the different learning and advice options available and find the right pathway."),
        image("learning-advice-listing.png", 1440, 3392, "Learning and Advice listing page", "Learning & Advice listing page: A more scannable listing makes it easier for time-poor users to compare opportunities and identify what is relevant to them."),
        image("learning-advice-content.png", 1440, 3897, "Learning and Advice content page", "Learning & Advice content page: Key information such as date, duration, cost and completion requirements is surfaced clearly, helping users quickly understand what to expect before committing."),
      ] }],
    },
    {
      id: "outcome",
      title: "Outcome",
      content: [
        { heading: "Streamlined Decision-Making", paragraphs: ["Key metadata (duration, cost, completion requirements) is now surfaced upfront, enabling business owners to evaluate opportunities at a glance."] },
        { heading: "Cohesive Brand Experience", paragraphs: ["Established a modern, highly accessible UI framework deployed across both landing and content templates."] },
        { heading: "Project Status", paragraphs: ["Successfully signed off across government stakeholders; currently in build for a planned early 2027 launch."] },
      ],
    },
  ],
  relatedProjects: [
    { title: "Penrith City Council",
      href: "/penrith-city-council", image: "/images/penrith-city-council-thumbnail.png", alt: "Penrith City Council website design", tags: ["Design ecosystem", "Leading Collaboration"] },
    { title: "Agriculture Victoria",
      href: "/agriculture-victoria", image: "/images/agriculture-victoria-thumbnail.png", alt: "Agriculture Victoria website design", tags: ["Design thinking", "Clarity through design"] },
    { title: "Outdoor Recreation Victoria",
      href: "/outdoor-recreation-victoria", image: "/images/outdoor-recreation-victoria-thumbnail.png", alt: "Outdoor Recreation Victoria website design", tags: ["Design under constraints"] },
  ],
};