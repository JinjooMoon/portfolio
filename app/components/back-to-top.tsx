"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BackToTopProps = {
  targetId: string;
  variant: "home" | "project";
};

export function BackToTop({ targetId, variant }: BackToTopProps) {
  const slotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLanded, setIsLanded] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const slot = slotRef.current;
      if (!slot) return;

      const visible = window.scrollY > 320;
      const slotRect = slot.getBoundingClientRect();
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const bottomOffset = isMobile ? 24 : 40;
      const fixedTop = window.innerHeight - bottomOffset - slotRect.height;
      const landed = visible && slotRect.top <= fixedTop + 1;

      setIsVisible(visible && (!landed || slotRect.bottom > 0));
      setIsLanded(landed);
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const className = [
    "back-to-top-slot",
    `back-to-top-slot--${variant}`,
    isVisible ? "is-visible" : "",
    isVisible && !isLanded ? "is-fixed" : "",
    isLanded ? "is-landed" : "",
  ].filter(Boolean).join(" ");

  return (
    <div ref={slotRef} className={className}>
      <a
        className="outline-button back-to-top"
        href={`#${targetId}`}
        aria-hidden={!isVisible}
        tabIndex={isVisible ? 0 : -1}
      >
        <span>Back to top</span>
        <Image src="/images/back-to-top-arrow.svg" alt="" width={24} height={24} />
      </a>
    </div>
  );
}