import type { ProjectImageItem } from "../../components/project-image-row";
import type { ProjectPageConfig } from "../../components/project-page/project-page-types";

const asset = (name: string) => `/images/local-councils-sa/${name}`;
const image = (
  name: string,
  width: number,
  height: number,
  alt: string,
  caption?: string,
): ProjectImageItem => ({ src: asset(name), width, height, alt, caption });

export const localCouncilsSA: ProjectPageConfig = {
  slug: "local-councils-sa",
  title: "Local Councils SA",
  description: "Extending a new brand identity into a digital experience.",
  contribution: "Wireframes and visual design",
  tags: ["Visual Excellence"],
  status: "Live",
  year: "2024",
  heroTone: "#0079B8",
  liveUrl: "https://www.localcouncils.sa.gov.au/",
  tocItems: [
    { label: "Overview", targetId: "overview" },
    { label: "The challenge", targetId: "the-opportunity" },
    { label: "The approach", targetId: "design-process" },
    { label: "Design process", targetId: "design-process" },
    { label: "Key design decisions", targetId: "creating-dynamic-experience" },
    { label: "The final experience", targetId: "final-experience" },
    { label: "Outcome", targetId: "outcome" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [{
        paragraphs: [
          "Local Councils SA was redesigned alongside a new brand identity. I worked across the project from wireframes through to visual design, translating the new brand into a dynamic and engaging digital experience.",
        ],
      }],
    },
    {
      id: "the-opportunity",
      title: "The opportunity",
      content: [{
        heading: "Extending the brand through digital",
        paragraphs: [
          "The newly established brand guidelines were lightweight and print-focused. The challenge was to stretch these core elements - a vibrant palette and distinctive graphic motifs - into a responsive visual language that supports heavy content without sacrificing accessibility or brand personality.",
        ],
      }],
      imageRows: [{
        variation: "single",
        images: [
          image(
            "the-opportunity.png",
            1680,
            108,
            "Local Councils SA brand guidelines",
            "Brand guideline was print focused with minimal key brand elements in it.",
          ),
        ],
      }],
    },
    {
      id: "design-process",
      title: "Design process",
      content: [{
        heading: "From wireframes to visual exploration",
        paragraphs: [
          "I developed the page structures through wireframes before exploring how the brand could be expressed across the experience.",
          "Once the structure was established, I explored different ways to introduce more visual interest and variation while keeping the content clear and easy to navigate.",
        ],
      }],
      imageRows: [
        {
          variation: "single",
          images: [
            image(
              "design-process-wireframes.png",
              1680,
              1130,
              "Local Councils SA wireframes",
              "Wireframes",
            ),
          ],
        },
        {
          variation: "single",
          images: [
            image(
              "design-process-designs.png",
              1680,
              1235,
              "Local Councils SA design exploration",
              "Wireframes",
            ),
          ],
        },
      ],
    },
    {
      id: "creating-dynamic-experience",
      title: "Creating a more dynamic experience",
      content: [{
        paragraphs: [
          "I explored different ways to use colour, typography and layout to bring more energy and personality to the experience while maintaining a clear visual hierarchy.",
        ],
      }],
      dynamicExperience: {
        colour: {
          heading: "01 / Colour",
          text: "Coloured backgrounds add visual interest and give headings greater presence.",
          imageRow: {
            variation: "single",
            images: [
              image(
                "creating-experience-colour-01.png",
                1680,
                686,
                "Local Councils SA colour exploration",
                "Heading treatment: Colour with purpose",
              ),
            ],
          },
        },
        layout: {
          heading: "02 / Layout",
          text: "Varied layouts create more rhythm and movement across the experience.",
          imageRow: {
            variation: "three",
            images: [
              image("creating-experience-layout-01.png", 528, 211, "Local Councils SA section layout A", "Section Layout A"),
              image("creating-experience-layout-02.png", 528, 249, "Local Councils SA section layout B", "Section Layout B"),
              image("creating-experience-layout-03.png", 528, 249, "Local Councils SA section layout C", "Section Layout C"),
            ],
          },
        },
        visualDetails: {
          heading: "03 / Visual details",
          text: "Graphic elements and typography add personality while supporting the content.",
          imageRow: {
            variation: "two-equal",
            images: [
              image(
                "creating-experience-visual-details-01.png",
                816,
                333,
                "Local Councils SA CTA with image on the left",
                "CTA with image on the left creating an energetic entry point",
              ),
              image(
                "creating-experience-visual-details-02.png",
                816,
                333,
                "Local Councils SA CTA with image on the right",
                "CTA with image on the right creating an energetic entry point",
              ),
            ],
          },
        },
      },
    },
    {
      id: "final-experience",
      title: "The final experience",
      content: [{
        paragraphs: [
          "The final homepage brings together the new brand with a more dynamic digital visual language, creating a strong visual entry point into the wider Local Councils SA experience.",
        ],
      }],
      imageRows: [
        {
          variation: "single",
          images: [
            image(
              "final-experience-homepage.png",
              1260,
              4556,
              "Local Councils SA final homepage",
            ),
          ],
        },
        {
          variation: "three",
          images: [
            image("final-experience-search.png", 380, 291, "Local Councils SA search experience", "Search"),
            image("final-experience-megamenu.png", 380, 238, "Local Councils SA mega menu", "How councils work"),
            image("final-experience-landing-page.png", 380, 351, "Local Councils SA landing page", "Careers in council"),
          ],
        },
      ],
    },
  ],
  outcome: {
    title: "Outcome",
    paragraphs: [
      "The redesigned Local Councils SA website successfully launched, with the final build closely reflecting the design direction.",
      "The project allowed me to deliver a high level of visual detail within the available timeframe and scope.",
    ],
    linkLabel: "Click to view the live site",
    linkUrl: "https://www.localcouncils.sa.gov.au/",
  },
  relatedProjects: [
    {
      title: "Agriculture Victoria",
      href: "/agriculture-victoria",
      image: "/images/agriculture-victoria-thumbnail.png",
      alt: "Agriculture Victoria website design",
      description: "Making complex agricultural information easier to navigate.",
      tags: ["Design thinking", "Clarity through design"],
    },
    {
      title: "Business Victoria",
      href: "/business-victoria",
      image: "/images/business-victoria-thumbnail.png",
      alt: "Business Victoria website design",
      description: "Refreshing the experience while improving content discovery.",
      tags: ["Co-design", "Solving complex problems"],
    },
    {
      title: "Penrith City Council",
      href: "/penrith-city-council",
      image: "/images/penrith-city-council-thumbnail.png",
      alt: "Penrith City Council website design",
      description: "Building a connected digital ecosystem across five sites.",
      tags: ["Design ecosystem", "Leading Collaboration"],
    },
  ],
};
