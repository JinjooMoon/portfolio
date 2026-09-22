"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  sectionIds?: string[];
  variant?: "homepage" | "project";
};

const homepageSectionIds = ["top", "selected-work", "about-contact"];

export function SiteHeader({ sectionIds = homepageSectionIds, variant = "homepage" }: SiteHeaderProps) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomepage = variant === "homepage";

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const updateScrollState = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const atTop = scrollTop <= 10;
      setIsScrolled(!atTop);
      if (atTop) setActiveSection(sectionIds[0] ?? "top");
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop <= 10) {
          setActiveSection(sectionIds[0] ?? "top");
          return;
        }
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-84px 0px -45% 0px", threshold: [0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
    };
  }, [sectionIds]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header site-header--${variant}${isScrolled ? " is-scrolled" : ""}${isHomepage && isScrolled ? " is-homepage-scrolled" : ""}${isMenuOpen ? " is-menu-open" : ""}`}>
      <div className="header-inner content-container">
        <Link className="brand" href="/" onClick={() => { setActiveSection(sectionIds[0] ?? "top"); closeMenu(); }}>Jinjoo Moon</Link>
        <button className="mobile-menu-toggle" type="button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} aria-controls="site-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? (
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <nav id="site-navigation" aria-label="Primary navigation">
          <Link className={isHomepage && activeSection === "top" ? "active" : ""} href="/" onClick={() => { setActiveSection(sectionIds[0] ?? "top"); closeMenu(); }}>Home</Link>
          <Link className={isHomepage && activeSection === "selected-work" ? "active" : ""} href="/#selected-work" onClick={() => { setActiveSection("selected-work"); closeMenu(); }}>Selected work</Link>
          <Link className={isHomepage && activeSection === "about-contact" ? "active" : ""} href="/#about-contact" onClick={() => { setActiveSection("about-contact"); closeMenu(); }}>About &amp; Contact</Link>
        </nav>
      </div>
    </header>
  );
}
