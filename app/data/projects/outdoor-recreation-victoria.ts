import type { ProjectImageItem } from "../../components/project-image-row";
import type { ProjectPageConfig } from "../../components/project-page/project-page-types";

const asset = (name: string) => `/images/outdoor-recreation-victoria/${name}`;
const image = (name: string, width: number, height: number, alt: string, caption?: string, widthPercent?: number): ProjectImageItem => ({ src: asset(name), width, height, alt, caption, widthPercent });

export const outdoorRecreationVictoria: ProjectPageConfig = {
  slug: "outdoor-recreation-victoria",
  title: "Outdoor Recreation Victoria",
  description: "Creating a scalable design system for a growing digital ecosystem.",
  contribution: "Visual design, component library and responsive design",
  tags: ["Design under contraints"],
  status: "In development",
  year: "2026",
  heroTone: "#004976",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [{ paragraphs: ["Outdoor Recreation Victoria is a new government agency preparing to launch its digital experience before the end of the financial year. I worked across the project from wireframes through to visual design, with the full design completed within two weeks."] }],
    },
    {
      id: "the-challenge",
      title: "The challenge",
      content: [{ heading: "Delivering end-to-end UI design under extreme time constraints", paragraphs: [
        "The project needed to be completed before the end of the financial year, leaving only two weeks to move from wireframes to final designs.",
        "As a newly established government agency, there was also no existing website or established digital experience to use as a reference. The brand was being explored at the same time, with the visual direction continuing to evolve as the project progressed.",
        "With limited room for multiple rounds of review and iteration, I needed to create alignment early while keeping the design flexible enough to respond to change.",
      ] }],
    },
    {
      id: "the-approach",
      title: "The approach",
      content: [{ heading: "Aligning on direction early", paragraphs: [
        "Before presenting the website designs, I used a design session to bring the different stakeholders into the process early.",
        "We looked at the existing websites together, reviewed competitor experiences and explored the new brand to build a shared understanding of the space before moving into the visual design.",
        "I then presented several homepage concepts to explore different directions and gather feedback while there was still time to influence the outcome.",
      ] }],
      imageRows: [{ variation: "single", images: [image("brand-introduction.png", 1343, 604, "Outdoor Recreation Victoria new brand introduction", "Introducing the new brand helped stakeholders become familiar with the visual language before seeing it applied to the website.")] }],
    },
    {
      id: "design-process",
      title: "Design process",
      displayTitle: "Developing a flexible design direction",
      content: [{ paragraphs: [
        "Feedback from the design session helped establish a shared direction across the different stakeholders. I then developed the preferred concept into the wider set of page designs, refining the visual language and applying it consistently across the experience.",
        "As the brand continued to evolve during the project, elements such as colour and graphic motifs changed along the way. I structured the Figma components and styles to make these changes easier to apply consistently across the designs, allowing the experience to adapt without significant rework.",
      ] }],
      processGroups: [{ label: "The process:", className: "orv-process-group", steps: ["Agreed direction", "Design development", "Brand evolution", "Update designs"] }],
      imageRows: [{ variation: "single", images: [image("design-development.png", 1125, 291, "Outdoor Recreation Victoria design development", "Outdoor Recreation Victoria designs")] }],
    },
    {
      id: "key-design-decisions",
      title: "Key design decisions",
      displayTitle: "Component library",
      content: [{ heading: "Creating a lightweight shared foundation", paragraphs: [
        "Alongside the designs, I created a lightweight component library to document the key components, styles and usage guidance.",
        "It provided a shared reference for the client and development team and helped maintain consistency as the designs moved into build.",
      ] }],
      imageRows: [{ variation: "two-equal", images: [
        image("component-buttons.png", 2718, 1978, "Outdoor Recreation Victoria button component library example", "Component library - Buttons example"),
        image("component-cta.png", 4096, 3587, "Outdoor Recreation Victoria call to action component library example", "Component library - Call to action example"),
      ] }],
    },
    {
      id: "the-final-experience",
      title: "The final experience",
      content: [{ heading: "Bringing the new experience together", paragraphs: ["The final designs brought together the new visual identity, shared design foundations and requirements across the different agencies into one cohesive digital experience."] }],
      imageRows: [
        { variation: "single", images: [image("homepage.png", 1764, 4096, "Outdoor Recreation Victoria homepage", "Homepage")] },
        { variation: "three", images: [
          image("landing-hunting.png", 1450, 4096, "Outdoor Recreation Victoria landing page", "Landing page"),
          image("listing-news.png", 1920, 3293, "Outdoor Recreation Victoria listing page", "Listing page"),
          image("search.png", 1590, 4096, "Outdoor Recreation Victoria search page", "Search page"),
        ] },
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      content: [
        { heading: "On-Time Delivery", paragraphs: ["Completed full homepage, listing, search, and landing page designs within the 2 week deadline."] },
        { heading: "Developer Handoff", paragraphs: ["Provided a lightweight UI component library and usage guidelines, ensuring 100% design fidelity during engineering build."] },
        { heading: "Stakeholder Alignment", paragraphs: ["Achieved rapid, multi-agency sign-off with zero major design revisions required."] },
      ],
    },
  ],
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
    { title: "Penrith City Council",
      href: "/penrith-city-council", 
      image: "/images/penrith-city-council-thumbnail.png", 
      alt: "Penrith City Council website design", 
      description: "Building a connected digital ecosystem across five sites.",
      tags: ["Design ecosystem", "Leading Collaboration"] },
  ],
};