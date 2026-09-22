"use client";

import Image from "next/image";
import { SiteHeader } from "./components/site-header";
import { Pill, SelectedWorkCard } from "./components/selected-work-card";

const projects = [
  {
    title: "Penrith City Council",
    href: "/penrith-city-council",
    image: "/images/penrith-city-council-thumbnail.png",
    alt: "Penrith City Council website design",
    tags: ["Design ecosystem", "Leading Collaboration"],
  },
  {
    title: "Agriculture Victoria",
    href: "/agriculture-victoria",
    image: "/images/agriculture-victoria-thumbnail.png",
    alt: "Agriculture Victoria website design",
    tags: ["Design thinking", "Clarity through design"],
  },
  {
    title: "Business Victoria",
    href: "/business-victoria",
    image: "/images/business-victoria-thumbnail.png",
    alt: "Business Victoria website design",
    tags: ["Visual refresh", "Solving complex problems"],
  },
  {
    title: "Outdoor Recreation Victoria",
    href: "/outdoor-recreation-victoria",
    image: "/images/outdoor-recreation-victoria-thumbnail.png",
    alt: "Outdoor Recreation Victoria website design",
    tags: ["Design under constraints"],
  },
  {
    title: "Local Councils SA",
    href: "/local-councils-sa",
    image: "/images/local-councils-sa-thumbnail.png",
    alt: "Local Councils SA website design",
    tags: ["Visual Excellence"],
  },
];

function OutlineButton({
  children,
  href,
  icon,
  iconAfter = false,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  icon?: string;
  iconAfter?: boolean;
  className?: string;
}) {
  return (
    <a className={`outline-button ${className}`} href={href}>
      {!iconAfter && icon ? <Image src={icon} alt="" width={24} height={24} /> : null}
      <span>{children}</span>
      {iconAfter && icon ? <Image src={icon} alt="" width={24} height={24} /> : null}
    </a>
  );
}

function Footer() {
  return (
    <footer id="about-contact" className="footer-section">
      <div className="content-container">
        <div className="footer-content">
          <h2>About &amp; Contact</h2>
          <div className="contact-grid">
          <section className="footer-card about-card" aria-labelledby="about-heading">
            <div>
              <h3 id="about-heading">A little about me</h3>
              <p>I like getting involved early - understanding the problem, asking questions, exploring ideas and working with people to shape a solution. I also care deeply about the details, from the overall experience down to the final interface.</p>
            </div>
            <div className="about-meta">
              <p><strong>Based in </strong>Melbourne, Australia</p>
              <p><strong>Currently at </strong><a href="https://www.squiz.net/" target="_blank" rel="noreferrer">Squiz</a></p>
              <div className="skills-row">
                <strong>I bring</strong>
                <div className="tag-list">
                  <Pill dark>Product thinking</Pill>
                  <Pill dark>UI craft</Pill>
                  <Pill dark>System thinking</Pill>
                  <Pill dark>Collaboration</Pill>
                </div>
              </div>
            </div>
          </section>
          <section className="footer-card connect-card" aria-labelledby="connect-heading">
            <div>
              <h3 id="connect-heading">Let’s get to know each other.</h3>
              <p>I’d love to hear from you.</p>
            </div>
            <div className="social-links">
              <OutlineButton href="https://www.linkedin.com/in/jinjoopearlmoon/" icon="/images/linkedin-icon.svg">Linkedin</OutlineButton>
              <OutlineButton href="mailto:jinjoo.pearl.moon@gmail.com" icon="/images/email-icon.svg">Email</OutlineButton>
            </div>
          </section>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="footer-bottom">
          <div className="footer-identity">
            <strong>Jin Moon</strong>
            <span>© 2026</span>
          </div>
          <OutlineButton href="#top" icon="/images/back-to-top-arrow.svg" iconAfter className="back-to-top">Back to top</OutlineButton>
          <p>Thanks for stopping by!</p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main id="top" className="page-shell">
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-background" aria-hidden="true" />
        <SiteHeader />
        <div className="content-container hero-content">
          <div className="hero-copy">
            <h1 id="hero-heading">Product designer<br />with a strong UI design background</h1>
            <p>I bring together product thinking, UX and UI craft to create clear, thoughtful digital experiences.</p>
          </div>
          <OutlineButton href="#about-contact" icon="/images/hero-cta-arrow.svg" iconAfter>Learn more about me</OutlineButton>
        </div>
      </section>
      <section id="selected-work" className="work-section" aria-labelledby="work-heading">
        <div className="content-container">
          <h2 id="work-heading">Selected work</h2>
          <div className="project-grid">
            {projects.map((project) => <SelectedWorkCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
