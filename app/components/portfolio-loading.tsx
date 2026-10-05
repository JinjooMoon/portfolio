"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

const portfolioPaths = new Set([
  "/",
  "/penrith-city-council",
  "/agriculture-victoria",
  "/business-victoria",
  "/outdoor-recreation-victoria",
  "/local-councils-sa",
]);

export function PortfolioLoadingScreen({ leaving = false, onComplete }: {
  leaving?: boolean;
  onComplete?: () => void;
}) {
  return (
    <div
      className={`portfolio-loading${leaving ? " portfolio-loading--leaving" : ""}`}
      role="status"
      aria-label="Loading portfolio"
      aria-hidden={leaving || undefined}
      onAnimationEnd={(event) => {
        if (leaving && event.target === event.currentTarget) onComplete?.();
      }}
    >
      <div className="portfolio-loading__identity" aria-hidden="true">
        <span className="portfolio-loading__wordmark">Jinjoo Moon</span>
        <span className="portfolio-loading__indicator" />
      </div>
    </div>
  );
}

export function PortfolioLoadingBoundary({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [phase, setPhase] = useState<"loading" | "leaving" | "complete">("complete");
  const enabled = portfolioPaths.has(pathname);

  useEffect(() => {
    const handleNavigation = (event: MouseEvent) => {
      if (!enabled || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement) || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || !portfolioPaths.has(destination.pathname)) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;

      event.preventDefault();
      setPhase("loading");
      startTransition(() => {
        router.push(`${destination.pathname}${destination.search}${destination.hash}`);
      });
    };

    document.addEventListener("click", handleNavigation, true);
    return () => document.removeEventListener("click", handleNavigation, true);
  }, [enabled, router, startTransition]);

  useEffect(() => {
    if (isPending) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPhase((current) => current === "loading"
      ? (reducedMotion ? "complete" : "leaving")
      : current);
  }, [isPending, pathname]);

  return (
    <>
      {enabled && phase !== "complete" ? (
        <PortfolioLoadingScreen leaving={phase === "leaving"} onComplete={() => setPhase("complete")} />
      ) : null}
      {children}
      <noscript><style>{".portfolio-loading { display: none; }"}</style></noscript>
    </>
  );
}