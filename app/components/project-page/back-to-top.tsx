"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 10);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a className={`project-back-to-top${isVisible ? " is-visible" : ""}`} href="#project-top" aria-hidden={!isVisible} tabIndex={isVisible ? 0 : -1}>
      <span>Back to top</span>
      <Image src="/images/back-to-top-arrow.svg" alt="" width={24} height={24} />
    </a>
  );
}