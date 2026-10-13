"use client";

import { useEffect } from "react";

const DEFAULT_TARGET_SELECTOR = ".project-content-section, .project-gallery, .project-related-section";

export function useProjectScrollReveal(selector: string = DEFAULT_TARGET_SELECTOR) {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      return;
    }

    let observer: IntersectionObserver | null = null;
    const trackedNodes: HTMLElement[] = [];

    try {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add("is-visible");
              observer?.unobserve(target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -40px 0px",
          threshold: 0,
        }
      );

      elements.forEach((node) => {
        trackedNodes.push(node);
        const rect = node.getBoundingClientRect();

        // If the user already scrolled past this section (e.g. hash link or page refresh), keep it fully visible
        if (rect.bottom <= 0) {
          node.classList.add("is-visible");
          return;
        }

        node.classList.add("project-reveal", "project-reveal--init");
        observer?.observe(node);
      });

      // Remove the init class on the next frame so transitions only run on subsequent state changes
      requestAnimationFrame(() => {
        trackedNodes.forEach((node) => {
          node.classList.remove("project-reveal--init");
        });
      });

      const handleMotionChange = (event: MediaQueryListEvent) => {
        if (event.matches) {
          trackedNodes.forEach((node) => {
            node.classList.add("is-visible");
            node.classList.remove("project-reveal");
          });
          observer?.disconnect();
        }
      };

      motionQuery.addEventListener("change", handleMotionChange);

      const resetOffscreenSections = () => {
        // When user returns to the top of the project page,
        // reset any sections that are below the viewport so they can animate again when scrolled into view.
        trackedNodes.forEach((node) => {
          const rect = node.getBoundingClientRect();
          if (rect.top >= window.innerHeight) {
            node.classList.remove("is-visible");
            node.classList.add("project-reveal", "project-reveal--init");
            observer?.observe(node);
          }
        });

        requestAnimationFrame(() => {
          trackedNodes.forEach((node) => {
            node.classList.remove("project-reveal--init");
          });
        });
      };

      const handleBackToTopNavigation = () => {
        // Poll briefly until the smooth scroll returns to the top
        let checkCount = 0;
        const intervalId = setInterval(() => {
          checkCount++;
          if (window.scrollY <= 10 || checkCount > 30) {
            clearInterval(intervalId);
            resetOffscreenSections();
          }
        }, 50);
      };

      const handleHashChange = () => {
        if (window.location.hash === "#project-top") {
          handleBackToTopNavigation();
        }
      };

      const handleDocumentClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement | null;
        const anchor = target?.closest?.('a[href="#project-top"]');
        if (anchor) {
          handleBackToTopNavigation();
        }
      };

      window.addEventListener("hashchange", handleHashChange);
      document.addEventListener("click", handleDocumentClick, { passive: true });

      return () => {
        document.removeEventListener("click", handleDocumentClick);
        window.removeEventListener("hashchange", handleHashChange);
        motionQuery.removeEventListener("change", handleMotionChange);
        observer?.disconnect();
        trackedNodes.forEach((node) => {
          node.classList.remove("project-reveal", "is-visible");
        });
      };
    } catch {
      // If observer setup fails, ensure content stays visible
      trackedNodes.forEach((node) => {
        node.classList.remove("project-reveal");
      });
      observer?.disconnect();
    }
  }, [selector]);
}

export function ProjectScrollReveal({ selector = DEFAULT_TARGET_SELECTOR }: { selector?: string }) {
  useProjectScrollReveal(selector);

  useEffect(() => {
    const fade = document.querySelector<HTMLElement>(".project-content-fade");
    const mainContent = document.querySelector<HTMLElement>(".project-main-content");
    if (!fade || !mainContent) return;

    let observer: IntersectionObserver | null = null;
    let fallbackCheck: (() => void) | null = null;

    const hasObserver = typeof window !== "undefined" && "IntersectionObserver" in window;

    if (hasObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const inContent = entry.isIntersecting;
            fade.classList.toggle("is-active", inContent);
          });
        },
        {
          root: null,
          rootMargin: "0px 0px 0px 0px",
          threshold: 0,
        }
      );
      observer.observe(mainContent);
    } else {
      fallbackCheck = () => {
        const rect = mainContent.getBoundingClientRect();
        const inContent = rect.top < window.innerHeight && rect.bottom > 0;
        fade.classList.toggle("is-active", inContent);
      };
      window.addEventListener("scroll", fallbackCheck, { passive: true });
      fallbackCheck();
    }

    return () => {
      observer?.disconnect();
      if (fallbackCheck) window.removeEventListener("scroll", fallbackCheck);
      fade.classList.remove("is-active");
    };
  }, []);

  return <div className="project-content-fade" aria-hidden="true" />;
}
